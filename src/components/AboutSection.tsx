const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-sand">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                About Al Majd Tour & Travels
              </h2>
              <div className="w-20 h-1 bg-gold rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p className="font-urdu text-lg leading-loose">
                ہم آپ کے روحانی سفر کو یادگار بنانے کے لیے مکمل طور پر پرعزم ہیں۔ ہماری ٹیم کا مقصد آپ کو عمرہ اور زیارت کی سہولات فراہم کرنا ہے۔
              </p>
              
              <p className="text-base">
                With over a decade of experience in spiritual travel, Al Majd Tour & Travels has been serving pilgrims with dedication and excellence. We understand the sacred nature of your journey and ensure every aspect is handled with utmost care and respect.
              </p>
              
              <p className="font-urdu text-lg leading-loose">
                ہمارے ساتھ آپ کا سفر صرف ایک سفر نہیں بلکہ ایک روحانی تجربہ ہے جو آپ کی زندگی کو تبدیل کر دے گا۔
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-foreground/60 font-urdu">مطمئن مسافر</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-foreground/60">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-foreground/60 font-urdu">سپورٹ</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual Elements */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary-foreground text-2xl">🕌</div>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Our Mission</h3>
                  <p className="text-sm text-foreground/70 font-urdu leading-relaxed">
                    ہر مسافر کو بہترین روحانی تجربہ فراہم کرنا
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary-foreground text-2xl">🤝</div>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Our Values</h3>
                  <p className="text-sm text-foreground/70">
                    Trust, Excellence, and Spiritual Guidance
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary-foreground text-2xl">🌟</div>
                  </div>
                  <h3 className="font-bold text-primary mb-2">Our Promise</h3>
                  <p className="text-sm text-foreground/70 font-urdu leading-relaxed">
                    آپ کا سفر محفوظ اور یادگار ہو
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;