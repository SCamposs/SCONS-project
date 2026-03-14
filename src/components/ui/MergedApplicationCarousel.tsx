"use client";

import type { TouchEvent } from "react";
import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/Card";

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

export function MergedApplicationCarousel({
  items,
  autoRotate = true,
  rotateInterval = 5000,
}: MergedApplicationCarouselProps) {
  const [active, setActive] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const MIN_SWIPE_DISTANCE = 50;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (autoRotate && isInView && !isHovering) {
      setProgress(0);
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActive((current) => (current + 1) % items.length);
            return 0;
          }
          return prev + 100 / (rotateInterval / 100);
        });
      }, 100);
      return () => clearInterval(progressInterval);
    } else {
      setProgress(0);
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, items.length, active]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInView) return;
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          setActive((prev) => (prev - 1 + items.length) % items.length);
          break;
        case "ArrowRight":
          e.preventDefault();
          setActive((prev) => (prev + 1) % items.length);
          break;
        case " ":
          e.preventDefault();
          setIsHovering((prev) => !prev);
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isInView, items.length]);

  const onTouchStart = useCallback((e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  }, []);

  const onTouchMove = useCallback((e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > MIN_SWIPE_DISTANCE) {
      setActive((prev) => (prev + 1) % items.length);
    } else if (distance < -MIN_SWIPE_DISTANCE) {
      setActive((prev) => (prev - 1 + items.length) % items.length);
    }
  }, [touchStart, touchEnd, items.length]);

  const getCardTransform = useCallback(
    (index: number) => {
      const diff = (index - active + items.length) % items.length;
      const total = items.length;

      if (diff === 0) {
        return {
          transform:
            "translateX(0%) translateZ(0px) scale(1) rotateY(0deg) rotateX(0deg)",
          opacity: 1,
          zIndex: 50,
          filter: "brightness(1) saturate(1)",
        };
      } else if (diff === 1) {
        return {
          transform:
            "translateX(85%) translateZ(-100px) scale(0.85) rotateY(-25deg) rotateX(5deg)",
          opacity: 0.7,
          zIndex: 30,
          filter: "brightness(0.8) saturate(0.9)",
        };
      } else if (diff === total - 1) {
        return {
          transform:
            "translateX(-85%) translateZ(-100px) scale(0.85) rotateY(25deg) rotateX(5deg)",
          opacity: 0.7,
          zIndex: 30,
          filter: "brightness(0.8) saturate(0.9)",
        };
      } else if (diff === 2) {
        return {
          transform:
            "translateX(150%) translateZ(-200px) scale(0.7) rotateY(-45deg) rotateX(10deg)",
          opacity: 0.4,
          zIndex: 20,
          filter: "brightness(0.6) saturate(0.8)",
        };
      } else if (diff === total - 2) {
        return {
          transform:
            "translateX(-150%) translateZ(-200px) scale(0.7) rotateY(45deg) rotateX(10deg)",
          opacity: 0.4,
          zIndex: 20,
          filter: "brightness(0.6) saturate(0.8)",
        };
      } else {
        return {
          transform:
            "translateX(0%) translateZ(-400px) scale(0.5) rotateY(0deg) rotateX(20deg)",
          opacity: 0,
          zIndex: 10,
          filter: "brightness(0.4) saturate(0.5)",
        };
      }
    },
    [active, items.length],
  );

  const handleCardClick = useCallback(
    (index: number) => {
      if (index !== active) setActive(index);
    },
    [active],
  );

  const handleArrowClick = useCallback(
    (
      direction: "prev" | "next",
      event: React.MouseEvent<HTMLButtonElement>,
    ) => {
      if (direction === "prev") {
        setActive((prev) => (prev - 1 + items.length) % items.length);
      } else {
        setActive((prev) => (prev + 1) % items.length);
      }
      (event.target as HTMLButtonElement).blur();
    },
    [items.length],
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/[0.01] rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.01] rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div
        ref={containerRef}
        className="group relative overflow-visible h-[600px] rounded-2xl"
        style={{ perspective: "1500px", perspectiveOrigin: "center center" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {items.map((item, index) => {
            const cardStyle = getCardTransform(index);
            return (
              <div
                key={item.id}
                className="absolute w-full max-w-xs transition-all duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer hover:duration-300 rounded-2xl"
                onClick={() => handleCardClick(index)}
                style={{
                  transform: cardStyle.transform,
                  opacity: cardStyle.opacity,
                  zIndex: cardStyle.zIndex,
                  filter: cardStyle.filter,
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity, filter",
                  backfaceVisibility: "hidden",
                }}
              >
                <Card
                  padding="none"
                  className={`relative overflow-hidden bg-gray-900/95 backdrop-blur-md h-[500px] border flex flex-col group transition-all duration-700 ${
                    index === active
                      ? "border-white/20 shadow-[0_25px_60px_-12px_rgba(255,255,255,0.15),0_0_0_1px_rgba(255,255,255,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_35px_80px_-12px_rgba(255,255,255,0.2)]"
                      : "border-white/5 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.6),0_10px_20px_-5px_rgba(0,0,0,0.4)] hover:border-white/15 hover:shadow-[0_30px_60px_-5px_rgba(255,255,255,0.08)]"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.03] rounded-2xl pointer-events-none" />
                  <div
                    className={`absolute inset-0 rounded-2xl transition-opacity duration-700 ${
                      index === active
                        ? "opacity-100 shadow-[inset_0_1px_20px_rgba(255,255,255,0.1)]"
                        : "opacity-0"
                    }`}
                  />

                  <div
                    className="relative h-64 overflow-hidden bg-gradient-to-br from-black to-gray-900 rounded-t-3xl"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite] pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />
                    <div className="absolute inset-0 p-7 flex flex-col justify-end text-white">
                      <div className="transform transition-all duration-700 group-hover:translate-y-[-6px] group-hover:scale-[1.02]">
                        <div className="text-xs uppercase tracking-[0.15em] text-gray-300 mb-3 font-medium opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:text-gray-200">
                          {item.brand}
                        </div>
                        <h3 className="text-xl font-bold leading-tight mb-2 tracking-tight text-white drop-shadow-md transition-all duration-500 group-hover:drop-shadow-lg">
                          {item.title}
                        </h3>
                        <div className="w-12 h-0.5 bg-white/80 rounded-full drop-shadow-sm transition-all duration-500 group-hover:w-16 group-hover:h-[3px] group-hover:bg-white/90 group-hover:drop-shadow-md" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-7 flex flex-col flex-grow bg-gray-900/50">
                    <p className="text-gray-200 text-base flex-grow leading-relaxed font-medium mb-4">
                      {item.description}
                    </p>
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
                          <div className="w-2 h-2 bg-white/60 rounded-full mr-2 group-hover:bg-white/80 transition-colors duration-300 shadow-sm" />
                          <span className="text-xs font-medium">
                            Clique para explorar
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:scale-110 transform hover:translate-x-[-4px] group-hover:opacity-100 opacity-70"
          onClick={(e) => handleArrowClick("prev", e)}
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:scale-110 transform hover:translate-x-[4px] group-hover:opacity-100 opacity-70"
          onClick={(e) => handleArrowClick("next", e)}
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-3 z-40">
          {items.map((_, idx) => (
            <button
              key={idx}
              className={`relative rounded-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-125 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black ${
                active === idx
                  ? "bg-white w-12 h-2 shadow-lg shadow-white/30"
                  : "bg-white/30 hover:bg-white/60 w-2 h-2 hover:w-4"
              }`}
              onClick={() => setActive(idx)}
              aria-label={`Ir para aplicação ${idx + 1}`}
            >
              {active === idx && (
                <>
                  <div className="absolute inset-0 rounded-full bg-white/20 blur-sm scale-150 animate-pulse" />
                  {autoRotate && !isHovering && (
                    <div className="absolute -inset-1 rounded-full">
                      <svg
                        className="w-full h-full -rotate-90"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="none"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="1"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="none"
                          stroke="rgba(255,255,255,0.8)"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 10}`}
                          strokeDashoffset={`${
                            2 * Math.PI * 10 * (1 - progress / 100)
                          }`}
                          className="transition-all duration-100 ease-linear drop-shadow-sm"
                        />
                      </svg>
                    </div>
                  )}
                </>
              )}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 -skew-x-12" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MergedApplicationCarousel;
