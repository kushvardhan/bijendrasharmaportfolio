"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function CTASection() {
  return (
    <section id="contact" className="relative bg-[var(--accent)] px-6 md:px-12 lg:px-16 py-20 md:py-28 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative max-w-4xl mx-auto text-center">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/70 mb-4">
            Let&apos;s Connect
          </p>
          <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-white mb-6">
            Ready to build something{" "}
            <span className="italic">together?</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            You don&apos;t need another vendor. You need a partner who cares about your success as much as you do.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <motion.a
              href="mailto:connect@bijendrasharma.in"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0a0a0a] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Mail className="h-4 w-4" />
              connect@bijendrasharma.in
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="tel:+919431121078"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/20 border border-white/30 px-8 py-4 text-sm font-semibold text-white hover:bg-white/30 transition-all duration-300"
            >
              <Phone className="h-4 w-4" /> Call Now
            </motion.a>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="text-sm text-white/60">
            Based in Ranchi, Jharkhand &mdash; serving clients worldwide since 2004
          </p>
        </Reveal>
      </div>
    </section>
  );
}
