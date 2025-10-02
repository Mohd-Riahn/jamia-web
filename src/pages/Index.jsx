import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Objectives  from '@/components/Objectives '

const Index = () => {
  return (
    <div className="min-h-screen">
    
      <HeroSection />
      <AboutSection />
      {/* <UmrahPackages /> */}


      {/* <FAQSection /> */}
      <Objectives  />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
};

export default Index;
