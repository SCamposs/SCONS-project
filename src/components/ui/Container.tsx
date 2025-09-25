"use client";

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "7xl";
  padding?: boolean;
}

const Container = ({
  children,
  className = "",
  maxWidth = "7xl",
  padding = true,
}: ContainerProps) => {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "7xl": "max-w-7xl",
  };

  const paddingClasses = padding ? "px-4 sm:px-6 lg:px-8" : "";

  const classes = `mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses} ${className}`;

  return <div className={classes}>{children}</div>;
};

export { Container };
