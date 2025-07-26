import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We will contact you soon. شکریہ!",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
              <p className="font-urdu text-lg text-foreground mb-4 leading-loose">
                آپ کے روحانی سفر کے لیے ہم یہاں ہیں
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Our experienced team is here to guide you through every step of your sacred journey. Contact us for detailed consultation and personalized packages.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-gold rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Phone</h4>
                      <p className="text-foreground/80">+92-300-1234567</p>
                      <p className="font-urdu text-sm text-foreground/60">۲۴/۷ دستیاب</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gold rounded-2xl">
                <CardContent className="p-6">
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
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gold rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Office Address</h4>
                      <p className="text-foreground/80">Main Boulevard, Gulberg III</p>
                      <p className="text-foreground/80">Lahore, Pakistan</p>
                      <p className="font-urdu text-sm text-foreground/60">دفتری اوقات: ۹ سے ۶ بجے</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="rounded-3xl shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">
                Send us a Message
              </CardTitle>
              <p className="font-urdu text-lg text-center text-foreground">
                ہمیں پیغام بھیجیں
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary font-semibold">
                    Name <span className="font-urdu">نام</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="آپ کا نام / Your Name"
                    className="rounded-xl border-2 border-border/50 focus:border-primary/50 transition-colors duration-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-primary font-semibold">
                    Phone <span className="font-urdu">فون نمبر</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="آپ کا فون نمبر / Your Phone Number"
                    className="rounded-xl border-2 border-border/50 focus:border-primary/50 transition-colors duration-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary font-semibold">
                    Email <span className="font-urdu">ای میل</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="آپ کا ای میل / Your Email"
                    className="rounded-xl border-2 border-border/50 focus:border-primary/50 transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary font-semibold">
                    Message <span className="font-urdu">پیغام</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="آپ کا پیغام / Your Message"
                    rows={4}
                    className="rounded-xl border-2 border-border/50 focus:border-primary/50 transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-elegant text-primary-foreground font-semibold py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span className="font-urdu text-lg">پیغام بھیجیں</span>
                  <span className="ml-2">Send Message</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;