"use client";

import { ButtonProps } from "@/src/interfaces";
import { cn } from "@/src/lib/utils";

export function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  className,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-indigo-900 text-white hover:bg-purple-900 focus:ring-[#4338ca]", // #4338ca = Indigo, #7c3aed = Purple
    secondary:
      "bg-purple-900 text-white hover:bg-pink-900 focus:ring-[#7c3aed]", // #7c3aed = Purple, #db2777 = Pink
    accent: "bg-pink-900 text-white hover:bg-indigo-900 focus:ring-[#db2777]", // #db2777 = Pink
    outline:
      "border-2 border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white focus:ring-[#4338ca] bg-transparent",
    ghost:
      "bg-transparent text-indigo-900 hover:bg-indigo-100 focus:ring-[#4338ca]",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const v = variants[variant as keyof typeof variants] || variants.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, v, fullWidth && "w-full", className)}
    >
      {children}
    </button>
  );
}
