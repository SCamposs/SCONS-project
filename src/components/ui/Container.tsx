import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto", {
  variants: {
    maxWidth: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
    },
    padding: {
      true: "px-4 sm:px-6 lg:px-8",
      false: "",
    },
  },
  defaultVariants: {
    maxWidth: "7xl",
    padding: true,
  },
});

export interface ContainerProps
  extends ComponentProps<"div">, VariantProps<typeof containerVariants> {}

export function Container({
  className,
  maxWidth,
  padding,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(containerVariants({ maxWidth, padding }), className)}
      {...props}
    />
  );
}
