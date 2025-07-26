import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kaaba.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Al Majd Tour & Travels
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>
        
        {/* Urdu Tagline */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl md:text-4xl font-urdu font-semibold text-primary-foreground mb-4 leading-relaxed">
            روحانی سفر کا آغاز کریں
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Experience spiritual journeys to sacred places with complete guidance and comfort
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold/90 text-gold-foreground font-semibold px-8 py-4 rounded-2xl shadow-elegant transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            <span className="font-urdu text-lg">عمرہ بک کریں</span>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
          >
            <span className="font-urdu text-lg">ہم سے رابطہ کریں</span>
          </Button>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-gold/30 animate-float">
          <div className="w-8 h-8 border-2 border-current rounded-full"></div>
        </div>
        <div className="absolute bottom-20 right-10 text-gold/30 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-6 h-6 bg-current rounded-full"></div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;