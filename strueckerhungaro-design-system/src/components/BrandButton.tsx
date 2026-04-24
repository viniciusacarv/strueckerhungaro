import type { ButtonHTMLAttributes, ReactNode } from "react";

type BrandButtonVariant = "primary" | "secondary" | "accent" | "outline";

type BrandButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: BrandButtonVariant;
};

const variants: Record<BrandButtonVariant, string> = {
  primary: "bg-sh-blueDigital text-white hover:brightness-95",
  secondary: "bg-sh-blueBusiness text-white hover:brightness-110",
  accent: "bg-sh-yellowAttention text-sh-blueBusiness hover:brightness-95",
  outline: "border border-sh-blueDigital bg-transparent text-sh-blueDigital hover:bg-sh-blueDigital hover:text-white"
};

export function BrandButton({ children, variant = "primary", className = "", ...props }: BrandButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
