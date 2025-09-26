import HeroSection from "@/components/HomePage/HeroSection";
import FeaturesSection from "@/components/HomePage/FeaturesSection";
import ApplicationPreviewsSection from "@/components/HomePage/ApplicationPreviewsSection";
import { Footer } from "@/components/layout/Footer";
import BackgroundAnimation from "@/components/animations/BackgroundAnimation";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Main background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800" />

      {/* Animated background elements */}
      <BackgroundAnimation />

      {/* Content */}
      <div className="relative z-10 will-change-scroll">
        <HeroSection />
        <FeaturesSection />
        <ApplicationPreviewsSection />
        <Footer />
      </div>
    </div>
  );
}
