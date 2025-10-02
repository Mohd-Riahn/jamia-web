import React from "react";
import { BookOpen } from "lucide-react";
import { Users } from "lucide-react";
import { Globe } from "lucide-react";
import { Heart } from "lucide-react";
import { School } from "lucide-react";
import { GraduationCap } from "lucide-react";

const objectivesItems = [
  {
    title: "معیاری دینی تعلیم",
    desc: "نو نہالان امت کو معیاری دینی تعلیم باہم پہنچا کر قلوب کو اسلامی تہذیب و تمدن سے مزین کر کے امت مسلمہ کے درمیان کی دینی خلاکو پر کرنے کی جدوجہد",
    icon: <BookOpen />,
  },
  {
    title: "تحفظ سنت و شریعت",
    desc: "مسلم عوام کی دین بیزاری، بے راہ روی، ضلالت و گمراہی اور احکام خداوندی سے عدولی کا سدباب اور تحفظ سنت و شریعت کی جدوجہد",
    icon: <Heart />,
  },
  {
    title: "دعوتی سرگرمیاں",
    desc: "غیر مسلم بھائیوں کے درمیان دعوتی سرگرمیوں کے ذریعے اشاعت دین اسلام کی سعی پیہم",
    icon: <Globe />,
  },
  {
    title: "اصلاحی پروگرام",
    desc: "بالعموم مرد حضرات اور بالخصوص خواتین کے اندر اصلاحی پروگراموں اور دینی اجتماعات کے ذریعے صاف و شفاف دینی ماحول پیدا کرنے کی کوشش",
    icon: <Users />,
  },
  {
    title: "مکاتب کا قیام",
    desc: "گاؤں کے غریب و نادار مسلمان بچوں کو دینی و عصری تعلیم دینے کے لیے مکاتب کا قیام",
    icon: <School />,
  },
  {
    title: "طلبہ و طالبات کی تربیت",
    desc: "اسکول اور کالج کے طلبہ و طالبات کے لیے دینی تعلیم و تربیت کے مستقل انتظامات",
    icon: <GraduationCap />,
  },
];

const ObjectivesSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="objectives">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-2xl font-bold text-primary font-urdu mb-4">
            جامعہ کے اغراض و مقاصد  
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 font-urdu max-w-3xl mx-auto leading-loose">
            جامعہ ہذا کا قیام دینی و ملی اہم اغراض ومقاصد کے پیش نظر عمل میں لایا گیا ہے
            جن میں سے چند درج ذیل ہیں۔
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectivesItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white group rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-105 
                transition-all border border-gray-100 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10  group-hover:bg-gold group-hover:text-white text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="md:text-xl font-semibold text-primary font-urdu mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 font-urdu text-base leading-loose text-right">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-14 text-center">
          <p className="inline-block bg-primary/10 text-primary font-urdu text-lg md:text-xl px-6 py-3 rounded-lg shadow-sm">
            جامعہ کے اغراض و مقاصد کی تکمیل میں آپ کی دعائیں اور تعاون اہم ہیں
          </p>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
