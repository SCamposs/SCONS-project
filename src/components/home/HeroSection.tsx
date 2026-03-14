"use client";

import Image from "next/image";
import { Zap, Shield, Headphones, ArrowRight, Play } from "lucide-react";

import { ThemeToggle } from "@/components/ui/ThemeToggle";

const STATS = [
  { number: "15+", label: "Aplicações Integradas", icon: Zap },
  { number: "99.9%", label: "Uptime Garantido", icon: Shield },
  { number: "24/7", label: "Suporte Técnico", icon: Headphones },
] as const;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-black">
      <nav className="absolute top-0 left-0 right-0 z-20 p-4 backdrop-blur-sm bg-white/80 dark:bg-black/20 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo-white.png"
              alt="SCONS Logo"
              width={428}
              height={151}
              className="h-8 w-auto drop-shadow-lg dark:block hidden"
              priority
            />
            <Image
              src="/logo.png"
              alt="SCONS Logo"
              width={428}
              height={151}
              className="h-8 w-auto drop-shadow-lg dark:hidden block"
              priority
            />
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/login"
              className="px-4 py-2 bg-white/10 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white rounded-full font-medium hover:bg-white/20 dark:hover:bg-white/20 hover:shadow-lg transition-colors border border-gray-300 dark:border-white/30 text-sm"
            >
              Entrar
            </a>
          </div>
        </div>
      </nav>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-r from-white/5 to-gray-300/10 dark:from-white/5 dark:to-gray-300/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-gradient-to-r from-gray-400/8 to-white/8 dark:from-gray-400/8 dark:to-white/8 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-6">
          <Image
            src="/logo-white.png"
            alt="SCONS Logo"
            width={428}
            height={98}
            className="mx-auto drop-shadow-2xl h-16 w-auto dark:block hidden"
            priority
          />
          <Image
            src="/logo.png"
            alt="SCONS Logo"
            width={428}
            height={98}
            className="mx-auto drop-shadow-2xl h-16 w-auto dark:hidden block"
            priority
          />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight drop-shadow-lg">
          <span className="block text-lg sm:text-xl lg:text-2xl font-medium text-gray-700 dark:text-gray-300 opacity-95">
            Soares Campos Optimized Navigation System
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Plataforma unificada que conecta, gerencia e otimiza todas as suas
          aplicações empresariais.
          <span className="block mt-1 text-base text-gray-600 dark:text-gray-400">
            Controle total com acesso hierárquico inteligente
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/login"
            className="group px-8 py-4 bg-brand dark:bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-lg transition-all min-w-[200px] border border-brand-hover dark:border-white/30 relative overflow-hidden hover:bg-brand-hover dark:hover:bg-white/20"
          >
            <span className="relative z-10 flex items-center justify-center">
              Acessar SCONS
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <button className="px-8 py-4 bg-gray-100 dark:bg-black/30 backdrop-blur-md border-2 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white rounded-xl font-bold text-lg hover:bg-gray-200 dark:hover:bg-black/50 hover:border-gray-400 dark:hover:border-white/40 transition-colors min-w-[200px]">
            <span className="flex items-center justify-center">
              Demonstração
              <Play className="ml-2 w-4 h-4" />
            </span>
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 bg-white/80 dark:bg-black/20 backdrop-blur-md rounded-xl border border-gray-200 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-black/30 transition-colors"
            >
              <div className="mb-2 flex justify-center">
                <stat.icon className="w-6 h-6 text-gray-700 dark:text-white/80" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 drop-shadow-sm">
                {stat.number}
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
