import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "عمرہ پیکج - بنیادی",
    titleEn: "Essential Umrah Package",
    duration: "۱۰ دن",
    durationEn: "10 Days",
    price: "PKR 150,000",
    features: [
      "ایئر ٹکٹ شامل",
      "مکہ و مدینہ میں قیام",
      "زیارات گائیڈ",
      "گروپ ٹرانسپورٹ"
    ],
    featuresEn: [
      "Air ticket included",
      "Accommodation in Makkah & Madinah", 
      "Ziyarat guide",
      "Group transportation"
    ],
    phone: "+92-300-1234567",
    whatsapp: "+92-300-1234567"
  },
  {
    id: 2,
    title: "عمرہ پیکج - پریمیم",
    titleEn: "Premium Umrah Package",
    duration: "۱۵ دن",
    durationEn: "15 Days",
    price: "PKR 250,000",
    features: [
      "۵ ستارہ ہوٹل",
      "پرائیویٹ ٹرانسپورٹ",
      "مکمل زیارات",
      "تمام کھانے شامل"
    ],
    featuresEn: [
      "5-star hotels",
      "Private transportation",
      "Complete Ziyarat tours",
      "All meals included"
    ],
    phone: "+92-300-1234567",
    whatsapp: "+92-300-1234567"
  },
  {
    id: 3,
    title: "عمرہ پیکج - فیملی",
    titleEn: "Family Umrah Package",
    duration: "۱۲ دن",
    durationEn: "12 Days",
    price: "PKR 180,000",
    features: [
      "فیملی روم",
      "بچوں کے لیے خصوصی سہولات",
      "خواتین گائیڈ دستیاب",
      "لانڈری سروس"
    ],
    featuresEn: [
      "Family rooms",
      "Special facilities for children",
      "Female guide available",
      "Laundry service"
    ],
    phone: "+92-300-1234567",
    whatsapp: "+92-300-1234567"
  }
];

const UmrahPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Umrah Packages
          </h2>
          <p className="font-urdu text-xl text-primary mb-4">
            عمرہ پیکجز
          </p>
          <div className="w-20 h-1 bg-gold rounded-full mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Choose from our carefully crafted packages designed for your spiritual journey
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 rounded-3xl border-2 border-border/50 hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary-foreground text-2xl">🕌</div>
                </div>
                <CardTitle className="text-xl text-primary mb-2">{pkg.titleEn}</CardTitle>
                <CardDescription className="font-urdu text-lg font-semibold text-foreground">
                  {pkg.title}
                </CardDescription>
                <div className="text-2xl font-bold text-gold mt-2">{pkg.price}</div>
                <div className="text-sm text-foreground/60">
                  <span className="font-urdu">{pkg.duration}</span> ({pkg.durationEn})
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {pkg.featuresEn.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-foreground/80">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-urdu font-semibold py-3 transition-all duration-300 hover:shadow-card"
                      onClick={() => setSelectedPackage(pkg)}
                    >
                      مزید تفصیل
                    </Button>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-md rounded-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-center text-primary text-xl">
                        {pkg?.titleEn}
                      </DialogTitle>
                      <DialogDescription className="text-center font-urdu text-lg font-semibold">
                        {pkg?.title}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-6 pt-4">
                      {/* Contact Options */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                          <Phone className="w-5 h-5 text-primary" />
                          <span className="font-semibold text-foreground">{pkg?.phone}</span>
                        </div>
                        
                        <a 
                          href={`https://wa.me/${pkg?.whatsapp?.replace(/[^0-9]/g, '')}?text=السلام علیکم، میں ${pkg?.title} کے بارے میں معلومات چاہتا ہوں`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-2xl font-urdu font-semibold py-3">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            واٹس ایپ پر رابطہ کریں
                          </Button>
                        </a>
                        
                        <Button 
                          variant="outline"
                          className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-2xl font-urdu font-semibold py-3"
                          onClick={scrollToContact}
                        >
                          <MapPin className="w-4 h-4 mr-2" />
                          رابطہ کریں
                        </Button>
                      </div>
                      
                      {/* Package Features */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-center text-primary">Package Includes:</h4>
                        <div className="space-y-2">
                          {pkg?.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm font-urdu">
                              <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UmrahPackages;