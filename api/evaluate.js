// File: api/evaluate.js (Bản CommonJS tương thích 100%)
module.exports = async function handler(req, res) {
    // 1. CẤU HÌNH CORS CHO PHÉP WEB KHÁC DÙNG CHUNG API
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Chỉ chấp nhận POST request' });
    }

    try {
        const { imageBase64, targetText } = req.body;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            throw new Error("Chưa cài đặt GEMINI_API_KEY trên Vercel");
        }

        const prompt = `Ngươi là một giám khảo chấm thi tiếng Trung cực kỳ tinh mắt.
        Học sinh được yêu cầu viết tay câu sau: "${targetText}".
        Hãy nhìn vào bức ảnh nét chữ viết tay của học sinh và đánh giá.
        
        TRẢ VỀ BẮT BUỘC THEO ĐÚNG ĐỊNH DẠNG JSON SAU (không giải thích thêm):
        {
            "score": <Điểm số từ 0 đến 100 dựa trên độ chính xác và đẹp của nét chữ>,
            "feedback": "<Nhận xét chi tiết bằng tiếng Việt. Nếu sai nét nào, thiếu chữ nào thì chỉ ra cụ thể. Nếu đúng thì khen ngợi.>"
        }`;

        const base64Data = imageBase64.includes(',') ? imageBase64.split(',')[1] : imageBase64;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { text: prompt },
                        { inline_data: { mime_type: "image/jpeg", data: base64Data } }
                    ]
                }],
                generationConfig: { response_mime_type: "application/json" }
            })
        });

        const data = await response.json();
        
        if (!data.candidates || !data.candidates[0].content) {
            throw new Error("Phản hồi từ Google Gemini không hợp lệ");
        }

        const resultText = data.candidates[0].content.parts[0].text;
        const resultJSON = JSON.parse(resultText);

        res.status(200).json(resultJSON);

    } catch (error) {
        console.error("Lỗi AI:", error);
        res.status(500).json({ error: "Lỗi nội bộ khi chấm điểm", details: error.message });
    }
};
