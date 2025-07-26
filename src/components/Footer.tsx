import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Al Majd Tour & Travels</h3>
              <div className="w-16 h-1 bg-gold rounded-full mb-4"></div>
              <p className="font-urdu text-lg leading-loose opacity-90">
                آپ کے روحانی سفر کے لیے قابل اعتماد پارٹنر
              </p>
              <p className="text-sm opacity-80 leading-relaxed">
                Your trusted partner for spiritual journeys. We provide comprehensive Umrah and Ziyarat packages with complete guidance and comfort.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-all duration-300 hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-all duration-300 hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-all duration-300 hover:scale-110">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <div className="w-12 h-0.5 bg-gold rounded-full mb-4"></div>
            </div>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gold transition-colors duration-300 font-urdu">عمرہ پیکجز</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Umrah Packages</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300 font-urdu">زیارت ٹورز</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Ziyarat Tours</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300 font-urdu">ہمارے بارے میں</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300 font-urdu">رابطہ</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
              <div className="w-12 h-0.5 bg-gold rounded-full mb-4"></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">+92-300-1234567</p>
                  <p className="text-sm opacity-80 font-urdu">۲۴/۷ دستیاب</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">info@almajdtours.com</p>
                  <p className="text-sm opacity-80">Quick Response</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Main Boulevard, Gulberg III</p>
                  <p className="text-sm opacity-80">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
              <div className="w-12 h-0.5 bg-gold rounded-full mb-4"></div>
            </div>
            <div className="space-y-4">
              <p className="text-sm opacity-90 font-urdu leading-loose">
                خصوصی آفرز اور اپڈیٹس کے لیے سبسکرائب کریں
              </p>
              <p className="text-sm opacity-80">
                Subscribe for special offers and updates
              </p>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <Input 
                  placeholder="آپ کا ای میل / Your Email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 rounded-xl"
                />
                <Button 
                  size="sm" 
                  className="bg-gold hover:bg-gold/90 text-gold-foreground px-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="font-urdu">سبسکرائب</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Islamic Quote Section */}
      <div className="border-t border-primary-foreground/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="font-arabic text-xl leading-loose text-gold">
              "وَمَن دَخَلَهُ كَانَ آمِنًا"
            </p>
            <p className="font-urdu text-lg leading-loose opacity-90">
              "اور جو اس میں داخل ہو وہ محفوظ ہو"
            </p>
            <p className="text-sm opacity-80">
              "And whoever enters it shall be safe" - Quran 3:97
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © 2024 Al Majd Tour & Travels. All rights reserved.
            </div>
            <div className="flex space-x-6 rtl:space-x-reverse text-sm opacity-80">
              <a href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-gold transition-colors duration-300 font-urdu">شرائط و ضوابط</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;