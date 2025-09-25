"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

export interface ApplicationItem {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  features: string[];
  gradient: string;
}

interface ApplicationCarousel3DProps {
  items: ApplicationItem[];
  autoRotate?: boolean;
  rotateInterval?: number;
}

const ApplicationCarousel3D = ({
  items,
  autoRotate = true,
  rotateInterval = 4000,
}: ApplicationCarousel3DProps) => {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (autoRotate && isInView && !isHovering) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, items.length]);

  const getCardTransform = (index: number) => {
    const diff = index - active;
    const absIndex = ((diff % items.length) + items.length) % items.length;

    if (absIndex === 0) {
      return {
        transform: "translateX(0%) scale(1) rotateY(0deg)",
        zIndex: 30,
        opacity: 1,
      };
    } else if (absIndex === 1) {
      return {
        transform: "translateX(85%) scale(0.85) rotateY(-25deg)",
        zIndex: 20,
        opacity: 0.7,
      };
    } else if (absIndex === items.length - 1) {
      return {
        transform: "translateX(-85%) scale(0.85) rotateY(25deg)",
        zIndex: 20,
        opacity: 0.7,
      };
    } else if (absIndex === 2) {
      return {
        transform: "translateX(160%) scale(0.7) rotateY(-40deg)",
        zIndex: 10,
        opacity: 0.4,
      };
    } else if (absIndex === items.length - 2) {
      return {
        transform: "translateX(-160%) scale(0.7) rotateY(40deg)",
        zIndex: 10,
        opacity: 0.4,
      };
    } else {
      return {
        transform: "translateX(235%) scale(0.6) rotateY(-50deg)",
        zIndex: 5,
        opacity: 0,
      };
    }
  };

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      {/* Blurred background version of current image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center blur-3xl opacity-30 scale-110 will-change-transform"
          style={{
            backgroundImage: `url(${items[active]?.imageUrl})`,
            filter: "blur(60px) saturate(150%)",
          }}
          key={active}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.3, scale: 1.1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-800/30 to-blue-900/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-base text-white">
              Aplicações{" "}
            </h2>
            <Image
              src="/logo-white.png"
              alt="SCONS Logo"
              width={428}
              height={151}
              className="h-12 w-auto mr-4"
            />
          </div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore as aplicações SCONS. Cada sistema foi desenvolvido para
            otimizar seus processos empresariais.
          </p>
        </motion.div>

        <div
          className="relative h-[600px] flex items-center justify-center perspective-1000"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {items.map((item, index) => {
            const cardStyle = getCardTransform(index);
            return (
              <motion.div
                key={item.id}
                className="absolute w-80 h-[500px] will-change-transform cursor-pointer"
                style={cardStyle}
                animate={cardStyle}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                }}
                onClick={() => setActive(index)}
                whileHover={
                  index === active
                    ? {
                        filter: "brightness(1.1)",
                        scale: 1.02,
                      }
                    : {
                        filter: "brightness(1.05)",
                        scale: 1.01,
                      }
                }
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-2xl h-full">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90`}
                    />
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover mix-blend-overlay"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/30">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-white">
                    <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {item.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {index === active && (
                      <motion.button
                        className="w-full flex items-center justify-center px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium hover:bg-white/30 transition-all duration-100 will-change-transform"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Acessar Sistema
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Navigation Buttons */}
          <button
            className="absolute left-8 top-1/2 -translate-y-1/2 text-white hover:text-blue-300 z-40 transition-all hover:scale-110 hover:-translate-x-1 will-change-transform"
            onClick={() =>
              setActive((prev) => (prev - 1 + items.length) % items.length)
            }
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            className="absolute right-8 top-1/2 -translate-y-1/2 text-white hover:text-blue-300 z-40 transition-all hover:scale-110 hover:translate-x-1 will-change-transform"
            onClick={() => setActive((prev) => (prev + 1) % items.length)}
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center space-x-3 mt-8">
          {items.map((_, idx) => (
            <button
              key={idx}
              className={`transition-all duration-300 ${
                active === idx
                  ? "w-8 h-2 bg-white rounded-full"
                  : "w-2 h-2 bg-white/40 rounded-full hover:bg-white/60"
              }`}
              onClick={() => setActive(idx)}
              aria-label={`Go to application ${idx + 1}`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para Transformar sua Empresa?
            </h3>
            <p className="text-xl mb-6 text-gray-200">
              Acesse o SCONS e tenha controle total dos seus processos
              empresariais
            </p>
            <motion.button
              className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold text-lg hover:shadow-white/20 hover:shadow-lg transition-all duration-300 will-change-transform"
              whileHover={{
                scale: 1.02,
                filter: "brightness(1.1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Acessar SCONS Agora
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export { ApplicationCarousel3D };
