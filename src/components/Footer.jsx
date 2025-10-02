import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Jamia Imadad ul Uloom</h3>
              <div className="w-16 h-1 bg-gold rounded-full mb-4"></div>
              <p className="font-urdu text-lg leading-loose pb-2 opacity-90">
               اس طرح آپ ادارے کا تعاون فرما سکتے ہیں 
              </p>
              <p className="text-sm opacity-80 leading-relaxed">
                Your trusted companion in Islamic education. We provide holistic learning with spiritual training, discipline, and guidance to nurture future leaders of the Ummah.
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
              <li><a href="#departments" className="hover:text-gold transition-colors duration-300 font-urdu"> شعبہ جات</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300"> Departments</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300 font-urdu">ہماری انتظامیہ </a></li>
              <li><a href="#administration" className="hover:text-gold transition-colors duration-300">Administration</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors duration-300 font-urdu">ہمارے بارے میں</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">About Us</a></li>
              <li><a href="#contact-section" className="hover:text-gold transition-colors duration-300 font-urdu">رابطہ</a></li>
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
                  <p className="font-semibold">+91-300-1234567</p>
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
                  <p className="text-sm opacity-80">Muzaffarpur, India</p>
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
                 <input type="email" placeholder="Your Email" className="p-2 bg-blue-800 text-white rounded-l focus:outline-none w-full" dir="rtl" />
        <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-r hover:bg-yellow-300 transition-colors font-urdu">
          سبسکرائب
        </button>
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
              © 2025 Jamia Imdad ul Uloom. All rights reserved.
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