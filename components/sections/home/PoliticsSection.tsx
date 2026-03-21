"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Flag } from "lucide-react";

const MILESTONES = [
  { year: "1992", text: "My politics carrier is star in college as a college president in 1992" },
  { year: "NIIT", text: "3 yrs. I was in president of Rotract club of Ranchi NIIT." },
  { year: "2009", text: "Year 2009 I joined a Samta Party as a State secretary of Jharkhand." },
  { year: "Now", text: "Right now I\u2019m going to join with Nitish kumar (Chief Minister of Bihar) Party JDU. To inspiring Nitish Kr." },
];

export function PoliticsSection() {
  return (
    <section className="bg-[var(--surface-2)] px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
              Politics &amp; Me
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-tight text-[var(--foreground)]">
              Beyond technology &mdash; a public chapter
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.year + i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 h-full"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-xl bg-[var(--accent-weak)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors duration-300">
                    <Flag className="h-4 w-4 text-[var(--accent)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-bold text-[var(--accent)]">{m.year}</span>
                </div>
                <p className="text-[var(--muted)] leading-relaxed text-sm">{m.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
