"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Zap, Shield, Headphones, ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className="absolute top-0 left-0 right-0 z-20 p-6 backdrop-blur-sm bg-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/logo-white.png"
              alt="SCONS Logo"
              width={428}
              height={151}
              className="h-10 w-auto drop-shadow-lg"
            />
          </motion.div>

          <motion.button
            className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 will-change-transform border border-white/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entrar
          </motion.button>
        </div>
      </motion.nav>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl will-change-transform"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl will-change-transform"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Logo Principal */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Image
            src="/logo-white.png"
            alt="SCONS Logo"
            width={528}
            height={121}
            className="mx-auto drop-shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-95">
              Soares Campos Optimized Navigation System
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Plataforma unificada que conecta, gerencia e otimiza todas as suas
          aplicações empresariais.
          <span className="block mt-2 text-lg text-gray-500 dark:text-gray-400">
            Controle total com acesso hierárquico inteligente
          </span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 min-w-[250px] backdrop-blur-sm border border-white/20 will-change-transform relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-gray-800 dark:text-white rounded-2xl font-bold text-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 min-w-[250px] will-change-transform"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center">
              Demonstração
              <Play className="ml-3 w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
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
              className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-2 flex justify-center">
                <stat.icon className="w-8 h-8 text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
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
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
              Explore mais
            </div>
            <div className="w-8 h-12 border-2 border-gray-400/50 dark:border-gray-500/50 rounded-full flex justify-center group-hover:border-gray-600 dark:group-hover:border-gray-300 transition-colors bg-white/10 backdrop-blur-sm">
              <motion.div
                className="w-1.5 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2"
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
