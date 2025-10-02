import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });


  

  return (
    <section id="contact-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contact Us
          </h2>
          <p className="font-urdu text-xl text-primary mb-4">
            ہم سے رابطہ کریں
          </p>
          <div className="w-20 h-1 bg-gold rounded-full mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Ready to start your spiritual journey? Get in touch with us for personalized consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 md:p-7 px-5 rounded-3xl shadow-elegant ">
            <div>
              <h3 className="text-2xl font-bold text-primary text-center ">Get in touch </h3>
              <p className="font-urdu text-lg text-foreground mb-4 leading-loose text-center">
                آپ کے روحانی سفر کے لیے ہم یہاں ہیں
              </p>
              <p className="text-foreground/70 leading-relaxed text-center">
                Our experienced team is here to guide you through every step of your sacred journey. Contact us for detailed consultation and personalized packages.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 shadow-sm border border-l-gold rounded-2xl">
                <div className="p-6">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Phone</h4>
                      <p className="text-foreground/80">+91-300-1234567</p>
                      <p className="font-urdu text-sm text-foreground/60">۲۴/۷ دستیاب</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 shadow-sm border border-l-gold rounded-2xl">
                <div className="p-6">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Email</h4>
                      <p className="text-foreground/80">info@almajdtours.com</p>
                      <p className="font-urdu text-sm text-foreground/60">فوری جواب</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 shadow-sm border border-l-gold rounded-2xl">
                <div className="p-6">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Office Address</h4>
                      <p className="text-foreground/80">Main Boulevard, Gulberg III</p>
                      <p className="text-foreground/80">Muzaffarpur, India</p>
                      <p className="font-urdu text-sm text-foreground/60">دفتری اوقات: ۹ سے ۶ بجے</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl shadow-elegant pt-4 -px-4">
            <div>
              <div className="text-2xl text-primary text-center">
                Send us a Message
              </div>
              <p className="font-urdu text-lg text-center text-foreground">
                ہمیں پیغام بھیجیں
              </p>
            </div>
            <div className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-primary font-semibold">
                    Name <span className="font-urdu">نام</span>
                  </label>
                 <input
  id="name"
  name="name"
 
  placeholder="آپ کا نام / Your Name"
  className="w-full px-4 py-3 rounded-xl border-2 border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/50 placeholder:text-muted-foreground"
  required
/>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-primary font-semibold">
                    Phone <span className="font-urdu">فون نمبر</span>
                  </label>
                 <input
  id="phone"
  name="phone"
 
  placeholder="آپ کا فون نمبر / Your Phone Number"
  className="w-full px-4 py-3 rounded-xl border-2 border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/50 placeholder:text-muted-foreground"
  required
/>

                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-primary font-semibold">
                    Email <span className="font-urdu">ای میل</span>
                  </label>
                 <input
  id="email"
  name="email"
  type="email"
 
  placeholder="آپ کا ای میل / Your Email"
  className="w-full px-4 py-3 rounded-xl border-2 border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/50 placeholder:text-muted-foreground"
/>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-primary font-semibold">
                    Message <span className="font-urdu">پیغام</span>
                  </label>
                 <textarea
  id="message"
  name="message"

  placeholder="آپ کا پیغام / Your Message"
  rows={4}
  className="w-full px-4 py-3 rounded-xl border-2 border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-background/50 placeholder:text-muted-foreground resize-none"
  required
/>
                </div>

               <button
  type="submit"
  className="w-full bg-gradient-primary hover:shadow-elegant text-primary-foreground font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 hover:brightness-110"
>
  <Send className="w-4 h-4" />
  <span className="font-urdu text-lg">پیغام بھیجیں</span>
  <span>Send Message</span>
</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;