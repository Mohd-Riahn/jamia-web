import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import UmrahPackages from "@/components/UmrahPackages";
import ZiyaratDestinations from "@/components/ZiyaratDestinations";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <UmrahPackages />
      <ZiyaratDestinations />
      <FAQSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
