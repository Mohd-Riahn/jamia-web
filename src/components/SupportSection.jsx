import React from "react";
import { GraduationCap } from "lucide-react";
import { UserRound } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Hammer } from "lucide-react";
import { Home } from "lucide-react";


const supportItems = [
    {
        title: "دارالاقامہ (ہاسٹل)",
        desc: "ہاسٹل کی تعمیر میں شرکت فرما کر تعاون کریں۔",
        icon: <Home />,
    },
    {
        title: "مدرس کی تنخواہ",
        desc: "اوسطاً ایک مدرس کی تنخواہ 12 ہزار روپے ہے۔",
        icon: <UserRound />,
    },
    {
        title: "طالب علم کی کفالت",
        desc: "ماہانہ اخراجات (تعلیمی فیس + قیام و طعام) 1200 روپے۔",
        icon: <GraduationCap />,
    },
    {
        title: "کتب خانہ",
        desc: "کتب خانے کے لیے الماریوں اور اسلامی کتب کی فراہمی۔",
        icon: <BookOpen />,
    },
    {
        title: "تعمیری اشیاء",
        desc: "اینٹ، ریت، سیمنٹ، لوہا وغیرہ کے ذریعہ تعاون۔",
        icon: <Hammer />,
    },
];

const SupportSection = () => {
    return (
        <section className="py-20 bg-gray-50" id="support">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-xl md:text-2xl font-bold text-primary font-urdu mb-4">
                        اس طرح آپ ادارے کا تعاون فرما سکتے ہیں
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto mb-6 rounded-full"></div>
                    <p className="text-gray-600  font-urdu max-w-3xl mx-auto leading-loose">
                        اپنے بزرگوں کے ایصال ثواب یا اپنی آخرت کے لیے اعمال صالحہ کی ذخیرہ اندوزی کی خاطر
                        حسب استطاعت کسی بھی طریقے سے تعاون کر سکتے ہیں۔ ان شاء اللہ آپ کا ایک ایک پیسہ صحیح
                        اور مطلوبہ مصرف میں اور اعلاء کلمۃ اللہ کے لیے استعمال ہوگا۔ نیز اس بات کا اہتمام کیا جائے گا
                        کہ زکوٰۃ کی رقم زکوٰۃ کی مد میں اور دوسرے مدات کی رقم انہی مدات میں استعمال ہوں۔
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {supportItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white group rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-105 
             transition-all border border-gray-100 text-center flex flex-col items-center"
                        >
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10  group-hover:bg-gold group-hover:text-white text-primary mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-primary font-urdu mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 font-urdu text-base leading-relaxed">
                                {item.desc}
                            </p>
                        </div>

                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-14 text-center">
                    <p className="inline-block bg-primary/10 text-primary font-urdu text-lg md:text-xl px-6 py-3 rounded-lg shadow-sm">
                        آپ کا تعاون آپ کے لیے صدقۂ جاریہ ہے
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SupportSection;
