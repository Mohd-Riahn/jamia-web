import React from "react";
import { Star } from "lucide-react";

const SectionList = ({ title, items }) => {
  return (
    <div className="bg-[#fcfcfc] rounded-2xl shadow-lg border border-gray-100 overflow-hidden" dir="rtl">
      {/* Decorative Header */}
      <div className="relative bg-primary/95 p-2 overflow-hidden">
        {/* Title Content */}
        <div className="relative">
          <h2 className="text-xl md:text-2xl font-bold font-urdu text-white text-center mb-4">
            {title}
          </h2>
        </div>
      </div>

      {/* List Content */}
      <div className="p-4 md:p-8">
        <ul className="text-gray-700 font-urdu md:text-lg leading-relaxed">
          {items.map((item, idx) => (
            <li 
              key={idx}
              className="flex items-start space-x-3 rtl:space-x-reverse group hover:bg-primary/5 p-3 rounded-lg transition-all duration-300"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-1 group-hover:bg-primary group-hover:text-white transition-colors pb-[9px]">
                {idx + 1}
              </span>
              <span className="flex-1 pt-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Committees = () => {
  const sections = [
    {
      title: "سر پرستان جامعہ",
      items: [
        "حضرت مولانا منور حسین صاحب سورتی",
        "فقیہ العصر حضرت مولانا خالد سیف اللہ رحمانی صاحب ...",
        "مفسر قرآن حضرت مولانا پروفیسر ڈاکٹر سید راشد نسیم صاحب ندوی ...",
      ],
    },
    {
      title: "اراکین مجلس شوری",
      items: [
        "جناب مولانا مفتی محمد اعزاز حسین صاحب قاسمی مہتمم جامعہ ہذا",
        "حضرت مولانا قربان علی صاحب قاسمی پورنیہ",
        "جناب محمد یوسف صاحب حیدرآباد، تلنگانہ",
        "جناب مولانا محمد شاکر حسین صاحب قاسمی کٹیہار",
        "جناب مولانا مجیب الرحمن صاحب قاسمی پورنیہ",
        "جناب محمد عبدالخبیر صاحب مرگھیا کٹیہار",
        "جناب مولانا محمد انیس صاحب ندوی پورنیہ",
        "مولانا محمد اجتہاد صاحب قاسمی",
      ],
    },
    {
      title: "واردین علماء کرام و دانشوران عظام",
      items: [
        "حضرت مولانا قمر الزماں صاحب الہ آبادی دامت برکاتہم ...",
        "حضرت مولانا اسرار الحق صاحبؒ قاسمی سابق ممبر پارلیمنٹ ...",
        "حضرت مولانا پروفیسر ڈاکٹر سید راشد نسیم صاحب ندوی ...",
        "عزت مآب عالی جناب ڈاکٹر احمد اشفاق کریم صاحب ...",
        // ... rest of the items
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="committees">
      {/* Page Title */}
      <div className="container mx-auto px-4 mb-4 text-center mt-12">
        <h1 className="text-xl md:text-3xl font-bold font-urdu text-primary mb-4">
          جامعہ کے مجالس و کمیٹیاں
        </h1>
        <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
          <div className="w-20 h-0.5 bg-gold"></div>
          <Star className="w-6 h-6 text-gold fill-gold" />
          <div className="w-20 h-0.5 bg-gold"></div>
        </div>
      </div>

      {/* Sections Grid */}
      <div className="max-w-7xl mx-auto ">
        <div className="grid gap-12">
          {sections.map((section, idx) => (
            <SectionList 
              key={idx} 
              title={section.title} 
              items={section.items} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committees;