"use client";

import React, { useEffect, useState, TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "../ui/Card";

interface ApplicationItem {
  id: number;
  title: string;
  brand: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

interface MergedApplicationCarouselProps {
  items: ApplicationItem[];
  autoRotate?: boolean;
  rotateInterval?: number;
}

const MergedApplicationCarousel = ({
  items,
  autoRotate = true,
  rotateInterval = 5000,
}: MergedApplicationCarouselProps) => {
  const [active, setActive] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    if (autoRotate && isInView && !isHovering) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, items.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    return () => observer.disconnect();
  }, []);

  const onTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % items.length);
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  const getCardAnimationClass = (index: number) => {
    const diff = (index - active + items.length) % items.length;

    if (diff === 0) {
      // Active card - center position
      return "translate-x-0 scale-100 opacity-100 z-30 rotate-0";
    } else if (diff === 1) {
      // Next card - right side
      return "translate-x-[70%] scale-85 opacity-60 z-20 rotate-0";
    } else if (diff === items.length - 1) {
      // Previous card - left side
      return "translate-x-[-70%] scale-85 opacity-60 z-20 rotate-0";
    } else if (diff === 2) {
      // Far right card
      return "translate-x-[120%] scale-75 opacity-30 z-10 rotate-0";
    } else if (diff === items.length - 2) {
      // Far left card
      return "translate-x-[-120%] scale-75 opacity-30 z-10 rotate-0";
    } else {
      // Hidden cards
      return "translate-x-0 scale-50 opacity-0 z-0";
    }
  };

  const handleCardClick = (index: number) => {
    if (index !== active) {
      setActive(index);
    }
  };

  const handleArrowClick = (
    direction: "prev" | "next",
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (direction === "prev") {
      setActive((prev) => (prev - 1 + items.length) % items.length);
    } else {
      setActive((prev) => (prev + 1) % items.length);
    }
    // Remove focus after click
    (event.target as HTMLButtonElement).blur();
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-8">
      <div
        className="group relative overflow-visible h-[580px] perspective-1000"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`absolute w-full max-w-xs transform transition-all duration-[800ms] ease-out cursor-pointer ${getCardAnimationClass(
                index
              )}`}
              onClick={() => handleCardClick(index)}
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform, opacity",
              }}
            >
              <Card
                className={`overflow-hidden bg-gray-900/95 backdrop-blur-md h-[480px] border border-white/10 flex flex-col group rounded-2xl transition-all duration-500 hover:scale-105 ${
                  index === active
                    ? "shadow-[0_25px_50px_-12px_rgba(255,255,255,0.1),0_0_0_1px_rgba(255,255,255,0.2)]"
                    : "shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5),0_10px_10px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_40px_-5px_rgba(255,255,255,0.05)]"
                }`}
              >
                <div
                  className="relative h-64 overflow-hidden bg-gradient-to-br from-black to-gray-900 rounded-t-2xl"
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />
                  <div className="absolute inset-0 p-7 flex flex-col justify-end text-white">
                    <div className="transform transition-all duration-700 group-hover:translate-y-[-4px]">
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-300 mb-3 font-medium opacity-90">
                        {item.brand}
                      </div>
                      <h3 className="text-xl font-bold leading-tight mb-1 tracking-tight text-white drop-shadow-md">
                        {item.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-white/80 rounded-full drop-shadow-sm"></div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-7 flex flex-col flex-grow bg-gray-900/50">
                  <p className="text-gray-200 text-base flex-grow leading-relaxed font-medium mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs font-medium border border-white/20 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-white/10 backdrop-blur-sm">
                      <span className="text-xs text-gray-400 uppercase tracking-[0.1em] font-semibold">
                        Solução Tecnológica
                      </span>
                      <div className="flex items-center text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-2 h-2 bg-white/60 rounded-full mr-2 group-hover:bg-white/80 transition-colors duration-300 shadow-sm"></div>
                        <span className="text-xs font-medium">
                          Clique para explorar
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Navigation Arrows*/}
        <button
          className="absolute left-1 top-1/2 -translate-y-1/2 z-40 
                       w-15 h-15 rounded-full 
                       flex items-center justify-center
                       text-white/70 hover:text-white 
                       transition-all duration-200 hover:scale-110
                       group-hover:opacity-100
                       transform hover:translate-x-[-3px] focus:outline-none shadow-lg"
          onClick={(e) => handleArrowClick("prev", e)}
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 drop-shadow-sm" />
        </button>

        <button
          className="absolute right-1 top-1/2 -translate-y-1/2 z-40 
                 w-15 h-15 rounded-full 
                 flex items-center justify-center
                 text-white/70 hover:text-white 
                 transition-all duration-200 hover:scale-110
                 group-hover:opacity-100
                 transform hover:translate-x-[3px] focus:outline-none shadow-lg"
          onClick={(e) => handleArrowClick("next", e)}
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 drop-shadow-sm" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-2 z-30">
          {items.map((_, idx) => (
            <button
              key={idx}
              className={`rounded-full transition-all duration-500 ease-out hover:scale-125 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black ${
                active === idx
                  ? "bg-white w-10 h-2 shadow-lg shadow-white/20"
                  : "bg-white/40 hover:bg-white/70 w-2 h-2 hover:w-3"
              }`}
              onClick={() => setActive(idx)}
              aria-label={`Go to application ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MergedApplicationCarousel;
