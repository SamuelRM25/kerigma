import HeroCarousel from "@/components/HeroCarousel";
import CategoriesGrid from "@/components/CategoriesGrid";
import VideoShowcase from "@/components/VideoShowcase";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import PresenceSection from "@/components/PresenceSection";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <CategoriesGrid />
      <VideoShowcase />
      <AboutSection />
      <Testimonials />
      <PresenceSection />
    </>
  );
}