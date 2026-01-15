"use client";

import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import Image from "next/image";
import { Zap, Shield, Headphones, ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = useCallback(() => setIsHovered(true), []);
  const handleHoverEnd = useCallback(() => setIsHovered(false), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className="absolute top-0 left-0 right-0 z-20 p-4 backdrop-blur-sm bg-black/20 border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/logo-white.png"
              alt="SCONS Logo"
              width={428}
              height={151}
              className="h-8 w-auto drop-shadow-lg"
              priority
            />
          </motion.div>

          <motion.button className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 will-change-transform border border-white/30 text-sm">
            Entrar
          </motion.button>
        </div>
      </motion.nav>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-r from-white/5 to-gray-300/10 rounded-full blur-3xl"
          style={{ willChange: 'transform' }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-64 h-64 bg-gradient-to-r from-gray-400/8 to-white/8 rounded-full blur-3xl"
          style={{ willChange: 'transform' }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Logo Principal */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Image
            src="/logo-white.png"
            alt="SCONS Logo"
            width={428}
            height={98}
            className="mx-auto drop-shadow-2xl h-16 w-auto"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            <span className="block text-lg sm:text-xl lg:text-2xl font-medium text-gray-300 opacity-95">
              Soares Campos Optimized Navigation System
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Plataforma unificada que conecta, gerencia e otimiza todas as suas
          aplicações empresariais.
          <span className="block mt-1 text-base text-gray-400">
            Controle total com acesso hierárquico inteligente
          </span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/10 transition-all duration-300 min-w-[200px] border border-white/30 relative overflow-hidden hover:bg-white/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          >
            <span className="relative z-10 flex items-center justify-center">
              Acessar SCONS
              <motion.span
                className="inline-block ml-3"
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            className="px-8 py-4 bg-black/30 backdrop-blur-md border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:bg-black/50 hover:border-white/40 transition-all duration-300 min-w-[200px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center">
              Demonstração
              <Play className="ml-2 w-4 h-4" />
            </span>
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "15+", label: "Aplicações Integradas", icon: Zap },
            { number: "99.9%", label: "Uptime Garantido", icon: Shield },
            { number: "24/7", label: "Suporte Técnico", icon: Headphones },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-black/20 backdrop-blur-md rounded-xl border border-white/20 hover:bg-black/30"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-2 flex justify-center">
                <stat.icon className="w-6 h-6 text-white/80" />
              </div>
              <div className="text-2xl font-bold text-white mb-1 drop-shadow-sm">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator - Moved to right side */}
        <motion.div
          className="fixed bottom-12 right-8 z-50"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="flex flex-col items-center cursor-pointer group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-sm text-gray-400 mb-2 group-hover:text-gray-200 transition-colors">
              Explore mais
            </div>
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors bg-black/20 backdrop-blur-sm">
              <motion.div
                className="w-1.5 h-4 bg-gradient-to-b from-white/80 to-gray-300/80 rounded-full mt-2 drop-shadow-sm"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scaleY: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
