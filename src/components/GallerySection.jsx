import { useState } from "react";
import Image1 from "@/assets/5.jpg";
import Image2 from "@/assets/10.jpg";
import Image3 from "@/assets/8.jpg";
import Image4 from "@/assets/4.jpg";
import Image5 from "@/assets/26.jpg";
import Image6 from "@/assets/22.jpg";
import Image7 from "@/assets/10.jpg";
import Image8 from "@/assets/30.jpg";




const galleryImages = [
  {
    id: 1,
    src: Image1,
    title: "مسجد النبوی",
    titleEn: "Masjid al-Nabawi",
    description: "مدینہ المنورہ"
  },
  {
    id: 2, 
    src: Image2,
    title: "جبل نور",
    titleEn: "Jabal al-Nour",
    description: "مقام غارِ حراء"
  },
  {
    id: 3,
    src: Image3,
    title: "زیارت کا سفر",
    titleEn: "Ziyarat Journey",
    description: "روحانی تجربہ"
  },
  {
    id: 4,
    src: Image4,
    title: "صحرائی منظر",
    titleEn: "Desert Landscape", 
    description: "مدینہ کا راستہ"
  },
  {
    id: 5,
    src: Image5,
    title: "پرامن مناظر",
    titleEn: "Peaceful Views",
    description: "زیارت کے مقامات"
  },
  {
    id: 6,
    src: Image6,
    title: "قدرتی خوبصورتی",
    titleEn: "Natural Beauty",
    description: "اللہ کی تخلیق"
  }
];

// Custom Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full h-[80vh] flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        {children}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
            <div 
              key={image.id}
              className="group cursor-pointer rounded-3xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(image)}
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
          ))}
        </div>

        {/* Modal */}
        <Modal isOpen={selectedImage !== null} onClose={closeModal}>
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src={selectedImage.src}
                alt={selectedImage.titleEn}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              />
              
              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <h3 className="text-xl font-bold text-white mb-2">{selectedImage.titleEn}</h3>
                <p className="font-urdu text-lg font-semibold text-white mb-1">{selectedImage.title}</p>
                <p className="text-white/90 font-urdu">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </Modal>
        
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