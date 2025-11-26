"use client";

import { cn } from "@/lib/utils";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({ className, children, onClick, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "px-6 py-3 rounded-full font-semibold transition-all",
        className
      )}
    >
      {children}
    </button>
  );
}
