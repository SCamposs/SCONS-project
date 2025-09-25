import HeroSection from "@/components/HomePage/HeroSection";
import FeaturesSection from "@/components/HomePage/FeaturesSection";
import ApplicationPreviewsSection from "@/components/HomePage/ApplicationPreviewsSection";
import { Footer } from "@/components/layout/Footer";
import BackgroundAnimation from "@/components/animations/BackgroundAnimation";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950" />

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
