"use client";

import Image from "next/image";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  BarChart3,
  Users,
  DollarSign,
  TrendingUp,
  Activity,
  Bell,
  Search,
  Package,
  FolderOpen,
  FileText,
  Settings,
  HelpCircle,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SCONS_SYSTEMS = [
  {
    id: 1,
    title: "Dashboard Executivo",
    brand: "SCONS Analytics",
    description:
      "KPIs, métricas e análises em tempo real para decisões estratégicas.",
    icon: BarChart3,
    href: "#dashboard",
  },
  {
    id: 2,
    title: "Sistema de RH",
    brand: "SCONS Gestão",
    description:
      "Controle de ponto, folha de pagamento e desenvolvimento de colaboradores.",
    icon: Users,
    href: "#rh",
  },
  {
    id: 3,
    title: "Portal Financeiro",
    brand: "SCONS Finanças",
    description:
      "Fluxo de caixa, contas a pagar/receber e conciliação bancária.",
    icon: DollarSign,
    href: "#financeiro",
  },
  {
    id: 4,
    title: "CRM Vendas",
    brand: "SCONS Vendas",
    description:
      "Pipeline de vendas, automação de marketing e histórico de clientes.",
    icon: TrendingUp,
    href: "#crm",
  },
  {
    id: 5,
    title: "Sistema de Estoque",
    brand: "SCONS Operações",
    description:
      "Inventário com rastreabilidade completa e alertas de estoque baixo.",
    icon: Package,
    href: "#estoque",
  },
  {
    id: 6,
    title: "Portal de Projetos",
    brand: "SCONS Projetos",
    description:
      "Gestão ágil com Scrum e Kanban, controle de tempo e recursos.",
    icon: FolderOpen,
    href: "#projetos",
  },
] as const;

const NOTIFICATIONS = [
  {
    id: 1,
    title: "Novo usuário cadastrado",
    desc: "Carlos Silva entrou no sistema",
    time: "2 min atrás",
    type: "info" as const,
  },
  {
    id: 2,
    title: "Relatório gerado",
    desc: "Relatório mensal de vendas disponível",
    time: "15 min atrás",
    type: "success" as const,
  },
  {
    id: 3,
    title: "Atualização de sistema",
    desc: "SCONS v2.4.1 instalado com sucesso",
    time: "1 hora atrás",
    type: "success" as const,
  },
  {
    id: 4,
    title: "Backup concluído",
    desc: "Backup automático realizado",
    time: "2 horas atrás",
    type: "info" as const,
  },
];

const STATS = [
  {
    title: "Receita Total",
    value: "R$ 124.500",
    change: "+12.5%",
    trend: "up" as const,
    icon: DollarSign,
  },
  {
    title: "Usuários Ativos",
    value: "2.847",
    change: "+8.2%",
    trend: "up" as const,
    icon: Users,
  },
  {
    title: "Taxa de Conversão",
    value: "24.3%",
    change: "+2.1%",
    trend: "up" as const,
    icon: TrendingUp,
  },
  {
    title: "Atividade",
    value: "1.234",
    change: "-3.4%",
    trend: "down" as const,
    icon: Activity,
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-surface border-b border-border sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-white.png"
                alt="SCONS"
                width={120}
                height={40}
                className="h-8 w-auto hidden dark:block"
              />
              <Image
                src="/logo.png"
                alt="SCONS"
                width={120}
                height={40}
                className="h-8 w-auto block dark:hidden"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-surface-raised border border-border rounded-lg">
                <Search className="w-4 h-4 text-foreground-muted" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="bg-transparent border-none outline-none text-sm text-foreground placeholder:text-foreground-muted w-36"
                />
              </div>

              <button
                className="p-2 rounded-lg hover:bg-surface-raised border border-transparent hover:border-border transition-colors relative"
                aria-label="Notificações"
              >
                <Bell className="w-5 h-5 text-foreground-secondary" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
              </button>

              <ThemeToggle />

              <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-raised border border-border rounded-lg">
                <div className="w-6 h-6 rounded-full bg-foreground/20 flex items-center justify-center">
                  <span className="text-xs font-semibold text-foreground">
                    U
                  </span>
                </div>
                <span className="text-sm text-foreground-secondary hidden sm:block">
                  Usuário
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 max-w-[1400px] mx-auto w-full">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Bem-vindo ao Portal SCONS
          </h1>
          <p className="text-foreground-secondary mt-1">
            Gerencie e monitore todas as aplicações da plataforma
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {STATS.map((stat) => (
            <div
              key={stat.title}
              className="bg-surface border border-border rounded-xl p-5 hover:border-border-muted transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-surface-raised">
                  <stat.icon className="w-5 h-5 text-foreground-secondary" />
                </div>
                <span
                  className={cn(
                    "text-sm font-medium",
                    stat.trend === "up"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400",
                  )}
                >
                  {stat.change}
                </span>
              </div>
              <p className="text-sm text-foreground-muted">{stat.title}</p>
              <p className="text-2xl font-bold text-foreground mt-1">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Systems grid */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              Aplicações SCONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SCONS_SYSTEMS.map((system) => (
                <div
                  key={system.id}
                  className="bg-surface border border-border rounded-xl p-5 hover:border-border-muted transition-all group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-surface-raised">
                      <system.icon className="w-5 h-5 text-foreground-secondary" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-foreground-muted group-hover:text-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-0.5">
                    {system.title}
                  </h3>
                  <p className="text-xs text-foreground-muted mb-2">
                    {system.brand}
                  </p>
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    {system.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="space-y-5">
            {/* Notifications */}
            <div className="bg-surface border border-border rounded-xl p-5">
              <h2 className="text-base font-semibold text-foreground mb-4">
                Notificações Recentes
              </h2>
              <div className="space-y-3">
                {NOTIFICATIONS.map((notif) => (
                  <div
                    key={notif.id}
                    className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0"
                  >
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full mt-1.5 shrink-0",
                        notif.type === "success"
                          ? "bg-green-500"
                          : "bg-foreground-muted",
                      )}
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {notif.title}
                      </p>
                      <p className="text-xs text-foreground-muted mt-0.5">
                        {notif.desc}
                      </p>
                      <p className="text-xs text-foreground-muted mt-1">
                        {notif.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="bg-surface border border-border rounded-xl p-5">
              <h2 className="text-base font-semibold text-foreground mb-4">
                Ações Rápidas
              </h2>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between px-4 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Gerar Relatório Geral
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </button>
                <button className="w-full flex items-center justify-between px-4 py-3 bg-surface-raised border border-border rounded-lg text-sm text-foreground hover:border-border-muted transition-colors">
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-foreground-secondary" />
                    Configurações Globais
                  </div>
                  <ChevronRight className="w-4 h-4 text-foreground-muted" />
                </button>
                <button className="w-full flex items-center justify-between px-4 py-3 bg-surface-raised border border-border rounded-lg text-sm text-foreground hover:border-border-muted transition-colors">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-foreground-secondary" />
                    Suporte Técnico
                  </div>
                  <ChevronRight className="w-4 h-4 text-foreground-muted" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
