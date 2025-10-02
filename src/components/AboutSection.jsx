import React,{useState} from 'react';

const AboutSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id='intru' className="py-20 bg-gradient-sand">
      <div className="container mx-auto px-4">
       
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col items-end"> {/* Container for right alignment */}
              <h2 className="font-urdu text-right text-3xl md:text-4xl font-bold text-primary mb-9">
                احوال واقعی
              </h2>
              {/*  yellow border */}
              <div className="relative">
                <div className="w-32 h-1 bg-gradient-to-l from-yellow-400 to-gold rounded-full ml-auto"/>
                <div className="w-16 h-1 bg-gradient-to-l from-yellow-300 to-yellow-400 rounded-full ml-auto mt-1"/>
              </div>
            </div>
            </div>
            
            <div className="space- text-foreground/80 leading-relaxed">
              <p className={`font-urdu text-right leading-loose transition-all duration-300 
              ${
                isExpanded
                  ? "line-clamp-none"
                  : "line-clamp-5 md:line-clamp-none"
              }`}
            >
               دین اسلام کی ترقی و بقا علوم اسلامیہ کی نشر و اشاعت اور قرآن و حدیث کی تعلیم و ترویج کے لیے مدارس اسلامیہ کا کردار روز روشن کی طرح عیاں ہے بلکہ یہ کہنا بے جا نہ ہوگا کہ سقوط سلطنت مغلیہ کے بعد بر صغیر پاک و ہند و بنگلہ دیش میں مسلمانوں کی اپنی تہذیب و ثقافت کے ساتھ بقا انہی مدارس اسلامیہ کی رہین منت ہے۔
مدارس کا یہ کردار ہو بھی کیوں نہ جبکہ اس کی بنیاد خود ہمارے آقا محمد صلی اللہ علیہ وسلم نے اپنی مکی زندگی میں دار ارقم اور مدنی زندگی میں صفہ سے رکھ دی تھی مدارس کی انہی مقدس لڑی میں جامعہ ابو موسی اشعری فاروق نگر پوسٹ دلن ضلع کٹیہار بھی ہے جس کی بنیاداحقر نے سن 2011؁ء  میں اپنے رفقائے کار نیز اکابرین و اساتذہ کے مشورے سے ایک مسجد میں انتہائی بے سروسامانی کے عالم میں رکھا۔
    شروعاتی چند سالوں میں ادارے نے کافی کچھ تنگ حالی نیز مخالفین ومعاندین کی طرف سے رکاوٹوں کا سامنا کیا اپنی زمین نہ ہونے کی وجہ سے کئی بار جگہ تبدیل کرنی پڑی۔لیکن اب الحمدللہ، اللہ تعالی کے فضل و عنایت نیز معاونین مخیرین اور بہی خواہان مدرسہ کی توجہ و تعاون کی بنا پر  مدرسے کے نام سے زمین خرید لی گئی ہے اور اس پر ایک عالی شان مسجد کی تعمیر مکمل ہو چکی ہے نیز دارالاقامہ کی ایک عمارت منور منزل کے نام سے زیر تعمیر ہے جس کے اب تک چند کمرے ہی بن پائے ہیں جو مہمانان رسول کی کثیر تعداد کی رہائش نیز درسگاہوں کے لیے  انتہائی ناکافی ہے اس لیے اب بھی مہمانان رسول کی ایک بڑی تعداد ٹین اور گھاس سے بنی جھوپڑیوں میں ہی رہائش پذیر ہے اور وہیں ان کی درسگاہیں بھی لگتی ہیں  ۔
      فی الوقت جامعہ میں تعلیم کے تین شعبہ جات قائم ہیں  شعبہ دینیات و شعبہ عا  لمیت مع عصری تعلیم( انگلش میڈیم سے میٹرک تک) اورشعبہ حفظ  ان تینوں ہی شعبوں میں طلبہ کی تعداد ہر سال بڑھتی ہی جا رہی ہے ، چونکہ ادارے کے پیش نظر مہمانان رسول کو قرآن و احادیث کی اعلی معیاری تعلیم کے ساتھ ساتھ عمدہ اخلاقی تربیت  نیز بہترین سہولیات بھی فراہم کرنا ہے اس لیے زیر تعمیر منزل کی تکمیل کے ساتھ ایک اور دارالاقامہ ایک ڈائننگ ہال اور ایک لائبریری کی اشد ضرورت ہے. جو ان شاء اللہ تعالی فضل خداوندی نیز آپ جیسے معاونین و مخیرین وہمدردان ملت اسلامیہ کی توجہ و عنایت سے ضرور پائے تکمیل کو پہنچے گا۔
<p className="font-urdu text-lg md:text-left text-right leading-loose">
                محمد اعزاز حسین قاسمی
              </p>
              </p>
              
              
             
              {/* Show More / Less Button  */}
            <div className=" md:hidden">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-primary font-urdu underline"
              >
                {isExpanded ? "کم دکھائیں" : "مزید دکھائیں"}
              </button>
            </div>

              
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-foreground/60 font-urdu">شعبہ جات جامعہ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-foreground/60">اراکین مجلس شوری </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-foreground/60 font-urdu">سر پرستان جامعہ</div>
              </div>
            </div>
          </div>         
      </div>
    </section>
  );
};

export default AboutSection;