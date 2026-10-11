window.americanCultureSubject = {
    id: 'american-culture',
    name: 'Văn Hóa Mỹ (American Culture)',
    icon: 'fa-flag-usa',
    description: 'Kiểm tra kiến thức văn hóa, lịch sử và con người Hoa Kỳ.',
    lessons: [
        {
            id: 'us-test-1',
            title: 'Ôn Tập Tổng Hợp', // Đã loại bỏ chữ Bài 1, Bài 2 cứng nhắc
            description: 'Danh sách các bộ đề trắc nghiệm kiểm tra kiến thức.',
            dialogues: [
                {
                    id: 'us-d1',
                    title: 'Ôn Tập 60 Câu Đề Kiểm Tra', // Hiển thị tên file trực tiếp
                    vocabularies: [], // Bỏ trống Flashcard
                    grammar: {
                        title: 'Trắc nghiệm Kiến thức Văn Hóa Mỹ',
                        points: [], // Bỏ trống Lý thuyết
                        
                        // CẤU TRÚC AUTO-MAPPING: Giúp bạn dễ dàng thêm câu hỏi mới sau này
                        exercises: [
                            {
                                q: "1. Who makes the laws of the U.S.?",
                                opts: ["A. The Presidents", "B. The Senate and the House of Representatives", "C. The Supreme Court", "D. The Constitution Avenue"],
                                ans: "B"
                            },
                            {
                                q: "2. What are the major rivers in the western part of the U.S.?",
                                opts: ["A. The Missouri and the Ohio", "B. The Rio Grande & the Colorado", "C. The Mississippi and the Rio Grande", "D. The Gulf of Mexico and the Colorado"],
                                ans: "B"
                            },
                            {
                                q: "3. Why did the United States enter World War I in 1917?",
                                opts: ["A. Because Germany was using submarines to attack both warships and trade ships.", "B. Because Austria-Hungary declared war on the small country of Serbia.", "C. Because the Central Powers were Austria-Hungary and Germany.", "D. Because the Allied Powers were Russia, France, England, and Italy."],
                                ans: "A"
                            },
                            {
                                q: "4. Which era immediately followed the American Civil War?",
                                opts: ["A. Renaissance", "B. Reconstruction", "C. Gilded Age", "D. Reformation"],
                                ans: "B"
                            },
                            {
                                q: "5. In which year did the United States issue the Declaration of Independence?",
                                opts: ["A. 1812", "B. 1789", "C. 1776", "D. 1861"],
                                ans: "C"
                            },
                            {
                                q: "6. What is the island state of the United States in the Pacific Ocean?",
                                opts: ["A. Alaska", "B. Rhode Island", "C. Hawaii", "D. Washington, D.C."],
                                ans: "C"
                            },
                            {
                                q: "7. When did the American Revolution end?",
                                opts: ["A. In 1773", "B. In 1776", "C. In 1783", "D. In 1787"],
                                ans: "C"
                            },
                            {
                                q: "8. Why did the Boston Tea Party occur?",
                                opts: ["A. Because the colonists could send their products only by British ships.", "B. Because the colonists had to sell some goods only to England at very low prices.", "C. Because the colonists couldn’t send representatives to England to vote on taxes.", "D. Because British officials could enter homes to search for illegal goods."],
                                ans: "C"
                            },
                            {
                                q: "9. What did the U.S. Congress pass to draft young men into the armed forces during the First World War?",
                                opts: ["A. The American Federation of Labor", "B. The Progressive Movement", "C. The Treaty of Versailles", "D. The Selective Service Acts"],
                                ans: "D"
                            },
                            {
                                q: "10. What is the longest river in the United States?",
                                opts: ["A. The Rio Grande", "B. The Colorado", "C. The Missouri", "D. The Mississippi"],
                                ans: "C"
                            },
                            {
                                q: "11. The Bill of Rights is:",
                                opts: ["A. 10 amendments", "B. The 15th Amendment", "C. The entire Constitution", "D. All of the amendments"],
                                ans: "A"
                            },
                            {
                                q: "12. What is the highest court of the United States?",
                                opts: ["A. The Constitution", "B. The Congress", "C. The White House", "D. The Supreme Court"],
                                ans: "D"
                            },
                            {
                                q: "13. When did Columbus discover North America?",
                                opts: ["A. 1294", "B. 1429", "C. 1492", "D. 1776"],
                                ans: "C"
                            },
                            {
                                q: "14. What is NOT true about Abraham Lincoln?",
                                opts: ["A. He was against slavery.", "B. Friends called him \"Honest Abe\".", "C. He wanted the states of the North and South to work together as a nation.", "D. Many of his ideas are basic principles of the government of the U.S."],
                                ans: "D"
                            },
                            {
                                q: "15. What is NOT true about the Library of Congress?",
                                opts: ["A. It has copies of all books with a U.S. Copyright.", "B. It is the oldest federal cultural institution in the country...", "C. It is the research library that officially serves the United States Congress...", "D. It is the meeting place of the United States Congress and the seat of the legislative branch..."],
                                ans: "D"
                            },
                            {
                                q: "16. What did NOT happen during the Industrial Revolution in the United States?",
                                opts: ["A. Machines changed the methods of production.", "B. People produced most goods by hand.", "C. America grew to be an industrial power.", "D. Mass production made manufacturing quick and cheap."],
                                ans: "B"
                            },
                            {
                                q: "17. What is NOT true about the White House?",
                                opts: ["A. It is located at 1600 Pennsylvania Avenue in Washington, D.C.", "B. It is the official residence and workplace of the president of the U.S.", "C. The term \"White House\" is often used as a metonym for the president.", "D. It has been the residence of every U.S. president since Jefferson in 1800."],
                                ans: "D"
                            },
                            {
                                q: "18. _________ wrote newspaper stories and spoke on issues such as the responsibility of the white man toward other peoples...",
                                opts: ["A. John James Audubon", "B. Samuel Clemens", "C. Cesar Chavez", "D. Thomas A. Edison"],
                                ans: "B"
                            },
                            {
                                q: "19. What monument is a tall obelisk that honors the first president of the U.S.?",
                                opts: ["A. Washington Monument", "B. Lincoln Monument", "C. Jefferson Monument", "D. Adams Monument"],
                                ans: "A"
                            },
                            {
                                q: "20. Where does the U.S. Congress meet and make the laws of the land?",
                                opts: ["A. The White House", "B. The Capitol", "C. The Senate", "D. The House of Representatives"],
                                ans: "B"
                            },
                            {
                                q: "21. What was the official name of the states that seceded from the United States during the American Civil War?",
                                opts: ["A. South States of America", "B. Union States of America", "C. Confederacy", "D. Confederate States of America"],
                                ans: "D"
                            },
                            {
                                q: "22. With what country did the United States form an alliance during the Revolutionary War?",
                                opts: ["A. France", "B. Canada", "C. Mexico", "D. Spain"],
                                ans: "A"
                            },
                            {
                                q: "23. How did the Great Depression begin?",
                                opts: ["A. Many people lost confidence in the U.S. economy.", "B. American goods were expensive, but wages were low.", "C. Investors sold their stocks, and the stock market crashed.", "D. Millions of workers lost their jobs because businesses, factories, and banks closed."],
                                ans: "C"
                            },
                            {
                                q: "24. _________ was a Founding Father of the United States. He wrote, published, created useful inventions...",
                                opts: ["A. Lawrence Welk", "B. Benjamin Franklin", "C. John James Audubon", "D. Cesar Chavez"],
                                ans: "B"
                            },
                            {
                                q: "25. Why did the U.S. declare war on Japan in World War II?",
                                opts: ["A. Because Japan attacked Pearl Harbor in Hawaii.", "B. Because the army of Adolf Hitler invaded Poland.", "C. Because the other Axis countries, including Italy and Japan, supported Germany.", "D. Because U.S. Congress wanted to avoid involvement in world affairs and stay neutral."],
                                ans: "A"
                            },
                            {
                                q: "26. Before becoming the President, he was a farmer and lawyer from Virginia, and was also a scientist, an inventor...",
                                opts: ["A. George Washington", "B. Abraham Lincoln", "C. John F. Kennedy", "D. Thomas Jefferson"],
                                ans: "D"
                            },
                            {
                                q: "27. What was NOT one of the effects of World War II?",
                                opts: ["A. Over 22 million people died.", "B. The U.S. and the U.S.S.R. became the two leading powers in the world.", "C. The Allied countries organized the United Nations to solve problems among nations.", "D. The U.S. became one of the original members of the League of Nations to keep the peace."],
                                ans: "D"
                            },
                            {
                                q: "28. Which two U.S. holidays celebrate the birthdays of historical individuals?",
                                opts: ["A. Martin Luther King Jr. Day and Veterans Day", "B. Presidents Day and Martin Luther King Jr. Day", "C. Memorial Day and Presidents Day", "D. Christmas Day and Thanksgiving"],
                                ans: "B"
                            },
                            {
                                q: "29. Thousands of Americans traveled in _________ to _________ territories to start new lives.",
                                opts: ["A. covered wagons / eastern", "B. covered wagons / western", "C. cars / eastern", "D. cars / western"],
                                ans: "B"
                            },
                            {
                                q: "30. Which American symbol is located in Philadelphia?",
                                opts: ["A. White House", "B. Star-Spangled Banner", "C. Liberty Bell", "D. Statue of Liberty"],
                                ans: "C"
                            },
                            {
                                q: "31. Which amendment guaranteed civil and legal rights to African Americans and formerly enslaved persons...?",
                                opts: ["A. 10th Amendment", "B. 12th Amendment", "C. 14th Amendment", "D. 16th Amendment"],
                                ans: "C"
                            },
                            {
                                q: "32. Which U.S. state is ranked number 1 in population?",
                                opts: ["A. California", "B. New York", "C. Hawaii", "D. Wyoming"],
                                ans: "A"
                            },
                            {
                                q: "33. How did the Great Depression end?",
                                opts: ["A. The government made payments to unemployed people, farmers, and homeowners.", "B. President Roosevelt wanted to relieve economic suffering.", "C. The New Deal government created jobs to help the U.S. recover from the Depression.", "D. President Roosevelt started the New Deal of relief, recovery, and reform."],
                                ans: "C"
                            },
                            {
                                q: "34. The state of Alaska is northwest of ______.",
                                opts: ["A. Mexico", "B. Atlantic Ocean", "C. Canada", "D. Pacific Ocean"],
                                ans: "C"
                            },
                            {
                                q: "35. What is NOT true about Abraham Lincoln?",
                                opts: ["A. He was against slavery.", "B. Friends called him \"Honest Abe\".", "C. Many of his ideas are basic principles of the government of the U.S.", "D. He wanted the states of the North and South to work together as a nation."],
                                ans: "C"
                            },
                            {
                                q: "36. In 1803, President Jefferson bought the territory west of the Mississippi River from France in _________.",
                                opts: ["A. Florida", "B. Louisiana", "C. Texas", "D. Oregon"],
                                ans: "B"
                            },
                            {
                                q: "37. During the westward migration, no wagon traveled _________ because wagon trains were important for protection against the _________.",
                                opts: ["A. with guns / British", "B. alone / Indians", "C. with others / Indians", "D. in a circle / British"],
                                ans: "C"
                            },
                            {
                                q: "38. How long is it from the east coast to the west coast of the United States?",
                                opts: ["A. About 3,000 miles (4,800 kilometers)", "B. About 2,500 miles (4,000 kilometers)", "C. About 2,000 miles (3,200 kilometers)", "D. About 1,500 miles (2,400 kilometers)"],
                                ans: "A"
                            },
                            {
                                q: "39. Who was an automobile manufacturer and the first to sell cars with eight-cylinder engines?",
                                opts: ["A. Henry Ford", "B. John James Audubon", "C. Cesar Chavez", "D. Thomas A. Edison"],
                                ans: "A"
                            },
                            {
                                q: "40. How many years did the American Civil War last?",
                                opts: ["A. 2 years", "B. 4 years", "C. 5 years", "D. 7 years"],
                                ans: "B"
                            },
                            {
                                q: "41. Who commanded the Confederate army in the American Civil War?",
                                opts: ["A. Robert E. Lee", "B. Ulysses S. Grant", "C. Abraham Lincoln", "D. Stonewall Jackson"],
                                ans: "A"
                            },
                            {
                                q: "42. The U.S. annexed the territory of _________ in 1845.",
                                opts: ["A. Florida", "B. Texas", "C. Louisiana", "D. Oregon"],
                                ans: "B"
                            },
                            {
                                q: "43. When did the Boston Tea Party occur?",
                                opts: ["A. 1429", "B. 1789", "C. 1773", "D. 1776"],
                                ans: "C"
                            },
                            {
                                q: "44. What do the red and white stripes on the American flag symbolize?",
                                opts: ["A. The 13 kings of England", "B. The 13 first presidents of the USA", "C. The 13 colonies that declared independence", "D. The day on which the flag was adopted—June 13, 1777"],
                                ans: "C"
                            },
                            {
                                q: "45. Which two U.S. holidays focus on celebrating the sacrifice of men and women in the Armed Forces?",
                                opts: ["A. Columbus Day and Veterans Day", "B. Veterans Day and Memorial Day", "C. Labor Day and Memorial Day", "D. Memorial Day and Presidents Day"],
                                ans: "B"
                            },
                            {
                                q: "46. What monument shows the 16th president sitting in a chair inside a building with columns?",
                                opts: ["A. Abraham Lincoln", "B. Thomas Jefferson", "C. George Washington", "D. John F. Kennedy"],
                                ans: "A"
                            },
                            {
                                q: "47. What is the name of the U.S. national anthem written by Francis Scott Key?",
                                opts: ["A. America the Beautiful", "B. The Star-Spangled Banner", "C. This Land Is Your Land", "D. You're a Grand Old Flag"],
                                ans: "B"
                            },
                            {
                                q: "48. What was the U.S.’ first constitution called?",
                                opts: ["A. The Articles of Confederation", "B. The Declaration of Independence", "C. The Federalist Papers", "D. The Emancipation Proclamation"],
                                ans: "A"
                            },
                            {
                                q: "49. What did the 13th Amendment to the U.S. Constitution grant?",
                                opts: ["A. All citizens equal protection under the law", "B. Federal power to conscript", "C. Abolishment of slavery", "D. Black men the right to vote"],
                                ans: "C"
                            },
                            {
                                q: "50. What do the 50 stars stand for on the American flag?",
                                opts: ["A. The 50 state capital cities", "B. The 50 presidents", "C. The 50 states", "D. 50 countries"],
                                ans: "C"
                            },
                            {
                                q: "51. What are the two main mountain chains in the U.S.?",
                                opts: ["A. The Sierra Nevadas and the Cascades", "B. The Appalachians and the Rockies", "C. The Appalachians and the Great Plains", "D. The Rockies and the Sierra Nevadas"],
                                ans: "B"
                            },
                            {
                                q: "52. Which U.S. state is ranked number 1 in land area?",
                                opts: ["A. Alaska", "B. California", "C. Texas", "D. Wyoming"],
                                ans: "A"
                            },
                            {
                                q: "53. Where is the headquarters of the United Nations located?",
                                opts: ["A. Washington, D.C.", "B. New York City, New York", "C. Keystone, South Dakota", "D. San Francisco, California"],
                                ans: "B"
                            },
                            {
                                q: "54. How did World War II end?",
                                opts: ["A. The Allies (France, England, and later the Soviet Union) opposed Germany.", "B. President Truman made the decision to drop atomic bombs on Hiroshima and Nagasaki.", "C. U.S. Congress passed Neutrality Acts to keep the seas free in the 1930s.", "D. Germany invaded countries and enslaved, tortured, and killed many groups of people."],
                                ans: "B"
                            },
                            {
                                q: "55. What is NOT a cause of the American Revolution?",
                                opts: ["A. The colonists were used to freedom and self-government.", "B. The colonists didn’t need the Mother Country for protection anymore.", "C. The colonists passed stricter laws to punish Britain and have more control.", "D. The colonists’ lives were difficult because of strict laws about trade, settlement, and soldiers."],
                                ans: "C"
                            },
                            {
                                q: "56. What is NOT true about Thomas Jefferson?",
                                opts: ["A. He believed that \"all men are created equal\".", "B. He wrote the \"Declaration of Independence\".", "C. He is often called \"the Father of Our Country\".", "D. He said that power must come from \"the consent of the governed\"."],
                                ans: "C"
                            },
                            {
                                q: "57. Who created machines for stock brokers and telegraph services, the light bulb, the movie projector, the phonograph, and other useful inventions?",
                                opts: ["A. Thomas Edison", "B. Henry Ford", "C. Benjamin Franklin", "D. Hideyo Noguchi"],
                                ans: "A"
                            },
                            {
                                q: "58. Why did the League of Nations fail?",
                                opts: ["A. Because it was President Woodrow Wilson’s plan for a world organization to prevent future wars.", "B. Because the U.S. Senate rejected it to avoid involvement in world affairs.", "C. Because it involved the economies and people of many countries.", "D. Because President Wilson wanted freedom of the seas and trade and self-determination."],
                                ans: "B"
                            },
                            {
                                q: "59. What is the capital city of the United States?",
                                opts: ["A. Capitol", "B. New York", "C. Washington", "D. Washington, D.C."],
                                ans: "D"
                            },
                            {
                                q: "60. What is NOT true about John F. Kennedy?",
                                opts: ["A. He was against nuclear weapons.", "B. He tried to stop Communism with the Peace Corps.", "C. He supported civil rights, fair housing, and programs to stop poverty.", "D. He wanted more money for education and medical care for young people."],
                                ans: "A"
                            }
                        ].map(item => {
                            // Hàm này tự động quét và map lại cấu trúc cho phù hợp với core của index.html
                            const correctOpt = item.opts.find(o => o.startsWith(item.ans + '.'));
                            return {
                                q: item.q,
                                pinyin: '', 
                                options: item.opts.map(o => ({ hanzi: o, pinyin: '' })),
                                answer: correctOpt || item.opts[0],
                                exp: `Đáp án đúng là: ${correctOpt}`
                            };
                        })
                    },
                    sentences: [] // Bỏ trống ghép câu
                }
            ]
        }
    ]
};
