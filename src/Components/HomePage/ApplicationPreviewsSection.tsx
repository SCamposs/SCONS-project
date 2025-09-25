"use client";

import {
  ApplicationCarousel3D,
  ApplicationItem,
} from "../ui/ApplicationCarousel3D";

const applicationPreviews: ApplicationItem[] = [
  {
    id: 1,
    title: "Dashboard Executivo",
    description:
      "Visão estratégica completa com KPIs, métricas de performance e análises em tempo real para tomada de decisões inteligentes.",
    category: "Analytics",
    imageUrl: "/logo.png",
    gradient: "from-blue-500 to-indigo-600",
    features: [
      "KPIs em tempo real",
      "Relatórios personalizáveis",
      "Análise preditiva",
      "Dashboards interativos",
    ],
  },
  {
    id: 2,
    title: "Sistema de RH",
    description:
      "Gestão completa de recursos humanos com controle de ponto, folha de pagamento e desenvolvimento de colaboradores.",
    category: "Gestão",
    imageUrl: "/logo.png",
    gradient: "from-green-500 to-emerald-600",
    features: [
      "Controle de ponto digital",
      "Gestão de benefícios",
      "Avaliação de desempenho",
      "Recrutamento e seleção",
    ],
  },
  {
    id: 3,
    title: "Portal Financeiro",
    description:
      "Controle financeiro e contábil integrado com fluxo de caixa, contas a pagar/receber e conciliação bancária.",
    category: "Finanças",
    imageUrl: "/logo.png",
    gradient: "from-purple-500 to-violet-600",
    features: [
      "Fluxo de caixa em tempo real",
      "Conciliação bancária",
      "Controle de orçamentos",
      "Relatórios fiscais",
    ],
  },
  {
    id: 4,
    title: "CRM Vendas",
    description:
      "Sistema completo de gestão de relacionamento com clientes, pipeline de vendas e automação de marketing.",
    category: "Vendas",
    imageUrl: "/logo.png",
    gradient: "from-orange-500 to-red-600",
    features: [
      "Pipeline visual de vendas",
      "Automação de follow-up",
      "Histórico de interações",
      "Análise de conversão",
    ],
  },
  {
    id: 5,
    title: "Sistema de Estoque",
    description:
      "Controle completo de inventário com rastreabilidade, alertas de estoque baixo e integração com fornecedores.",
    category: "Operações",
    imageUrl: "/logo.png",
    gradient: "from-teal-500 to-cyan-600",
    features: [
      "Rastreabilidade completa",
      "Alertas inteligentes",
      "Integração fornecedores",
      "Código de barras",
    ],
  },
  {
    id: 6,
    title: "Portal de Projetos",
    description:
      "Gerenciamento ágil de projetos com metodologias Scrum e Kanban, controle de tempo e recursos.",
    category: "Projetos",
    imageUrl: "/logo.png",
    gradient: "from-indigo-500 to-blue-600",
    features: [
      "Metodologias ágeis",
      "Controle de tempo",
      "Gestão de recursos",
      "Relatórios de progresso",
    ],
  },
];

export default function ApplicationPreviewsSection() {
  return <ApplicationCarousel3D items={applicationPreviews} />;
}
