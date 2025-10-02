import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'حضرت مولانا قمر الزماں صاحب الہ ابادی دامت برکاتہم العالیہ',
    title: 'خلیفہ حضرت مولانا شاہ وصی اللہ صاحب وحضرت مولانا محمد احمد صاحب پرتاپ گڑھی',
    content: 'صبح 22 /صفر 1438 ؁ھ  مدرسے میں حاضری ہوئی طلبہ کرام کی زیارت ہوئی ابھی عمارت کا باقاعدہ انتظام نہیں ہے اس وجہ سے فکر بھی ہو ئی  اور دل سے یہ دعا نکلی کہ اللہ اس کا حسب ضرورت انتظام فرمائے اس لیے آپ حضرات اصحاب خیر سے درخواست ہے کہ اس کی طرف خاص توجہ فرما کر تعاون فرمائیں۔',
  date: '22 صفر 1438ھ'
  },
  {
    name: 'حضرت مولانا پروفیسر ڈاکٹر سید راشد نسیم صاحب ندوی',
    title: 'صدر شعبہ عربی یونیورسٹی حیدرآباد',
    content: 'الحمدللہ اج جامعہ ابو موسیٰ اشعری رضی اللہ تعالی عنہ فاروق نگر پوسٹ دلن ضلع کٹیہار حاضری کی سعادت حاصل ہوئی اس مدرسے نے انتہائی قلیل مدت میں ترقی کی طویل مسافت طے کی۔اس کی کارکردگی کو دیکھ کر یہ یقین ہو چلا کہ انشائاللہ یہ ادارہ ایک اسلامی قلعہ،مینار نور اور اسلامی تعلیم و تربیت کا ایسامرکز ثابت ہوگا جس سے ہماری نئی نسلیں تربیت پا کر اسلام کا نمائندہ بن کر ابھریں گی۔'
  },
   {
    name: 'حضرت مولانا مفتی محمد کلیم صاحب لوہاروی رحمتہ اللہ علیہ ',
    title: 'استاذ حدیث و مفتی دارالعلوم اشرفیہ راندیر سورت گجرات۔',
    content: 'دینی مدارس امت اسلامیہ کے لیے ایک نعمت غیر مترقبہ ہے انہی مدارس میں جامعہ ابو موسی اشعری رضی اللہ تعالی عنہ ہے۔  تمام اہل خیر حضرات سے درخواست ہے کہ مدرسے کا دامے درمے سخنے تعاون فرما کر عنداللہ ماجور ہوں۔'
  },
  {
    name: 'حضرت مولانا اسرار الحق صاحب قاسمی رحمۃ اللہ علیہ ',
    title: ' سابق ممبر آف پارلیمنٹ ورکن شوریٰ دارالعلوم دیوبند۔',
    content: 'جامعہ ابو موسیٰ اشعری رضی اللہ تعالی عنہ فاروق نگر ضلع کٹیہار بہار میں سالانہ اجلاس کے موقع پر حاضری ہوئی مدرسہ کا تعلیمی معیار بلند ہے طلبہ اسلامی اور اخلاقی اقدار سے اراستہ ہیں،اساتذہ باصلاحیت مخلص اور محنتی ہیں نظم و نسق قابل اعتماد ہاتھوں میں ہے۔'
  },
  {
    name: 'حضرت مولانا شوکت علی صاحب بستوی ',
    title: 'ناظم کل ہند رابطہ مدارس اسلامیہ واستاذ تفسیر و ادب دارالعلوم دیوبند۔',
    content: 'ا ٓج مورخہ 25 سفر 1438 ہجری کو جامعہ ابو موسی اشعری فاروق نگر ضلع کٹیہار بہار میں حاضری ہوئی۔یہ مدرسہ 2011 سے قائم ہے اور دینی تعلیم کی نشر و اشاعت نونہالان اسلام کی دینی تربیت اور معاشرے کی اصلاح میں اہم خدمات انجام دے رہا ہے'
  },
  {
    name: 'حضرت مولانا محمد ایوب صاحب سیدھ پوری ',
    title: 'استاذ حدیث اشرفیہ راندیر سورت گجرات۔',
    content: 'بفضلہ تعالی اج مورخہ 26 فروری بروز جمعہ مدرسہ ابو موسی اشری رضی اللہ تعالی عنہ میںحافظ عبدالغفور صاحب مہتمم مرکزی دارالعلوم پال سورت اور ان کے رفقا کے ساتھ مسجد کے افتتاح کے موقع پر حاضری کا شرف حاصل ہوا  یہاں کے حالات  اور نظم دیکھ کر دل کو بہت خوشی ہوئی فی الحال اس ادارے میں درسگاہ بوسیدہ حالت میں ہے اہل خیر حضرات سے گزارش ہے کہ اس طرف توجہ دیں اور دل کھول کر اس ادارے کی امداد کریں ادارہ آپ کی توجہ کا مستحق ہے ۔'
  }
  
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-2">
            <h2 className="font-urdu text-3xl md:text-5xl font-bold text-primary pb-12">
              تاثرات واردین علماء کرام
            </h2>
            <div className="flex justify-center">
              <div className="w-32 h-2 bg-gradient-to-l mb-2 from-yellow-400 to-yellow-600 rounded-full"></div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="space-y-4 text-right">
                  <h3 className="font-urdu text-l font-bold text-primary">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="font-urdu text-sm text-gray-600">
                    {testimonials[currentIndex].title}
                  </p>
                </div>

                <blockquote className="font-urdu md:text-lg  leading-relaxed text-gray-700 text-right">
                  {testimonials[currentIndex].content}
                </blockquote>

                {testimonials[currentIndex].date && (
                  <div className="text-right">
                    <span className="font-urdu text-gray-500">
                      {testimonials[currentIndex].date}
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;