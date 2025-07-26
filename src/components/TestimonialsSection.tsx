import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "احمد علی",
    nameEn: "Ahmad Ali",
    location: "کراچی",
    locationEn: "Karachi",
    rating: 5,
    review: "الحمد للہ، یہ میرا بہترین روحانی سفر تھا۔ Al Majd کی ٹیم نے ہر قدم پر مدد کی۔",
    reviewEn: "Alhamdulillah, this was my best spiritual journey. Al Majd team helped at every step.",
    image: "👨‍🦳"
  },
  {
    id: 2,
    name: "فاطمہ خان",
    nameEn: "Fatima Khan", 
    location: "لاہور",
    locationEn: "Lahore",
    rating: 5,
    review: "بہت اچھا تجربہ رہا۔ ہوٹل اور کھانے کا بندوبست عمدہ تھا۔",
    reviewEn: "Very good experience. Hotel and food arrangements were excellent.",
    image: "👩‍🦳"
  },
  {
    id: 3,
    name: "محمد حسن",
    nameEn: "Muhammad Hassan",
    location: "اسلام آباد", 
    locationEn: "Islamabad",
    rating: 5,
    review: "گائیڈ بہت اچھا تھا۔ تمام زیارت کی جگہوں کی تفصیل سے واقفیت کرائی۔",
    reviewEn: "Guide was excellent. Provided detailed information about all ziyarat places.",
    image: "👨"
  },
  {
    id: 4,
    name: "عائشہ احمد",
    nameEn: "Ayesha Ahmad",
    location: "فیصل آباد",
    locationEn: "Faisalabad", 
    rating: 5,
    review: "فیملی کے ساتھ بہت اچھا سفر رہا۔ بچوں کا خیال بھی رکھا گیا۔",
    reviewEn: "Great trip with family. Children were also well taken care of.",
    image: "👩"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-sand">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Pilgrims Say
          </h2>
          <p className="font-urdu text-xl text-primary mb-4">
            ہمارے مسافروں کے تجربات
          </p>
          <div className="w-20 h-1 bg-gold rounded-full mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Read testimonials from our satisfied pilgrims who experienced spiritual journeys with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 rounded-3xl border-2 border-border/50 hover:border-gold/30 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Rating */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 fill-gold text-gold group-hover:scale-110 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <div className="space-y-4 text-center">
                    <p className="font-urdu text-lg leading-loose text-foreground italic">
                      "{testimonial.review}"
                    </p>
                    <p className="text-sm text-foreground/70 leading-relaxed italic">
                      "{testimonial.reviewEn}"
                    </p>
                  </div>
                  
                  {/* User Info */}
                  <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse pt-4 border-t border-border/50">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                      {testimonial.image}
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-primary">{testimonial.nameEn}</div>
                      <div className="font-urdu text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-foreground/60">
                        <span className="font-urdu">{testimonial.location}</span> • {testimonial.locationEn}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-3xl p-8 shadow-card max-w-md mx-auto">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-primary-foreground text-2xl">🏆</div>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">1000+ Happy Pilgrims</h3>
            <p className="font-urdu text-lg text-foreground mb-2">
              ۱۰۰۰+ مطمئن مسافر
            </p>
            <p className="text-sm text-foreground/70">
              Join thousands of satisfied pilgrims who trusted us with their spiritual journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;