"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  withArrow?: boolean;
};

export function MagneticButton({
  children,
  className,
  onClick,
  variant = "primary",
  withArrow = true,
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const ref = React.useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setOffset({ x, y });
  };

  const baseClasses =
    "relative inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 px-8 py-3 text-sm";
  const primaryClasses =
    "bg-[var(--accent)] text-white hover:brightness-95 hover:shadow-lg hover:scale-105";
  const secondaryClasses =
    "border-2 border-[var(--accent)] text-[var(--foreground)] hover:bg-[var(--accent-weak)] hover:scale-105";

  const transform = reduce ? undefined : `translate3d(${offset.x}px, ${offset.y}px, 0)`;

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseMove={reduce ? undefined : handleMouseMove}
      onMouseLeave={reduce ? undefined : () => setOffset({ x: 0, y: 0 })}
      className={[
        baseClasses,
        variant === "primary" ? primaryClasses : secondaryClasses,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={transform ? { transform } : undefined}
      whileTap={reduce ? undefined : { scale: 0.98 }}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </motion.button>
  );
}
