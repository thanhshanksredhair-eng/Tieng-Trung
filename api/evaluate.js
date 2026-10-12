module.exports = async function handler(req, res) {
    // Cho phép CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Chỉ chấp nhận POST request' });
    }

    try {
        const { imageBase64, targetText } = req.body;
        
        // Kiểm tra xem có gửi dữ liệu lên không
        if (!imageBase64 || !targetText) {
            return res.status(400).json({ error: "Thiếu dữ liệu ảnh hoặc chữ mục tiêu gửi lên từ giao diện." });
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: "Chưa cấu hình GEMINI_API_KEY trong Environment Variables trên Vercel!" });
        }

        const prompt = `Ngươi là một giám khảo chấm thi tiếng Trung cực kỳ tinh mắt.
        Học sinh được yêu cầu viết tay câu sau: "${targetText}".
        Hãy nhìn vào bức ảnh nét chữ viết tay của học sinh và đánh giá.
        
        TRẢ VỀ BẮT BUỘC THEO ĐÚNG ĐỊNH DẠNG JSON SAU (không giải thích thêm, không kèm markdown code block):
        {
            "score": <Điểm số từ 0 đến 100>,
            "feedback": "<Nhận xét chi tiết bằng tiếng Việt>"
        }`;

        const base64Data = imageBase64.includes(',') ? imageBase64.split(',')[1] : imageBase64;

        // Gọi Google Gemini API (dùng mô hình gemini-1.5-flash ổn định nhất)
        const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { text: prompt },
                        { inline_data: { mime_type: "image/jpeg", data: base64Data } }
                    ]
                }]
            })
        });

        const geminiData = await geminiRes.json();

        if (!geminiRes.ok) {
            return res.status(500).json({ error: "Lỗi từ Google API", details: geminiData });
        }

        if (!geminiData.candidates || !geminiData.candidates[0].content) {
            return res.status(500).json({ error: "AI không trả về kết quả hợp lệ", raw: geminiData });
        }

        let rawText = geminiData.candidates[0].content.parts[0].text;
        
        // Dọn dẹp nếu AI lỡ bọc trong markdown ```json ... ```
        rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();

        const resultJSON = JSON.parse(rawText);
        return res.status(200).json(resultJSON);

    } catch (error) {
        console.error("Lỗi Serverless Function:", error);
        return res.status(500).json({ error: "Lỗi nội bộ Server", message: error.message });
    }
};
