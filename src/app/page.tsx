import dynamic from "next/dynamic";

import HeroSection from "@/components/home/HeroSection";
import BackgroundAnimation from "@/components/animations/BackgroundAnimation";

const FeaturesSection = dynamic(
  () => import("@/components/home/FeaturesSection"),
  { loading: () => <div className="min-h-screen" /> },
);

const ApplicationPreviewsSection = dynamic(
  () => import("@/components/home/ApplicationPreviewsSection"),
  { loading: () => <div className="min-h-screen" /> },
);

const Footer = dynamic(
  () =>
    import("@/components/layout/Footer").then((mod) => ({
      default: mod.Footer,
    })),
  { loading: () => <div className="min-h-[200px]" /> },
);

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800" />
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
