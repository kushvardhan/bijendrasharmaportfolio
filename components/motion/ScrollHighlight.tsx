"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type ScrollHighlightProps = {
  children: React.ReactNode;
  className?: string;
  /** Controls where the highlight starts/ends relative to the viewport. */
  offset?: NonNullable<Parameters<typeof useScroll>[0]>["offset"];
};

export function ScrollHighlight({
  children,
  className,
  offset = ["start 0.85", "end 0.55"],
}: ScrollHighlightProps) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const w = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <span ref={ref} className={className} style={{ position: "relative", display: "inline" }}>
      {!reduce && (
        <motion.span
          aria-hidden
          style={{
            position: "absolute",
            left: "-0.08em",
            right: "-0.08em",
            bottom: "0.08em",
            height: "0.72em",
            width: w,
            borderRadius: "999px",
            background: "var(--accent-weak)",
            zIndex: 0,
          }}
        />
      )}
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </span>
  );
}
