import {
  HeroSection,
  FeaturesSection,
  ApplicationPreviewsSection,
  Footer,
  BackgroundAnimation,
} from "@/components";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <BackgroundAnimation />
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <ApplicationPreviewsSection />
        <Footer />
      </div>
    </div>
  );
}
