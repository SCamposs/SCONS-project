"use client";

import { memo } from "react";
import Image from "next/image";

import { MergedApplicationCarousel } from "@/components/ui/MergedApplicationCarousel";

interface ApplicationItem {
  id: number;
  title: string;
  brand: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

const APPLICATION_PREVIEWS: ApplicationItem[] = [
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

function ApplicationPreviewsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url(${APPLICATION_PREVIEWS[0]?.imageUrl})`,
            filter: "blur(60px) saturate(0%) brightness(0.3)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-800/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-normal text-white drop-shadow-lg">
              Aplicações{" "}
              <Image
                src="/logo-white.png"
                alt="SCONS"
                width={528}
                height={121}
                className="inline-block h-8 w-auto ml-2 mb-1 drop-shadow-md"
                loading="lazy"
              />
            </h2>
          </div>
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-lg font-medium mb-6 text-gray-100 shadow-lg">
            Soluções Corporativas
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore nosso ecossistema completo de aplicações empresariais
            desenvolvidas para otimizar sua operação.
          </p>
        </div>

        <MergedApplicationCarousel
          items={APPLICATION_PREVIEWS}
          autoRotate={true}
          rotateInterval={5000}
        />
      </div>
    </section>
  );
}

export default memo(ApplicationPreviewsSection);
