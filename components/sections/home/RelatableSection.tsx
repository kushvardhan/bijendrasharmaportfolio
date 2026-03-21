"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { Target, Users, Lightbulb, TrendingUp, Shield, Heart } from "lucide-react";

const CARDS = [
  { icon: Target, title: "Need a reliable tech partner?", desc: "You want someone who delivers on time, every time. Not just promises." },
  { icon: Users, title: "Struggling with vendor trust?", desc: "We act as advisors, not vendors. Your success is our reputation." },
  { icon: Lightbulb, title: "Want custom software solutions?", desc: "From MLM software to e-commerce, we build what your business actually needs." },
  { icon: TrendingUp, title: "Looking to scale your business?", desc: "Our systems have helped 5,000+ clients grow across different domains." },
  { icon: Shield, title: "Need government-grade quality?", desc: "ISO Certified, Government Registered. We handle serious projects." },
  { icon: Heart, title: "Value long-term relationships?", desc: "We have been building trust since 2004. Our clients stay because we care." },
];

export function RelatableSection() {
  return (
    <section className="bg-[var(--surface-2)] px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
              Can you relate?
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-tight text-[var(--foreground)]">
              These are the challenges we solve every day
            </h2>
          </div>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
          {CARDS.map((c) => (
            <Reveal key={c.title}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-7 cursor-default h-full"
              >
                <div className="h-12 w-12 rounded-2xl bg-[var(--accent-weak)] flex items-center justify-center mb-5 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-300">
                  <c.icon className="h-5 w-5 text-[var(--accent)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">{c.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{c.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

