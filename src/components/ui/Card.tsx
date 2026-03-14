import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "bg-white dark:bg-gray-900 rounded-2xl border border-border dark:border-border shadow-sm",
  {
    variants: {
      padding: {
        none: "",
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
      },
    },
    defaultVariants: {
      padding: "md",
    },
  },
);

export interface CardProps
  extends ComponentProps<"div">, VariantProps<typeof cardVariants> {}

export function Card({ className, padding, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ padding }), className)} {...props} />
  );
}

export type CardContentProps = ComponentProps<"div">;

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn(className)} {...props} />;
}
