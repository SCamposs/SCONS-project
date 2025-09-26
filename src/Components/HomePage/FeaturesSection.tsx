"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Users, Smartphone } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Login Centralizado",
    description:
      "Sistema de autenticação unificado (SSO) para acesso seguro a todas as aplicações com uma única credencial.",
  },
  {
    icon: Users,
    title: "Acesso Hierárquico",
    description:
      "Controle granular de permissões baseado em níveis de hierarquia, garantindo que cada usuário acesse apenas o que precisa.",
  },
  {
    icon: Smartphone,
    title: "Previews de Aplicações",
    description:
      "Visualize previews interativos das aplicações disponíveis antes de acessá-las, otimizando sua navegação.",
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Recursos Principais
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Descubra como o SCONS revoluciona a gestão de aplicações
            corporativas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative will-change-transform"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateX: 0 }
                  : { opacity: 0, y: 50, rotateX: -15 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8, rotateY: 5 }}
              style={{ perspective: "1000px" }}
            >
              <div className="bg-gray-900/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-white/10 transition-all duration-500 border border-white/20 h-full relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.05) 0%, 
                      rgba(255, 255, 255, 0.1) 50%, 
                      rgba(255, 255, 255, 0.05) 100%)`,
                  }}
                />

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[
                    { left: 15, top: 20, duration: 3.2, delay: 0.3 },
                    { left: 85, top: 15, duration: 4.1, delay: 1.2 },
                    { left: 25, top: 75, duration: 3.8, delay: 0.8 },
                    { left: 70, top: 60, duration: 4.5, delay: 1.6 },
                    { left: 45, top: 35, duration: 3.5, delay: 0.5 },
                    { left: 90, top: 85, duration: 4.2, delay: 1.0 },
                  ].map((particle, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gradient-to-r from-white/60 to-gray-300/60 rounded-full opacity-0 group-hover:opacity-80 shadow-sm"
                      style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="mb-4 flex justify-center"
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -5, 5, 0],
                      filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-12 h-12 text-white/80 drop-shadow-sm" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-all duration-300 drop-shadow-sm">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Progress indicator */}
                  <motion.div className="mt-4 h-1 bg-gradient-to-r from-white/60 to-gray-300/60 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 will-change-transform shadow-sm" />
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-black/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3 drop-shadow-sm">
              Simplificando a Gestão Corporativa
            </h3>
            <p className="text-base text-gray-300">
              O SCONS foi desenvolvido para eliminar a complexidade de gerenciar
              múltiplas aplicações, oferecendo uma experiência unificada, segura
              e eficiente para organizações de todos os tamanhos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
