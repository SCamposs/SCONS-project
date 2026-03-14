"use client";

import { useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  BarChart3,
  Users,
  DollarSign,
  TrendingUp,
  Activity,
  Calendar,
  Bell,
  Search,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    {
      title: "Receita Total",
      value: "R$ 124.500",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600 dark:text-green-400",
    },
    {
      title: "Usuários Ativos",
      value: "2.847",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Taxa de Conversão",
      value: "24.3%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Atividade",
      value: "1.234",
      change: "-3.4%",
      trend: "down",
      icon: Activity,
      color: "text-orange-600 dark:text-orange-400",
    },
  ];

  const recentActivities = [
    { id: 1, title: "Novo usuário cadastrado", time: "2 min atrás" },
    { id: 2, title: "Relatório gerado", time: "15 min atrás" },
    { id: 3, title: "Atualização de sistema", time: "1 hora atrás" },
    { id: 4, title: "Backup concluído", time: "2 horas atrás" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-black">
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
              >
                {sidebarOpen ? (
                  <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>
              <Image
                src="/logo-white.png"
                alt="SCONS Logo"
                width={120}
                height={40}
                className="h-8 w-auto dark:opacity-100 opacity-0 dark:block hidden"
              />
              <Image
                src="/logo.png"
                alt="SCONS Logo"
                width={120}
                height={40}
                className="h-8 w-auto opacity-100 dark:opacity-0 dark:hidden block"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="bg-transparent border-none outline-none text-sm text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 relative">
                <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside
          className={cn(
            "fixed lg:static inset-y-0 left-0 z-40",
            "w-64 bg-white dark:bg-gray-900",
            "border-r border-gray-200 dark:border-gray-800",
            "transform transition-transform duration-200 ease-in-out",
            "lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <nav className="p-4 space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
            >
              <BarChart3 className="w-5 h-5" />
              Dashboard
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Users className="w-5 h-5" />
              Usuários
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Calendar className="w-5 h-5" />
              Calendário
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Activity className="w-5 h-5" />
              Atividades
            </a>
          </nav>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Visão geral do sistema SCONS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={cn(
                      "p-3 rounded-lg bg-gray-100 dark:bg-gray-800",
                      stat.color,
                    )}
                  >
                    <stat.icon className="w-6 h-6" />
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
                <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {stat.title}
                </h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Visão Geral
              </h2>
              <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg">
                <BarChart3 className="w-16 h-16 text-gray-400 dark:text-gray-600" />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Atividades Recentes
              </h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 pb-4 border-b border-gray-200 dark:border-gray-800 last:border-0"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {activity.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
