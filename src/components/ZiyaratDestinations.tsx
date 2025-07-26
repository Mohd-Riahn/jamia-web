import { Card, CardContent } from "@/components/ui/card";

const destinations = [
  {
    id: 1,
    name: "مسجد نبوی",
    nameEn: "Masjid al-Nabawi",
    location: "مدینہ منورہ",
    locationEn: "Madinah",
    description: "The Prophet's Mosque"
  },
  {
    id: 2,
    name: "مسجد قبا",
    nameEn: "Quba Mosque", 
    location: "مدینہ منورہ",
    locationEn: "Madinah",
    description: "First mosque built by Prophet Muhammad"
  },
  {
    id: 3,
    name: "جبل نور",
    nameEn: "Jabal al-Nour",
    location: "مکہ مکرمہ",
    locationEn: "Makkah",
    description: "Mountain of Light - Cave Hira"
  },
  {
    id: 4,
    name: "مسجد جعرانہ",
    nameEn: "Masjid al-Ji'ranah",
    location: "مکہ مکرمہ", 
    locationEn: "Makkah",
    description: "Historic Miqat location"
  },
  {
    id: 5,
    name: "مقبرہ حمزہ",
    nameEn: "Grave of Hamza",
    location: "مدینہ منورہ",
    locationEn: "Madinah", 
    description: "Uncle of Prophet Muhammad"
  },
  {
    id: 6,
    name: "مسجد قبلتین",
    nameEn: "Masjid al-Qiblatayn",
    location: "مدینہ منورہ",
    locationEn: "Madinah",
    description: "Mosque of Two Qiblas"
  }
];

const ZiyaratDestinations = () => {
  return (
    <section className="py-20 bg-gradient-sand">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ziyarat Destinations
          </h2>
          <p className="font-urdu text-xl text-primary mb-4">
            زیارت کے مقامات
          </p>
          <div className="w-20 h-1 bg-gold rounded-full mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Visit the sacred places that hold deep spiritual significance in Islamic history
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 rounded-3xl border-2 border-border/50 hover:border-gold/30 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary-foreground text-xl">🕌</div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-primary group-hover:text-gold transition-colors duration-300">
                      {destination.nameEn}
                    </h3>
                    <p className="font-urdu text-lg font-semibold text-foreground">
                      {destination.name}
                    </p>
                    <p className="text-sm text-foreground/60">
                      <span className="font-urdu">{destination.location}</span> • {destination.locationEn}
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {destination.description}
                    </p>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="flex justify-end">
                    <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-3xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-4">Complete Ziyarat Experience</h3>
            <p className="font-urdu text-lg leading-loose text-foreground/80 mb-4">
              ہمارے ساتھ تمام اہم زیارت کے مقامات کی سیر کریں
            </p>
            <p className="text-foreground/70">
              Our experienced guides will take you to all the important historical and spiritual sites with detailed explanations and spiritual context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZiyaratDestinations;