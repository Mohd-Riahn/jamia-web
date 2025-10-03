
import React from "react";
import { Settings, GraduationCap, Globe, ChevronRight, FileText, Users, Home, CookingPot, BookOpen, School, Library } from "lucide-react";


const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-8 text-center">
    <h2 className="text-3xl font-bold font-urdu text-primary mb-2">{title}</h2>
    {subtitle && <p className="text-muted-foreground font-urdu text-lg">{subtitle}</p>}
    <div className="flex justify-center mt-4">
      <div className="w-24 h-1 bg-gold rounded-full"></div>
    </div>
  </div>
);

const ContentCard = ({ icon: Icon, title, content }) => (
  <div className="bg-primary/5 rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-primary/10">
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <h3 className="font-urdu text-xl mr-4 text-primary">{title}</h3>
    </div>
    <p className="font-urdu text-lg leading-relaxed text-muted-foreground">{content}</p>
  </div>
);

const JamiaContent = () => {
  const sections = [
    {
      icon: Users,
      title: " انجمن ",
      content: "طلبہ کی خوابیدہ صلاحیتوں کو بیدار کرکے ان کے اندر لسانی قدرت اور خطابتی ملکہ پیدا کرنے کے لئے  اندرون جامعہ انجمن قائم ہے  جس کا ہفتہ واری پروگرام اساتذہ کی زیر نگرانی بروز جمعرات منعقد کیا جاتا ہے۔"
    },
    {
      icon: Settings,
      title: "اہتمام و انتظام",
      content: "جامعہ کا انتظام و انصرام مؤقر و معزز و علمائے کرام و دانشوران عظام پر مشتمل مجلس شوری کے ماتحت ہے اس مجلس شوری کے آراء و مشورے سے طے شدہ جملہ امورمہتمم جامعہ روبہ عمل لاتے ہیں "
    },
    {
      icon: GraduationCap,
      title: "تعلیمی نظام",
      content: "جامعہ میں نورانی قاعدہ، ناظرہ قرآن،حفظ کلام پاک اور اعدادیہ تا عربی چہارم کی انتہائی معیاری اور ٹھوس تعلیم کے ساتھ ساتھ انگلش میڈیم سے میٹرک تک کی عصری تعلیم کا بھی عمدہ انتظام ہے۔"
    },
    {
      icon: Home,
      title: "دارالاقامہ",
      content: "جامعہ کا دارالاقامہ اب تک مکمل طور پر ٹین وپھوس سے بنی جھونپڑیوں پر ہی مشتمل تھا مگر فضل خداوندی نیز بہی خواہان جامعہ کی معاونت سے سال گزشتہ دارالاقامہ کے لئے ایک بلڈنگ کی تعمیر شروع کر دی گئی ہے اور چند کمروں کی تعمیر بقدر رہائش پوری کر لی گئی ہے جو طلبہ کی قیام گاہ و درسگاہ کے طور پراستعمال ہورہے ہیں  مگر اب بھی طلبہ کی کثیر تعداد ٹین وپھوس سے بنی جھونپڑیوں میں ہی قیام پذیر ہے اور وہیں ان کی درسگاہیں بھی لگتی ہیں  اس لیے زیر تعمیر بلڈنگ کی جلد از جلد تکمیل اور دارالاقامہ کے لیے ایک دوسری منزل کی تعمیر کا آغاز بے حد ضروری ہے۔"
    },
    {
      icon: Globe,
      title: "دعوت و اصلاح ",
      content: "مسلمانوں میں بڑھتی ہوئی بے دینی اور سماجی منکرات کے سد باب اور خالص اسلامی معاشرہ کی تشکیل کے لیے دعوت و اصلاح کا کام بھی بہت ضروری ہے چنانچہ جامعہ کے زیر اہتمام مختلف علاقوں میں حسب ضرورت دعوت و تبلیغ اور اصلاح معاشرہ کے پروگرام منعقد کیے جاتے ہیں جس میں اندرون و بیرون صوبہ سے علماء وبزرگان دین مدعو کئے جاتے ہیں اور ان کے پرمغز خطابات سے مسلمانوں کی کثیر تعداد مستفیض ہوتی ہے۔ نیز بروز جمعرات اساتذہ جامعہ کے زیر نگرانی 24 گھنٹے اور چھٹیوں میں حسب موقع سہ روزہ و عشرہ کے لیے طلبہ کی کی جماعت علاقائی گاؤں میں بھیجنے کا بھی نظم ہے۔"
    },
    {

      icon: FileText,
      title: " نشرواشاعت ",
      content: "شعبہ ہذا سے اشتہارات کتابچے اور تحفظ سنت و شریعت سے متعلق مضامین شائع کیے جاتے ہیں۔"

    },
    {
      icon: School,
      title: "مکاتب",
      content: "شعبہ ہذا سے استفادہ کرنے والے گاؤں محلے کے بچے اور بچوں کی بڑی تعداد رہتی ہے جن کو تجوید کے ساتھ قرآن کریم اردو اور دینیات کی ضروری تعلیم دی جاتی ہے تاہم علاقہ اور گردونواح میں ایسے مکاتب کا باضابطہ انتظام نہیں ہے جہاں قرآن کریم کی معیاری اور دین کی بنیادی تعلیم ہوتی ہو جو کہ مدرسہ کا بنیادی مقصد اور ہر مسلمان پر فرض ہے اسی لیے ادارہ ہر ممکن کوشش کر رہا ہے کہ اس بنیادی اور انتہائی ضروری اقدام کو روبہ عمل لایا جائے جس کے لیے اصحاب خیر کی خاص توجہ اور تعاون درکار ہے تاکہ یہ اہم کام انجام پا سکے،اللہ تبارک و تعالی اجر جزیل سے نوازے گا۔"
    },
    {
      icon: CookingPot,
      title: " مطبخ",
      content: "اس سال شعبہ ہذا سے مستفیض ہونے والے طلباء کی تعداد 225 رہی جن میں یتیم مسکین اور غریب و نادار طلبہ کی اکثریت اور معمولی فیس دینے والے طلباء بھی چند رہے نیز مذکورہ تعداد میں وقتا فوقتا معمولی کمی زیادتی ہوتی رہتی ہے شعبہ ہذا کے اخراجات زکوۃ صدقات اور عطیات سے پورے کیے جاتے ہیں۔"
    },
    {
      icon: Library,
      title: " کتب خانہ کا قیام",
      content: "کسی بھی تعلیمی ادارے کا سرمایہ کتب خانہ اور لائبریری ہوتی ہے جہاں طلبہ و اساتذہ کے مطالعہ نیز مأخذ و مراجع کے لیے کتب فراہم ہوں اس لیے جامعہ میں ایک کتب خانہ کا قیام عمل میں لا کرکتب اسلامیہ فراہم کرنا ہے۔"
    },
    {
      icon: BookOpen,
      title: " ڈائننگ ہال",
      content: "مہمانان رسول کے تینوں وقت کے کھانے کا انتظام جامعہ ہی کرتا ہے مگر ان کے کھانا کھانے کی کوئی مستقل جگہ نہیں ہے اس لئے ایک ڈائننگ ہال کی تعمیر اشد ضروری ہے  جہاں سب طلبہ ایک ساتھ بیٹھ کر کھانا کھا سکیں۔"
    }
  ];


  return (
    <div className="min-h-screen bg-background pt-8" dir="rtl">
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-urdu mb-6">
              جامعہ عربیہ امداد العلوم
            </h1>
            <p className="text-xl md:text-2xl pt-4 font-urdu opacity-90 max-w-3xl mx-auto leading-relaxed">
              علم و عمل کی روشنی میں مستقبل کی تعمیر
            </p>

          </div>

        </div>
      </div>


      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Departments Section */}
        <section className="mb-20">
          <SectionTitle
            title="شعبہ جات"
            subtitle="جامعہ کے تعلیمی،تربیتی اور انتظامی شعبہ جات مندرجہ ذیل ہیں "
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <ContentCard
                key={index}
                icon={section.icon}
                title={section.title}
                content={section.content}
              />
            ))}
          </div>
        </section>


        {/* Requirements Section */}
        <section className="bg-primary/5 rounded-2xl p-8 mb-20">
          <SectionTitle title="ضروریات" />

          <p className="text-gray-600 text-right font-urdu max-w-3xl mx-auto leading-loose">
            االلہ کا شکر ہے کہ چند سالوں میں جامعہ نے غیر معمولی تعلیمی دعوتی اور اصلاحی خدمات انجام دیا ہے اور جامعہ کی خدمات میں مزید وسعت اور اضافہ کرنے کے لیے تعداد طلباء میں اضافہ کیا گیا ہے اور مزید اضافہ منصوبے میں شامل ہے جس کے لیے جامعہ کی اہم ضروریات اصحاب خیر کی توجہ کی منتظر ہے ۔
            کہ زکوٰۃ کی رقم زکوٰۃ کی مد میں اور دوسرے مدات کی رقم انہی مدات میں استعمال ہوں۔
          </p>
          <div className="space-y-4 font-urdu text-lg md:mr-64">
            <ul className="space-y-4 mt-8">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <ChevronRight className="w-5 h-5 text-gold" />
                <span>دار الاقامہ کی تعمیر</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <ChevronRight className="w-5 h-5 text-gold" />
                <span>لائبریری کے لئے کتابوں اور الماریوں کی فراہمی</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <ChevronRight className="w-5 h-5 text-gold" />
                <span>جنریٹر</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <ChevronRight className="w-5 h-5 text-gold" />
                <span>ڈائننگ ہال کی تعمیر</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <ChevronRight className="w-5 h-5 text-gold" />
                <span>مطبخ کی تعمیر</span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Islamic Pattern Decoration */}
      <div className="h-16 bg-primary/10 w-full flex items-center justify-center">
        <div className="flex space-x-4">
          <div className="w-8 h-8 bg-gold/20 rounded-full"></div>
          <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
          <div className="w-8 h-8 bg-gold/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default JamiaContent;