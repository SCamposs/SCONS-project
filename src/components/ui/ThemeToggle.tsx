"use client";

import type { ComponentProps } from "react";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/theme-context";

export type ThemeToggleProps = ComponentProps<"button">;

export function ThemeToggle({ className, ...props }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "group p-2 rounded-full transition-colors",
        "bg-gray-100 dark:bg-white/10",
        "hover:bg-gray-200 dark:hover:bg-white/20",
        "border border-gray-300 dark:border-white/20",
        "text-gray-900 dark:text-white",
        className,
      )}
      aria-label="Alternar tema"
      {...props}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-[20deg] group-hover:scale-110" />
      ) : (
        <Sun className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
      )}
    </button>
  );
}
