"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

type SplitTextProps = {
  text: string;
  className?: string;
  wordDelay?: number;
};

export function SplitText({ text, className, wordDelay = 0.035 }: SplitTextProps) {
  const reduce = useReducedMotion();
  const parts = React.useMemo(() => text.split(" "), [text]);

  if (reduce) return <span className={className}>{text}</span>;

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: wordDelay } },
      }}
    >
      {parts.map((p, i) => (
        <motion.span
          key={`${p}-${i}`}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {p}
        </motion.span>
      ))}
    </motion.span>
  );
}
