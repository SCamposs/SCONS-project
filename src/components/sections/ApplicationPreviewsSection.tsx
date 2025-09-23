"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const applicationPreviews = [
  {
    title: "Dashboard Executivo",
    description: "Visão estratégica com KPIs e métricas principais",
    category: "Analytics",
    placeholder: "Dashboard com gráficos e métricas",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Sistema de RH",
    description: "Gestão completa de recursos humanos",
    category: "Gestão",
    placeholder: "Interface de gestão de funcionários",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Portal Financeiro",
    description: "Controle financeiro e contábil integrado",
    category: "Finanças",
    placeholder: "Relatórios financeiros e controles",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "CRM Vendas",
    description: "Gestão de relacionamento com clientes",
    category: "Vendas",
    placeholder: "Pipeline de vendas e contatos",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Sistema de Estoque",
    description: "Controle de inventário e logística",
    category: "Operações",
    placeholder: "Gestão de produtos e estoque",
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "Portal de Projetos",
    description: "Gerenciamento ágil de projetos",
    category: "Projetos",
    placeholder: "Kanban e timeline de projetos",
    color: "from-indigo-500 to-indigo-600",
  },
];

export default function ApplicationPreviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Aplicações Disponíveis
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore os previews das aplicações integradas ao SCONS. Após o
            login, você terá acesso completo baseado em sua hierarquia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applicationPreviews.map((app, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
                {/* Preview Image Placeholder */}
                <div
                  className={`h-48 bg-gradient-to-br ${app.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <div className="w-8 h-8 bg-white/60 rounded" />
                      </div>
                      <p className="text-sm font-medium opacity-90">
                        {app.placeholder}
                      </p>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {app.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {app.description}
                  </p>

                  <motion.div
                    className="flex items-center text-blue-600 dark:text-blue-400 font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Visualizar Preview
                    <span className="ml-2">→</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Pronto para Começar?</h3>
            <p className="text-xl mb-6 opacity-90">
              Faça login e tenha acesso completo às aplicações baseado em sua
              hierarquia
            </p>
            <motion.button
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Acessar SCONS Agora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
