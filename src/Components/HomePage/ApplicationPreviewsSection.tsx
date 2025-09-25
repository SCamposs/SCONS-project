"use client";

import MergedApplicationCarousel from "../ui/MergedApplicationCarousel";

interface ApplicationItem {
  id: number;
  title: string;
  brand: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

const applicationPreviews: ApplicationItem[] = [
  {
    id: 1,
    title: "Dashboard Executivo",
    brand: "SCONS Analytics",
    description:
      "Visão estratégica completa com KPIs, métricas de performance e análises em tempo real para tomada de decisões inteligentes.",
    tags: [
      "KPIs em tempo real",
      "Relatórios personalizáveis",
      "Análise preditiva",
      "Dashboards interativos",
    ],
    imageUrl: "/logo.png",
    link: "#dashboard",
  },
  {
    id: 2,
    title: "Sistema de RH",
    brand: "SCONS Gestão",
    description:
      "Gestão completa de recursos humanos com controle de ponto, folha de pagamento e desenvolvimento de colaboradores.",
    tags: [
      "Controle de ponto digital",
      "Gestão de benefícios",
      "Avaliação de desempenho",
      "Recrutamento",
    ],
    imageUrl: "/logo.png",
    link: "#rh",
  },
  {
    id: 3,
    title: "Portal Financeiro",
    brand: "SCONS Finanças",
    description:
      "Controle financeiro e contábil integrado com fluxo de caixa, contas a pagar/receber e conciliação bancária.",
    tags: [
      "Fluxo de caixa",
      "Conciliação bancária",
      "Controle de orçamentos",
      "Relatórios fiscais",
    ],
    imageUrl: "/logo.png",
    link: "#financeiro",
  },
  {
    id: 4,
    title: "CRM Vendas",
    brand: "SCONS Vendas",
    description:
      "Sistema completo de gestão de relacionamento com clientes, pipeline de vendas e automação de marketing.",
    tags: [
      "Pipeline visual",
      "Automação de follow-up",
      "Histórico de interações",
      "Análise de conversão",
    ],
    imageUrl: "/logo.png",
    link: "#crm",
  },
  {
    id: 5,
    title: "Sistema de Estoque",
    brand: "SCONS Operações",
    description:
      "Controle completo de inventário com rastreabilidade, alertas de estoque baixo e integração com fornecedores.",
    tags: [
      "Rastreabilidade completa",
      "Alertas inteligentes",
      "Integração fornecedores",
      "Código de barras",
    ],
    imageUrl: "/logo.png",
    link: "#estoque",
  },
  {
    id: 6,
    title: "Portal de Projetos",
    brand: "SCONS Projetos",
    description:
      "Gerenciamento ágil de projetos com metodologias Scrum e Kanban, controle de tempo e recursos.",
    tags: [
      "Metodologias ágeis",
      "Controle de tempo",
      "Gestão de recursos",
      "Relatórios de progresso",
    ],
    imageUrl: "/logo.png",
    link: "#projetos",
  },
];

export default function ApplicationPreviewsSection() {
  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      {/* Blurred background version of current image */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-3xl opacity-30 scale-110"
          style={{
            backgroundImage: `url(${applicationPreviews[0]?.imageUrl})`,
            filter: "blur(60px) saturate(150%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-800/30 to-blue-900/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-base text-white">
              Aplicações SCONS
            </h2>
          </div>
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-lg font-medium mb-6 text-white">
            Soluções Corporativas
          </div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore nosso ecossistema completo de aplicações empresariais desenvolvidas para otimizar sua operação.
          </p>
        </div>

        <MergedApplicationCarousel
          items={applicationPreviews}
          autoRotate={true}
          rotateInterval={5000}
        />
      </div>
    </section>
  );
}
