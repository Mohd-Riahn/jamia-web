import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    question: "کیا ویزہ شامل ہے؟",
    questionEn: "Is visa included?",
    answer: "جی ہاں، ہمارے تمام پیکجز میں سعودی عرب کا ویزہ شامل ہے۔ ہم آپ کے لیے تمام ضروری کاغذات تیار کرتے ہیں۔",
    answerEn: "Yes, Saudi Arabia visa is included in all our packages. We prepare all necessary documents for you."
  },
  {
    id: "item-2", 
    question: "عمرہ پیکج کی مدت کتنی ہے؟",
    questionEn: "What is the duration of Umrah packages?",
    answer: "ہمارے پیکجز ۱۰ سے ۱۵ دن تک کے ہیں۔ آپ اپنی ضرورت کے مطابق پیکج منتخب کر سکتے ہیں۔",
    answerEn: "Our packages range from 10 to 15 days. You can choose according to your needs."
  },
  {
    id: "item-3",
    question: "کیا گروپ گائیڈ دستیاب ہے؟",
    questionEn: "Is group guide available?",
    answer: "جی ہاں، ہمارے تجربہ کار گائیڈز آپ کے ساتھ ہوں گے جو آپ کو تمام زیارت کے مقامات کی تفصیل سے واقفیت کرائیں گے۔",
    answerEn: "Yes, our experienced guides will be with you to provide detailed information about all ziyarat places."
  },
  {
    id: "item-4",
    question: "کھانے کا کیا بندوبست ہے؟",
    questionEn: "What about meal arrangements?",
    answer: "پریمیم پیکجز میں تمام کھانے شامل ہیں۔ بنیادی پیکج میں ناشتہ شامل ہے، باقی کھانے آپ اپنی پسند کے مطابق کر سکتے ہیں۔",
    answerEn: "Premium packages include all meals. Basic package includes breakfast, other meals you can arrange according to your preference."
  },
  {
    id: "item-5",
    question: "ہوٹل کی کیا سہولات ہیں؟",
    questionEn: "What hotel facilities are provided?",
    answer: "ہم حرم شریف کے قریب بہترین ہوٹلز فراہم کرتے ہیں۔ تمام ہوٹلز میں ائیر کنڈیشن، وائی فائی اور دیگر ضروری سہولات موجود ہیں۔",
    answerEn: "We provide the best hotels near Haram Sharif. All hotels have AC, WiFi and other essential facilities."
  },
  {
    id: "item-6",
    question: "ایمرجنسی میں کیا سپورٹ ہے؟",
    questionEn: "What emergency support is available?",
    answer: "ہم ۲۴/۷ ایمرجنسی سپورٹ فراہم کرتے ہیں۔ ہمارا عملہ ہر وقت آپ کی مدد کے لیے دستیاب ہے۔",
    answerEn: "We provide 24/7 emergency support. Our staff is available at all times to help you."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-urdu text-xl text-primary mb-4">
            اکثر پوچھے جانے والے سوالات
          </p>
          <div className="w-20 h-1 bg-gold rounded-full mx-auto mb-6"></div>
          <p className="text-foreground/70">
            Find answers to common questions about our Umrah and Ziyarat packages
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-card rounded-3xl shadow-card p-6 md:p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border border-border/50 rounded-2xl px-6 hover:border-primary/30 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline group py-4">
                  <div className="space-y-1 text-left">
                    <div className="text-base font-semibold text-primary group-hover:text-gold transition-colors duration-300">
                      {faq.questionEn}
                    </div>
                    <div className="font-urdu text-lg text-foreground">
                      {faq.question}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className="space-y-3 text-foreground/80">
                    <p className="font-urdu text-base leading-loose">
                      {faq.answer}
                    </p>
                    <p className="text-sm leading-relaxed">
                      {faq.answerEn}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-4">
            Still have questions? We're here to help!
          </p>
          <p className="font-urdu text-lg text-primary mb-4">
            مزید سوالات؟ ہم یہاں آپ کی مدد کے لیے ہیں!
          </p>
          <a 
            href="#contact-section"
            className="inline-block bg-gradient-primary text-primary-foreground px-8 py-3 rounded-2xl font-semibold hover:shadow-elegant transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;