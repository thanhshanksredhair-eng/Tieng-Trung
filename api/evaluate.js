// File: api/evaluate.js
export default async function handler(req, res) {
    // Chỉ chấp nhận phương thức POST gửi từ web lên
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Chỉ chấp nhận POST request' });
    }

    try {
        // Nhận dữ liệu từ Lễ tân (Frontend)
        const { imageBase64, targetText } = req.body;
        
        // Lấy chìa khóa bí mật đã giấu trong két sắt của Vercel
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            throw new Error("Chưa cài đặt GEMINI_API_KEY trên Vercel");
        }

        // Lời thì thầm với AI (Prompt)
        const prompt = `Ngươi là một giám khảo chấm thi tiếng Trung cực kỳ tinh mắt.
        Học sinh được yêu cầu viết tay câu sau: "${targetText}".
        Hãy nhìn vào bức ảnh nét chữ viết tay của học sinh và đánh giá.
        
        TRẢ VỀ BẮT BUỘC THEO ĐÚNG ĐỊNH DẠNG JSON SAU (không giải thích thêm):
        {
            "score": <Điểm số từ 0 đến 100 dựa trên độ chính xác và đẹp của nét chữ>,
            "feedback": "<Nhận xét chi tiết bằng tiếng Việt. Nếu sai nét nào, thiếu chữ nào thì chỉ ra cụ thể. Nếu đúng thì khen ngợi.>"
        }`;

        // Trích xuất mã base64 (Bỏ phần tiền tố 'data:image/jpeg;base64,')
        const base64Data = imageBase64.includes(',') ? imageBase64.split(',')[1] : imageBase64;

        // Gọi điện cho Google Gemini 1.5 Flash
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
                // Ép AI phải trả về chuẩn JSON
                generationConfig: { response_mime_type: "application/json" }
            })
        });

        const data = await response.json();
        
        // Bóc tách kết quả AI gửi về
        const resultText = data.candidates[0].content.parts[0].text;
        const resultJSON = JSON.parse(resultText);

        // Gửi điểm số ra cho Lễ tân
        res.status(200).json(resultJSON);

    } catch (error) {
        console.error("Lỗi AI:", error);
        res.status(500).json({ error: "Lỗi nội bộ khi chấm điểm", details: error.message });
    }
}
