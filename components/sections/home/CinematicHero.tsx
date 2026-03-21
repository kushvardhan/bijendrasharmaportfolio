"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NAV = [
  { label: "Home", href: "#" },
  { label: "Story", href: "#story" },
  { label: "Company", href: "#company" },
  { label: "Contact", href: "#contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function CinematicHero() {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] overflow-hidden min-h-screen flex flex-col">
      {/* Nav */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="relative z-20 flex items-center justify-between px-6 md:px-12 lg:px-16 py-5"
      >
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-[var(--accent)] flex items-center justify-center text-sm font-bold text-white">B</div>
          <span className="text-white font-semibold text-sm tracking-tight">Bijendra Sharma</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">{l.label}</a>
          ))}
        </nav>
        <a href="mailto:connect@bijendrasharma.in" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-5 py-2 text-sm text-white hover:bg-white/20 transition-all duration-300">
          Get in touch
        </a>
      </motion.header>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 lg:px-16 pb-16 pt-8 md:pt-0">
        <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div style={{ y: textY }} className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-zinc-400">5,000+ clients worldwide</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.3 }}
              className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-white"
            >
              Building Trust,{" "}<br className="hidden sm:block" />
              Systems &{" "}<span className="text-[var(--accent)]">Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.5 }}
              className="mt-6 text-lg text-zinc-400 max-w-lg leading-relaxed"
            >
              From a small village in Bihar to building Horizon Softech &mdash; an ISO Certified,
              Government Registered software company serving clients across the globe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.65 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#story" className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-white hover:brightness-110 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(200,169,126,0.3)]">
                Read my story <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#company" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-300">
                See how it works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-12 flex flex-wrap items-center gap-3 text-xs text-zinc-500"
            >
              <span>Trusted by teams at</span>
              {["Govt. Projects", "ISO 9001", "20+ Team"].map((t) => (
                <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1">{t}</span>
              ))}
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-[3/4] rounded-[2rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/40 to-transparent z-10" />
              <motion.div style={{ scale: imgScale, y: imgY }} className="h-full w-full">
                <Image
                  alt="Bijendra Sharma portrait"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent z-20" />
    </section>
  );
}

