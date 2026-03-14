"use client";

import { memo } from "react";
import { Lock, Users, Smartphone } from "lucide-react";

const FEATURES = [
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
] as const;

function FeaturesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recursos Principais
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubra como o SCONS revoluciona a gestão de aplicações
            corporativas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors h-full"
            >
              <div className="mb-4 flex justify-center">
                <feature.icon className="w-12 h-12 text-gray-700 dark:text-white/80 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-3xl mx-auto border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Simplificando a Gestão Corporativa
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300">
              O SCONS foi desenvolvido para eliminar a complexidade de gerenciar
              múltiplas aplicações, oferecendo uma experiência unificada, segura
              e eficiente para organizações de todos os tamanhos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(FeaturesSection);
