"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AppleButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  magnetic?: boolean;
}

export default function AppleButton({
  children,
  variant = "primary",
  href,
  onClick,
  className,
}: AppleButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all cursor-pointer select-none overflow-hidden";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-md",
    secondary:
      "bg-transparent text-accent border border-accent hover:bg-accent hover:text-white",
  };

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      {children}
    </MotionComponent>
  );
}
