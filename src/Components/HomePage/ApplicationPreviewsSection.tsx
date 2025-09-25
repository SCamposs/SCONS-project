"use client";

import ThreeDCarousel, { ThreeDCarouselItem } from "../lightswind/3d-carousel";

const applicationPreviews: ThreeDCarouselItem[] = [
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
    <ThreeDCarousel
      items={applicationPreviews}
      title="Aplicações SCONS"
      subtitle="Soluções Corporativas"
      tagline="Explore nosso ecossistema completo de aplicações empresariais desenvolvidas para otimizar sua operação."
      autoRotate={true}
      rotateInterval={5000}
      cardHeight={400}
    />
  );
}
