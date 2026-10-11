window.chineseSubject = {
    id: 'chinese',
    name: 'Tiếng Trung Quốc',
    icon: 'fa-language',
    description: 'Chinh phục tiếng Trung giao tiếp từ cơ bản đến nâng cao.',
    lessons: [
        // ======================= BÀI 1 =======================
        {
            id: 'cn-lesson-1',
            title: 'Bài 1: 你好 (Xin chào)',
            description: 'Học các từ vựng chào hỏi cơ bản, xưng hô, hỏi tên, quốc tịch và cấu trúc câu chữ "是".',
            dialogues: [
                {
                    id: 'd1',
                    title: 'Bài khóa 1: 问好与自我介绍 (Chào hỏi & Giới thiệu)',
                    vocabularies: [
                        { hanzi: '老师', pinyin: 'lǎoshī', meaning: 'thầy giáo, cô giáo, giáo viên', example: { hanzi: '我是老师。', pinyin: 'Wǒ shì lǎoshī.', meaning: 'Tôi là giáo viên.' } },
                        { hanzi: '您', pinyin: 'nín', meaning: 'anh, chị, ông, bà, ngài (kính trọng)', example: { hanzi: '您好！', pinyin: 'Nín hǎo!', meaning: 'Chào ông/bà!' } },
                        { hanzi: '好', pinyin: 'hǎo', meaning: 'tốt, đẹp, khỏe', example: { hanzi: '你好！', pinyin: 'Nǐ hǎo!', meaning: 'Chào bạn!' } },
                        { hanzi: '你', pinyin: 'nǐ', meaning: 'bạn, anh, chị, ông, bà', example: { hanzi: '你是哪国人？', pinyin: 'Nǐ shì nǎ guó rén?', meaning: 'Bạn là người nước nào?' } },
                        { hanzi: '叫', pinyin: 'jiào', meaning: 'gọi là, tên là', example: { hanzi: '我叫李白。', pinyin: 'Wǒ jiào Lǐ Bái.', meaning: 'Tôi tên là Lý Bạch.' } },
                        { hanzi: '什么', pinyin: 'shénme', meaning: 'gì, cái gì', example: { hanzi: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', meaning: 'Bạn tên là gì?' } },
                        { hanzi: '名字', pinyin: 'míngzi', meaning: 'tên', example: { hanzi: '我的名字叫李白。', pinyin: 'Wǒ de míngzi jiào Lǐ Bái.', meaning: 'Tên của tôi là Lý Bạch.' } },
                        { hanzi: '我', pinyin: 'wǒ', meaning: 'tôi, ta, tao', example: { hanzi: '我是法国人。', pinyin: 'Wǒ shì Fǎguó rén.', meaning: 'Tôi là người Pháp.' } },
                        { hanzi: '是', pinyin: 'shì', meaning: 'là, thì', example: { hanzi: '我是老师。', pinyin: 'Wǒ shì lǎoshī.', meaning: 'Tôi là giáo viên.' } },
                        { hanzi: '哪', pinyin: 'nǎ', meaning: 'nào', example: { hanzi: '你是哪国人？', pinyin: 'Nǐ shì nǎ guó rén?', meaning: 'Bạn là người nước nào?' } },
                        { hanzi: '国', pinyin: 'guó', meaning: 'nước, đất nước, quốc gia', example: { hanzi: '中国', pinyin: 'Zhōngguó', meaning: 'Trung Quốc' } },
                        { hanzi: '人', pinyin: 'rén', meaning: 'người', example: { hanzi: '法国人', pinyin: 'Fǎguó rén', meaning: 'Người Pháp' } },
                        { hanzi: '请', pinyin: 'qǐng', meaning: 'mời', example: { hanzi: '请坐！', pinyin: 'Qǐng zuò!', meaning: 'Mời ngồi!' } },
                        { hanzi: '坐', pinyin: 'zuò', meaning: 'ngồi', example: { hanzi: '请坐！', pinyin: 'Qǐng zuò!', meaning: 'Mời ngồi!' } },
                        { hanzi: '谢谢', pinyin: 'xièxie', meaning: 'cảm ơn', example: { hanzi: '谢谢你！', pinyin: 'Xièxie nǐ!', meaning: 'Cảm ơn bạn!' } },
                        { hanzi: '不用谢', pinyin: 'búyòng xiè', meaning: 'không có chi, không cần cảm ơn', example: { hanzi: '不用谢！', pinyin: 'Búyòng xiè!', meaning: 'Không có chi!' } },
                        { hanzi: '不用', pinyin: 'búyòng', meaning: 'không cần', example: { hanzi: '不用客气。', pinyin: 'Búyòng kèqi.', meaning: 'Không cần khách khí.' } },
                        { hanzi: '李白', pinyin: 'Lǐ Bái', meaning: 'Lý Bạch (tên người)', example: { hanzi: '我叫李白。', pinyin: 'Wǒ jiào Lǐ Bái.', meaning: 'Tôi tên là Lý Bạch.' } },
                        { hanzi: '法国', pinyin: 'Fǎguó', meaning: 'Nước Pháp', example: { hanzi: '我是法国人。', pinyin: 'Wǒ shì Fǎguó rén.', meaning: 'Tôi là người Pháp.' } }
                    ],
                    grammar: {
                        title: 'Điểm Ngữ Pháp Bài 1',
                        points: [
                            { 
                                rule: '1. Trật tự từ ngữ trong câu tiếng Hán (Chủ ngữ + Vị ngữ + Tân ngữ)', 
                                desc: 'Các thành phần trong câu tiếng Hán thường được sắp xếp theo thứ tự Chủ ngữ ➔ Vị ngữ ➔ Tân ngữ (giống tiếng Việt).',
                                example: '我叫李白。 / 我是法国人。',
                                pinyin: 'Wǒ jiào Lǐ Bái. / Wǒ shì Fǎguó rén.',
                                meaning: 'Tôi tên là Lý Bạch. / Tôi là người Pháp.',
                                breakdown: [
                                    { word: '我 (Wǒ)', role: 'Chủ ngữ (Tôi)' },
                                    { word: '叫 / 是', role: 'Vị ngữ / Động từ' },
                                    { word: '李白 / 法国人', role: 'Tân ngữ' }
                                ]
                            },
                            { 
                                rule: '2. Đại từ nghi vấn "什么" (gì) và "哪" (nào)', 
                                desc: 'Khi tạo thành câu hỏi, trật tự từ giữ nguyên như câu trần thuật, chỉ cần thay bộ phận cần hỏi bằng đại từ nghi vấn tương ứng.',
                                example: '你叫什么名字？ / 你是哪国人？',
                                pinyin: 'Nǐ jiào shénme míngzi? / Nǐ shì nǎ guó rén?',
                                meaning: 'Bạn tên là gì? / Bạn là người nước nào?',
                                breakdown: [
                                    { word: '什么 (shénme)', role: 'Hỏi tên / sự vật' },
                                    { word: '哪 (nǎ)', role: 'Hỏi lựa chọn / quốc gia' }
                                ]
                            },
                            { 
                                rule: '3. Câu chữ "是" (shì)', 
                                desc: 'Câu chữ "是" do động từ "是" nối hai thành phần trước và sau có liên quan với nhau, biểu thị ý khẳng định, phán đoán.',
                                example: '我是法国人。 / 我是老师。',
                                pinyin: 'Wǒ shì Fǎguó rén. / Wǒ shì lǎoshī.',
                                meaning: 'Tôi là người Pháp. / Tôi là giáo viên.',
                                breakdown: [
                                    { word: '我是...', role: 'Tôi là...' }
                                ]
                            }
                        ],
                        exercises: [
                            { 
                                q: '你是哪国人？ ➔ Đáp án phù hợp là:', 
                                pinyin: 'Nǐ shì nǎ guó rén?',
                                options: [
                                    { hanzi: '我是法国人。', pinyin: 'Wǒ shì Fǎguó rén.' },
                                    { hanzi: '我是老师。', pinyin: 'Wǒ shì lǎoshī.' },
                                    { hanzi: '我是李白。', pinyin: 'Wǒ shì Lǐ Bái.' }
                                ], 
                                answer: '我是法国人。', 
                                exp: 'Câu hỏi hỏi về quốc tịch "哪国人" nên trả lời là "我是法国人" (Tôi là người Pháp).' 
                            },
                            { 
                                q: 'Điền từ thích hợp: 你叫 ______ 名字？', 
                                pinyin: 'Nǐ jiào ______ míngzi?',
                                options: [
                                    { hanzi: '什么', pinyin: 'shénme' },
                                    { hanzi: '哪', pinyin: 'nǎ' },
                                    { hanzi: '是', pinyin: 'shì' }
                                ], 
                                answer: '什么', 
                                exp: 'Dùng đại từ nghi vấn "什么" để hỏi tên: "你叫什么名字？"' 
                            },
                            { 
                                q: 'Dịch câu: "Tôi là giáo viên."', 
                                pinyin: 'Wǒ shì lǎoshī.',
                                options: [
                                    { hanzi: '我是老师。', pinyin: 'Wǒ shì lǎoshī.' },
                                    { hanzi: '我叫老师。', pinyin: 'Wǒ jiào lǎoshī.' },
                                    { hanzi: '我是法国人。', pinyin: 'Wǒ shì Fǎguó rén.' }
                                ], 
                                answer: '我是老师。', 
                                exp: 'Sử dụng cấu trúc câu chữ "是": Chủ ngữ (我) + 是 + Tân ngữ (老师).' 
                            }
                        ]
                    },
                    sentences: [
                        { 
                            target: '叫 我 谢名', 
                            blocks: [
                                { hanzi: '我', pinyin: 'wǒ' },
                                { hanzi: '叫', pinyin: 'jiào' },
                                { hanzi: '谢名', pinyin: 'Xiè Míng' }
                            ], 
                            hint: 'Sắp xếp lại câu: Tôi tên là Tạ Danh.' 
                        },
                        { 
                            target: '我 老师 是', 
                            blocks: [
                                { hanzi: '我', pinyin: 'wǒ' },
                                { hanzi: '是', pinyin: 'shì' },
                                { hanzi: '老师', pinyin: 'lǎoshī' }
                            ], 
                            hint: 'Sắp xếp lại câu: Tôi là giáo viên.' 
                        },
                        { 
                            target: '你 哪国人 是', 
                            blocks: [
                                { hanzi: '你', pinyin: 'nǐ' },
                                { hanzi: '是', pinyin: 'shì' },
                                { hanzi: '哪国人', pinyin: 'nǎ guó rén' }
                            ], 
                            hint: 'Sắp xếp lại câu hỏi: Bạn là người nước nào?' 
                        }
                    ]
                },
                {
                    id: 'd2',
                    title: 'Bài khóa 2: 课文二 (Gặp gỡ trong thang máy)',
                    vocabularies: [
                        { hanzi: '学生', pinyin: 'xuésheng', meaning: 'học sinh, sinh viên', example: { hanzi: '我不是学生。', pinyin: 'Wǒ bú shì xuésheng.', meaning: 'Tôi không phải là sinh viên.' } },
                        { hanzi: '吗', pinyin: 'ma', meaning: 'trợ từ nghi vấn (dùng ở cuối câu hỏi)', example: { hanzi: '你是学生吗？', pinyin: 'Nǐ shì xuésheng ma?', meaning: 'Bạn là sinh viên phải không?' } },
                        { hanzi: '不', pinyin: 'bù', meaning: 'không (phó từ phủ định)', example: { hanzi: '我不是老师。', pinyin: 'Wǒ bú shì lǎoshī.', meaning: 'Tôi không phải là giáo viên.' } },
                        { hanzi: '对不起', pinyin: 'duìbuqǐ', meaning: 'xin lỗi', example: { hanzi: '对不起！', pinyin: 'Duìbuqǐ!', meaning: 'Xin lỗi!' } },
                        { hanzi: '没关系', pinyin: 'méi guānxi', meaning: 'không sao, không có gì', example: { hanzi: '没关系。', pinyin: 'Méi guānxi.', meaning: 'Không sao đâu.' } },
                        { hanzi: '问', pinyin: 'wèn', meaning: 'hỏi', example: { hanzi: '请问', pinyin: 'qǐngwèn', meaning: 'xin hỏi' } },
                        { hanzi: '贵姓', pinyin: 'guìxìng', meaning: 'họ (mang tính trang trọng)', example: { hanzi: '请问，您贵姓？', pinyin: 'Qǐngwèn, nín guìxìng?', meaning: 'Xin hỏi, ngài họ gì?' } },
                        { hanzi: '姓', pinyin: 'xìng', meaning: 'họ, mang họ', example: { hanzi: '我姓王。', pinyin: 'Wǒ xìng Wáng.', meaning: 'Tôi họ Vương.' } },
                        { hanzi: '呢', pinyin: 'ne', meaning: 'trợ từ nghi vấn (...thì sao?)', example: { hanzi: '你呢？', pinyin: 'Nǐ ne?', meaning: 'Còn bạn thì sao?' } },
                        { hanzi: '再见', pinyin: 'zàijiàn', meaning: 'tạm biệt, hẹn gặp lại', example: { hanzi: '王老师，再见！', pinyin: 'Wáng lǎoshī, zàijiàn!', meaning: 'Chào tạm biệt cô Vương!' } },
                        { hanzi: '王', pinyin: 'Wáng', meaning: 'Vương (họ)', example: { hanzi: '我姓王。', pinyin: 'Wǒ xìng Wáng.', meaning: 'Tôi họ Vương.' } },
                        { hanzi: '王语', pinyin: 'Wáng Yǔ', meaning: 'Vương Ngữ (tên người)', example: { hanzi: '我叫王语。', pinyin: 'Wǒ jiào Wáng Yǔ.', meaning: 'Tôi tên là Vương Ngữ.' } },
                        { hanzi: '美国', pinyin: 'Měiguó', meaning: 'Nước Mỹ', example: { hanzi: '你是美国人吗？', pinyin: 'Nǐ shì Měiguó rén ma?', meaning: 'Bạn là người Mỹ phải không?' } }
                    ],
                    grammar: {
                        title: 'Điểm Ngữ Pháp Bài Khóa 2',
                        points: [
                            { 
                                rule: '1. Phó từ phủ định "不" (không)', 
                                desc: 'Phó từ "不" dùng để biểu thị sự phủ định, đứng trước động từ hoặc tính từ.',
                                example: '我不是老师。 / 我不姓李。',
                                pinyin: 'Wǒ bú shì lǎoshī. / Wǒ bù xìng Lǐ.',
                                meaning: 'Tôi không phải là giáo viên. / Tôi không phải họ Lý.',
                                breakdown: [
                                    { word: '不 (bù)', role: 'Phó từ phủ định' },
                                    { word: '是 / 姓', role: 'Động từ' }
                                ]
                            },
                            { 
                                rule: '2. Trợ từ "吗" và câu hỏi đúng sai', 
                                desc: 'Đặt trợ từ "吗" ở cuối câu trần thuật để tạo thành câu hỏi nghi vấn (đúng/sai). Trả lời khẳng định thì bỏ "吗", phủ định thì thêm "不" trước động từ.',
                                example: '你是法国人吗？ ➔ 我是法国人。 / 我不是法国人。',
                                pinyin: 'Nǐ shì Fǎguó rén ma? ➔ Wǒ shì Fǎguó rén. / Wǒ bú shì Fǎguó rén.',
                                meaning: 'Bạn là người Pháp phải không? ➔ Tôi là người Pháp. / Tôi không phải người Pháp.',
                                breakdown: [
                                    { word: '... 吗？', role: 'Trợ từ hỏi đúng/sai' }
                                ]
                            },
                            { 
                                rule: '3. Trợ từ "呢" (1)', 
                                desc: 'Dùng sau danh từ hoặc đại từ trong ngữ cảnh đã rõ ràng để nối tiếp câu hỏi ở phía trên.',
                                example: '我姓李。你呢？ ➔ 我姓王。',
                                pinyin: 'Wǒ xìng Lǐ. Nǐ ne? ➔ Wǒ xìng Wáng.',
                                meaning: 'Tôi họ Lý. Còn bạn? ➔ Tôi họ Vương.',
                                breakdown: [
                                    { word: '... 呢？', role: 'Còn ... thì sao?' }
                                ]
                            }
                        ],
                        exercises: [
                            { 
                                q: 'Sửa câu trần thuật thành câu hỏi với "吗": 我是学生。', 
                                pinyin: 'Wǒ shì xuésheng.',
                                options: [
                                    { hanzi: '你是学生吗？', pinyin: 'Nǐ shì xuésheng ma?' },
                                    { hanzi: '我是学生呢？', pinyin: 'Wǒ shì xuésheng ne?' },
                                    { hanzi: '我不学生。', pinyin: 'Wǒ bù xuésheng.' }
                                ], 
                                answer: '你是学生吗？', 
                                exp: 'Thêm trợ từ nghi vấn "吗" vào cuối câu trần thuật và đổi "我" thành "你" để tạo câu hỏi.' 
                            },
                            { 
                                q: 'Trả lời phủ định cho câu hỏi: 你是美国人吗？', 
                                pinyin: 'Nǐ shì Měiguó rén ma?',
                                options: [
                                    { hanzi: '不是，我是法国人。', pinyin: 'Bú shì, wǒ shì Fǎguó rén.' },
                                    { hanzi: '我是美国人。', pinyin: 'Wǒ shì Měiguó rén.' },
                                    { hanzi: '我姓王。', pinyin: 'Wǒ xìng Wáng.' }
                                ], 
                                answer: '不是，我是法国人。', 
                                exp: 'Trả lời phủ định dùng "不是" (Không phải).' 
                            },
                            { 
                                q: 'Điền từ thích hợp: 请问，您 ______ ？', 
                                pinyin: 'Qǐngwèn, nín ______ ?',
                                options: [
                                    { hanzi: '贵姓', pinyin: 'guǐxìng' },
                                    { hanzi: '什么', pinyin: 'shénme' },
                                    { hanzi: '叫', pinyin: 'jiào' }
                                ], 
                                answer: '贵姓', 
                                exp: 'Mẫu câu hỏi họ lịch sự: "请问，您贵姓？"' 
                            }
                        ]
                    },
                    sentences: [
                        { 
                            target: '你 是 学生 吗', 
                            blocks: [
                                { hanzi: '你', pinyin: 'nǐ' },
                                { hanzi: '是', pinyin: 'shì' },
                                { hanzi: '学生', pinyin: 'xuésheng' },
                                { hanzi: '吗', pinyin: 'ma' }
                            ], 
                            hint: 'Sắp xếp câu hỏi: Bạn là sinh viên phải không?' 
                        },
                        { 
                            target: '我 不是 学生 我 是 老师', 
                            blocks: [
                                { hanzi: '我', pinyin: 'wǒ' },
                                { hanzi: '不是', pinyin: 'bú shì' },
                                { hanzi: '学生', pinyin: 'xuésheng' },
                                { hanzi: '是', pinyin: 'shì' },
                                { hanzi: '老师', pinyin: 'lǎoshī' }
                            ], 
                            hint: 'Sắp xếp câu: Tôi không phải là sinh viên, tôi là giáo viên.' 
                        },
                        { 
                            target: '请问 您 贵姓', 
                            blocks: [
                                { hanzi: '请问', pinyin: 'qǐngwèn' },
                                { hanzi: '您', pinyin: 'nín' },
                                { hanzi: '贵姓', pinyin: 'guìxìng' }
                            ], 
                            hint: 'Sắp xếp câu hỏi lịch sự: Xin hỏi, ngài họ gì?' 
                        }
                    ]
                }
            ]
        },

        // ======================= BÀI 2 =======================
        {
            id: 'cn-lesson-2',
            title: 'Bài 2: 这是你的手机吗 (Đây là điện thoại của bạn à?)',
            description: 'Học cách diễn đạt sự sở hữu (的), hỏi thông tin về ai đó (谁), phó từ (也, 都) và câu vị ngữ tính từ.',
            dialogues: [
                {
                    id: 'l2-d1',
                    title: 'Bài khóa 1: 在教室 (Trong lớp học)',
                    vocabularies: [
                        { hanzi: '同学', pinyin: 'tóngxué', meaning: 'bạn cùng lớp, bạn học', example: { hanzi: '他是我的同学。', pinyin: 'Tā shì wǒ de tóngxué.', meaning: 'Cậu ấy là bạn học của tôi.' } },
                        { hanzi: '早上', pinyin: 'zǎoshang', meaning: 'buổi sáng', example: { hanzi: '早上好！', pinyin: 'Zǎoshang hǎo!', meaning: 'Chào buổi sáng!' } },
                        { hanzi: '这', pinyin: 'zhè', meaning: 'đây, này', example: { hanzi: '这是什么？', pinyin: 'Zhè shì shénme?', meaning: 'Đây là cái gì?' } },
                        { hanzi: '的', pinyin: 'de', meaning: 'trợ từ kết cấu (của)', example: { hanzi: '我的手机', pinyin: 'wǒ de shǒujī', meaning: 'điện thoại của tôi' } },
                        { hanzi: '手机', pinyin: 'shǒujī', meaning: 'điện thoại di động', example: { hanzi: '这是你的手机吗？', pinyin: 'Zhè shì nǐ de shǒujī ma?', meaning: 'Đây là điện thoại của bạn à?' } },
                        { hanzi: '对', pinyin: 'duì', meaning: 'đúng, phải', example: { hanzi: '对，是我的。', pinyin: 'Duì, shì wǒ de.', meaning: 'Đúng, là của tôi.' } },
                        { hanzi: '新', pinyin: 'xīn', meaning: 'mới', example: { hanzi: '新手机', pinyin: 'xīn shǒujī', meaning: 'điện thoại mới' } },
                        { hanzi: '很', pinyin: 'hěn', meaning: 'rất', example: { hanzi: '很好看', pinyin: 'hěn hǎokàn', meaning: 'rất đẹp' } },
                        { hanzi: '好看', pinyin: 'hǎokàn', meaning: 'đẹp, ưa nhìn', example: { hanzi: '你的手机很好看。', pinyin: 'Nǐ de shǒujī hěn hǎokàn.', meaning: 'Điện thoại của bạn rất đẹp.' } },
                        { hanzi: '也', pinyin: 'yě', meaning: 'cũng', example: { hanzi: '我也喜欢。', pinyin: 'Wǒ yě xǐhuan.', meaning: 'Tôi cũng thích.' } },
                        { hanzi: '喜欢', pinyin: 'xǐhuan', meaning: 'thích', example: { hanzi: '你喜欢黑色的手机吗？', pinyin: 'Nǐ xǐhuan hēisè de shǒujī ma?', meaning: 'Bạn có thích điện thoại màu đen không?' } },
                        { hanzi: '黑色', pinyin: 'hēisè', meaning: 'màu đen', example: { hanzi: '黑色的手机', pinyin: 'hēisè de shǒujī', meaning: 'điện thoại màu đen' } },
                        { hanzi: '那', pinyin: 'nà', meaning: 'đó, kia', example: { hanzi: '那是谁的手机？', pinyin: 'Nà shì shuí de shǒujī?', meaning: 'Kia là điện thoại của ai?' } },
                        { hanzi: '谁', pinyin: 'shuí / shéi', meaning: 'ai', example: { hanzi: '他是谁？', pinyin: 'Tā shì shuí?', meaning: 'Anh ấy là ai?' } },
                        { hanzi: '知道', pinyin: 'zhīdào', meaning: 'biết', example: { hanzi: '我不知道。', pinyin: 'Wǒ bù zhīdào.', meaning: 'Tôi không biết.' } }
                    ],
                    grammar: {
                        title: 'Điểm Ngữ Pháp Bài Khóa 1',
                        points: [
                            {
                                rule: '1. Trợ từ kết cấu "的" (Của)',
                                desc: 'Dùng giữa định ngữ và trung tâm ngữ để biểu thị quan hệ sở hữu hoặc bổ nghĩa (Định ngữ + 的 + Trung tâm ngữ). Nếu định ngữ là đại từ nhân xưng và trung tâm ngữ chỉ người thân/quan hệ xã giao, có thể lược bỏ "的".',
                                example: '我的手机 / 我同学',
                                pinyin: 'wǒ de shǒujī / wǒ tóngxué',
                                meaning: 'Điện thoại của tôi / Bạn học của tôi',
                                breakdown: [
                                    { word: '我 / 老师', role: 'Định ngữ' },
                                    { word: '的', role: 'Trợ từ (của)' },
                                    { word: '手机', role: 'Trung tâm ngữ' }
                                ]
                            },
                            {
                                rule: '2. Đại từ nghi vấn "谁" (Ai)',
                                desc: 'Dùng để hỏi thông tin về người, có thể làm chủ ngữ, tân ngữ và định ngữ. Khi làm định ngữ, phía sau phải thêm "的" biểu thị sở hữu.',
                                example: '谁是你老师？ / 那是谁的手机？',
                                pinyin: 'Shuí shì nǐ lǎoshī? / Nà shì shuí de shǒujī?',
                                meaning: 'Ai là giáo viên của bạn? / Đó là điện thoại của ai?',
                                breakdown: [
                                    { word: '谁 (shuí)', role: 'Hỏi người (Ai)' }
                                ]
                            },
                            {
                                rule: '3. Phó từ "也" (Cũng)',
                                desc: 'Biểu thị sự tương đồng, đứng sau chủ ngữ, trước động từ/tính từ để làm trạng ngữ. Trong câu phủ định, "也" phải đặt trước "不".',
                                example: '我也喜欢。 / 我也不知道。',
                                pinyin: 'Wǒ yě xǐhuan. / Wǒ yě bù zhīdào.',
                                meaning: 'Tôi cũng thích. / Tôi cũng không biết.',
                                breakdown: [
                                    { word: '也 (yě)', role: 'Phó từ (cũng)' },
                                    { word: '不 (bù)', role: 'Phủ định (nếu có)' },
                                    { word: '知道', role: 'Động từ/Tính từ' }
                                ]
                            }
                        ],
                        exercises: [
                            {
                                q: 'Điền từ thích hợp: 这 是 我 _____ 手机。',
                                pinyin: 'Zhè shì wǒ _____ shǒujī.',
                                options: [
                                    { hanzi: '的', pinyin: 'de' },
                                    { hanzi: '也', pinyin: 'yě' },
                                    { hanzi: '吗', pinyin: 'ma' }
                                ],
                                answer: '的',
                                exp: 'Dùng trợ từ kết cấu "的" để nối đại từ "我" và danh từ "手机", biểu thị quan hệ sở hữu "điện thoại của tôi".'
                            },
                            {
                                q: 'Dịch câu "Đó là điện thoại của ai?": 那 是 _____ 的 手机？',
                                pinyin: 'Nà shì _____ de shǒujī?',
                                options: [
                                    { hanzi: '谁', pinyin: 'shuí' },
                                    { hanzi: '什么', pinyin: 'shénme' },
                                    { hanzi: '哪', pinyin: 'nǎ' }
                                ],
                                answer: '谁',
                                exp: 'Dùng đại từ nghi vấn "谁" (Ai) đứng trước "的" để hỏi người sở hữu.'
                            },
                            {
                                q: 'Hoàn thành câu phủ định: 他不是老师，我 _____ 不是老师。',
                                pinyin: 'Tā bú shì lǎoshī, wǒ _____ bú shì lǎoshī.',
                                options: [
                                    { hanzi: '也', pinyin: 'yě' },
                                    { hanzi: '很', pinyin: 'hěn' },
                                    { hanzi: '不', pinyin: 'bù' }
                                ],
                                answer: '也',
                                exp: 'Dùng phó từ "也" (cũng) đặt trước "不" để biểu thị sự tương đồng "tôi cũng không phải là giáo viên".'
                            }
                        ]
                    },
                    sentences: [
                        {
                            target: '这 是 你 的 手机 吗',
                            blocks: [
                                { hanzi: '这', pinyin: 'zhè' },
                                { hanzi: '是', pinyin: 'shì' },
                                { hanzi: '你 的', pinyin: 'nǐ de' },
                                { hanzi: '手机', pinyin: 'shǒujī' },
                                { hanzi: '吗', pinyin: 'ma' }
                            ],
                            hint: 'Đây là điện thoại của bạn à?'
                        },
                        {
                            target: '那 是 谁 的 手机',
                            blocks: [
                                { hanzi: '那', pinyin: 'nà' },
                                { hanzi: '是', pinyin: 'shì' },
                                { hanzi: '谁 的', pinyin: 'shuí de' },
                                { hanzi: '手机', pinyin: 'shǒujī' }
                            ],
                            hint: 'Kia là điện thoại của ai?'
                        },
                        {
                            target: '我 也 不 知道',
                            blocks: [
                                { hanzi: '我', pinyin: 'wǒ' },
                                { hanzi: '也', pinyin: 'yě' },
                                { hanzi: '不', pinyin: 'bù' },
                                { hanzi: '知道', pinyin: 'zhīdào' }
                            ],
                            hint: 'Tôi cũng không biết.'
                        }
                    ]
                },
                {
                    id: 'l2-d2',
                    title: 'Bài khóa 2: 在图书馆遇到了 (Gặp nhau ở thư viện)',
                    vocabularies: [
                        { hanzi: '晚上', pinyin: 'wǎnshang', meaning: 'tối, buổi tối', example: { hanzi: '晚上好！', pinyin: 'Wǎnshang hǎo!', meaning: 'Chào buổi tối!' } },
                        { hanzi: '这些', pinyin: 'zhèxiē', meaning: 'những cái này', example: { hanzi: '这些是你的书吗？', pinyin: 'Zhèxiē shì nǐ de shū ma?', meaning: 'Những cuốn sách này là của bạn phải không?' } },
                        { hanzi: '都', pinyin: 'dōu', meaning: 'đều', example: { hanzi: '都是我的书。', pinyin: 'Dōu shì wǒ de shū.', meaning: 'Đều là sách của tôi.' } },
                        { hanzi: '书', pinyin: 'shū', meaning: 'sách', example: { hanzi: '这是一本书。', pinyin: 'Zhè shì yī běn shū.', meaning: 'Đây là một cuốn sách.' } },
                        { hanzi: '英语', pinyin: 'Yīngyǔ', meaning: 'tiếng Anh', example: { hanzi: '是英语书吗？', pinyin: 'Shì Yīngyǔ shū ma?', meaning: 'Là sách tiếng Anh phải không?' } },
                        { hanzi: '汉语', pinyin: 'Hànyǔ', meaning: 'tiếng Hán', example: { hanzi: '是汉语课本。', pinyin: 'Shì Hànyǔ kèběn.', meaning: 'Là giáo trình tiếng Hán.' } },
                        { hanzi: '课本', pinyin: 'kèběn', meaning: 'sách giáo khoa, giáo trình', example: { hanzi: '汉语课本', pinyin: 'Hànyǔ kèběn', meaning: 'giáo trình tiếng Hán' } },
                        { hanzi: '们', pinyin: 'men', meaning: 'dấu hiệu số nhiều (cho đại từ/người)', example: { hanzi: '你们', pinyin: 'nǐmen', meaning: 'các bạn' } },
                        { hanzi: '难', pinyin: 'nán', meaning: 'khó, khó khăn', example: { hanzi: '你们的汉语课本难吗？', pinyin: 'Nǐmen de Hànyǔ kèběn nán ma?', meaning: 'Giáo trình tiếng Hán của các bạn có khó không?' } },
                        { hanzi: '那些', pinyin: 'nàxiē', meaning: 'những cái đó', example: { hanzi: '那些也是你的书吗？', pinyin: 'Nàxiē yě shì nǐ de shū ma?', meaning: 'Những cuốn đó cũng là sách của bạn à?' } },
                        { hanzi: '不错', pinyin: 'búcuò', meaning: 'hay, tốt, không tệ', example: { hanzi: '你的汉语很不错。', pinyin: 'Nǐ de Hànyǔ hěn búcuò.', meaning: 'Tiếng Hán của bạn rất tốt.' } },
                        { hanzi: '米雪', pinyin: 'Mǐ Xuě', meaning: 'Michelle (tên người)', example: { hanzi: '晚上好！米雪', pinyin: 'Wǎnshang hǎo! Mǐ Xuě', meaning: 'Chào buổi tối! Michelle' } },
                        { hanzi: '日语', pinyin: 'Rìyǔ', meaning: 'tiếng Nhật', example: { hanzi: '日语', pinyin: 'Rìyǔ', meaning: 'tiếng Nhật' } },
                        { hanzi: '韩语', pinyin: 'Hányǔ', meaning: 'tiếng Hàn', example: { hanzi: '韩语', pinyin: 'Hányǔ', meaning: 'tiếng Hàn' } },
                        { hanzi: '俄语', pinyin: 'Éyǔ', meaning: 'tiếng Nga', example: { hanzi: '俄语', pinyin: 'Éyǔ', meaning: 'tiếng Nga' } },
                        { hanzi: '西班牙语', pinyin: 'Xībānyáyǔ', meaning: 'tiếng Tây Ban Nha', example: { hanzi: '西班牙语', pinyin: 'Xībānyáyǔ', meaning: 'tiếng Tây Ban Nha' } },
                        { hanzi: '阿拉伯语', pinyin: 'Ālābóyǔ', meaning: 'tiếng Ả Rập', example: { hanzi: '阿拉伯语', pinyin: 'Ālābóyǔ', meaning: 'tiếng Ả Rập' } }
                    ],
                    grammar: {
                        title: 'Điểm Ngữ Pháp Bài Khóa 2',
                        points: [
                            {
                                rule: '1. Phó từ "都" (đều, tất cả)[cite: 15]',
                                desc: 'Phó từ "都" đứng trước động từ hoặc tính từ để biểu thị sự bao quát toàn bộ các đối tượng đã được nhắc đến ở phía trước. Trong câu phủ định, "都" có thể đặt trước "不" (tất cả đều không) hoặc sau "不" (không phải tất cả đều)[cite: 15].',
                                example: '我们都是学生。 / 都不难。[cite: 15]',
                                pinyin: 'Wǒmen dōu shì xuésheng. / Dōu bù nán.[cite: 15]',
                                meaning: 'Chúng tôi đều là học sinh. / Đều không khó.[cite: 15]',
                                breakdown: [
                                    { word: '他们', role: 'Chủ ngữ (số nhiều)' },
                                    { word: '都 (dōu)', role: 'Phó từ (đều)' },
                                    { word: '是', role: 'Động từ' }
                                ]
                            },
                            {
                                rule: '2. Câu vị ngữ tính từ[cite: 16]',
                                desc: 'Sử dụng tính từ làm vị ngữ để miêu tả tính chất, trạng thái của người/sự vật. Cấu trúc cơ bản: Chủ ngữ + (Phó từ chỉ mức độ) + Tính từ. CHÚ Ý: Tuyệt đối không dùng động từ "是" (shì) trước tính từ[cite: 16].',
                                example: '我很好。 / 汉语不难。[cite: 16]',
                                pinyin: 'Wǒ hěn hǎo. / Hànyǔ bù nán.[cite: 16]',
                                meaning: 'Tôi rất khỏe. / Tiếng Hán không khó.[cite: 16]',
                                breakdown: [
                                    { word: '汉语 / 手机', role: 'Chủ ngữ' },
                                    { word: '很 / 不', role: 'Phó từ mức độ/phủ định' },
                                    { word: '难 / 好看', role: 'Tính từ (Vị ngữ)' }
                                ]
                            }
                        ],
                        exercises: [
                            {
                                q: 'Sắp xếp câu: 我们 / 学生 / 都 / 是[cite: 15]',
                                pinyin: 'Wǒmen / xuésheng / dōu / shì[cite: 15]',
                                options: [
                                    { hanzi: '我们都是学生。[cite: 15]', pinyin: 'Wǒmen dōu shì xuésheng.' },
                                    { hanzi: '都是我们学生。[cite: 15]', pinyin: 'Dōu shì wǒmen xuésheng.' },
                                    { hanzi: '我们是都学生。[cite: 15]', pinyin: 'Wǒmen shì dōu xuésheng.' }
                                ],
                                answer: '我们都是学生。',
                                exp: 'Phó từ "都" (đều) phải đứng trước động từ "是" (là)[cite: 15].'
                            },
                            {
                                q: 'Chọn câu ĐÚNG khi nói "Tiếng Hán rất khó":[cite: 16]',
                                pinyin: 'Chọ câu ĐÚNG khi nói "Tiếng Hán rất khó":[cite: 16]',
                                options: [
                                    { hanzi: '汉语是很难。[cite: 16]', pinyin: 'Hànyǔ shì hěn nán.' },
                                    { hanzi: '汉语很难。[cite: 16]', pinyin: 'Hànyǔ hěn nán.' },
                                    { hanzi: '很汉语难。[cite: 16]', pinyin: 'Hěn Hànyǔ nán.' }
                                ],
                                answer: '汉语很难。',
                                exp: 'Trong câu vị ngữ tính từ, trước tính từ không được dùng "是" (là)[cite: 16].'
                            },
                            {
                                q: 'Điền từ: ______ 都是我的书。 (Những cái đó đều là sách của tôi)[cite: 14]',
                                pinyin: '______ dōu shì wǒ de shū.[cite: 14]',
                                options: [
                                    { hanzi: '那', pinyin: 'nà' },
                                    { hanzi: '这些', pinyin: 'zhèxiē' },
                                    { hanzi: '那些', pinyin: 'nàxiē' }
                                ],
                                answer: '那些',
                                exp: 'Đại từ chỉ định số nhiều: "这些" (những cái này), "那些" (những cái đó/kia)[cite: 14].'
                            }
                        ]
                    },
                    sentences: [
                        {
                            target: '这些 都 是 你 的 书 吗',
                            blocks: [
                                { hanzi: '这些', pinyin: 'zhèxiē' },
                                { hanzi: '都', pinyin: 'dōu' },
                                { hanzi: '是', pinyin: 'shì' },
                                { hanzi: '你 的', pinyin: 'nǐ de' },
                                { hanzi: '书', pinyin: 'shū' },
                                { hanzi: '吗', pinyin: 'ma' }
                            ],
                            hint: 'Những cái này đều là sách của bạn à?'
                        },
                        {
                            target: '你们 的 汉语 课本 难 吗',
                            blocks: [
                                { hanzi: '你们 的', pinyin: 'nǐmen de' },
                                { hanzi: '汉语', pinyin: 'Hànyǔ' },
                                { hanzi: '课本', pinyin: 'kèběn' },
                                { hanzi: '难', pinyin: 'nán' },
                                { hanzi: '吗', pinyin: 'ma' }
                            ],
                            hint: 'Giáo trình tiếng Hán của các bạn có khó không?'
                        },
                        {
                            target: '你 的 汉语 很 不错',
                            blocks: [
                                { hanzi: '你 的', pinyin: 'nǐ de' },
                                { hanzi: '汉语', pinyin: 'Hànyǔ' },
                                { hanzi: '很', pinyin: 'hěn' },
                                { hanzi: '不错', pinyin: 'búcuò' }
                            ],
                            hint: 'Tiếng Hán của bạn rất tốt (không tệ).'
                        }
                    ]
                }
            ]
        }
    ]
};
