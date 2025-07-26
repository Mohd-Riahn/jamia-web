import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Using placeholder images from the useful context
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
    title: "مسجد النبوی",
    titleEn: "Masjid al-Nabawi",
    description: "مدینہ المنورہ"
  },
  {
    id: 2, 
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e425?w=400&h=300&fit=crop",
    title: "جبل نور",
    titleEn: "Jabal al-Nour",
    description: "مقام غارِ حراء"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop",
    title: "زیارت کا سفر",
    titleEn: "Ziyarat Journey",
    description: "روحانی تجربہ"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1482881497185-9458668383970?w=400&h=300&fit=crop",
    title: "صحرائی منظر",
    titleEn: "Desert Landscape", 
    description: "مدینہ کا راستہ"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
    title: "پرامن مناظر",
    titleEn: "Peaceful Views",
    description: "زیارت کے مقامات"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop",
    title: "قدرتی خوبصورتی",
    titleEn: "Natural Beauty",
    description: "اللہ کی تخلیق"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Gallery
          </h2>
          <p className="font-urdu text-xl text-primary mb-4">
            تصاویر کا ذخیرہ
          </p>
          <div className="w-20 h-1 bg-gold rounded-full mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Experience the beauty and spirituality of sacred places through our gallery
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div 
                  className="group cursor-pointer rounded-3xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={image.src}
                      alt={image.titleEn}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-bold mb-1">{image.titleEn}</h3>
                      <p className="font-urdu text-base font-semibold mb-1">{image.title}</p>
                      <p className="text-sm opacity-90 font-urdu">{image.description}</p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl w-full h-[80vh] p-0 border-0 bg-transparent">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src={image.src}
                    alt={image.titleEn}
                    className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                  />
                  
                  {/* Image Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                    <h3 className="text-xl font-bold text-white mb-2">{image.titleEn}</h3>
                    <p className="font-urdu text-lg font-semibold text-white mb-1">{image.title}</p>
                    <p className="text-white/90 font-urdu">{image.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-sand rounded-3xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-4">Create Your Own Memories</h3>
            <p className="font-urdu text-lg leading-loose text-foreground/80 mb-4">
              آپ کی اپنی یادوں کا ذخیرہ بنائیں
            </p>
            <p className="text-foreground/70 mb-6">
              Join us on a spiritual journey and create lasting memories of sacred places that will stay with you forever.
            </p>
            <a 
              href="#contact-section"
              className="inline-block bg-gradient-primary text-primary-foreground px-8 py-3 rounded-2xl font-semibold hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;