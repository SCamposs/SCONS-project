"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800" />

      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl p-8">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo-white.png"
              alt="SCONS Logo"
              width={200}
              height={60}
              className="h-12 w-auto dark:opacity-100 opacity-0 dark:block hidden"
            />
            <Image
              src="/logo.png"
              alt="SCONS Logo"
              width={200}
              height={60}
              className="h-12 w-auto opacity-100 dark:opacity-0 dark:hidden block"
            />
          </div>

          <h1 className="text-2xl font-bold text-center mb-2 text-gray-900 dark:text-white">
            Bem-vindo ao SCONS
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Faça login para continuar
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              >
                Usuário
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu usuário"
                className={cn(
                  "w-full px-4 py-3 rounded-lg border",
                  "bg-white dark:bg-gray-800",
                  "border-gray-300 dark:border-gray-700",
                  "text-gray-900 dark:text-white",
                  "placeholder-gray-500 dark:placeholder-gray-400",
                  "focus:outline-none focus:ring-2",
                  "focus:ring-brand-focus",
                  "transition-colors",
                )}
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className={cn(
                  "w-full px-4 py-3 rounded-lg border",
                  "bg-white dark:bg-gray-800",
                  "border-gray-300 dark:border-gray-700",
                  "text-gray-900 dark:text-white",
                  "placeholder-gray-500 dark:placeholder-gray-400",
                  "focus:outline-none focus:ring-2",
                  "focus:ring-brand-focus",
                  "transition-colors",
                )}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={cn(
                "w-full py-3 rounded-lg font-semibold",
                "bg-brand text-white",
                "hover:bg-brand-hover",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-brand-focus focus:ring-offset-2",
              )}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p className="text-xs text-center text-gray-600 dark:text-gray-400">
              <strong>Demo:</strong> Use qualquer usuário e senha para entrar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
