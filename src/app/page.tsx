import dynamic from "next/dynamic";
import HeroSection from "./components/HomePage/HeroSection";
import BackgroundAnimation from "./components/animations/BackgroundAnimation";

// Lazy load sections below the fold for better initial performance
const FeaturesSection = dynamic(
  () => import("./components/HomePage/FeaturesSection"),
  {
    loading: () => <div className="min-h-screen" />,
  }
);
const ApplicationPreviewsSection = dynamic(
  () => import("./components/HomePage/ApplicationPreviewsSection"),
  {
    loading: () => <div className="min-h-screen" />,
  }
);
const Footer = dynamic(
  () =>
    import("./components/layout/Footer").then((mod) => ({
      default: mod.Footer,
    })),
  {
    loading: () => <div className="min-h-[200px]" />,
  }
);

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Main background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800" />

      {/* Animated background elements */}
      <BackgroundAnimation />

      {/* Content */}
      <div className="relative z-10\">
        <HeroSection />
        <FeaturesSection />
        <ApplicationPreviewsSection />
        <Footer />
      </div>
    </div>
  );
}
