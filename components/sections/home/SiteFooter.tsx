"use client";

import * as React from "react";
import { motion } from "framer-motion";

const LINKS = [
  { label: "Home", href: "#" },
  { label: "Story", href: "#story" },
  { label: "Company", href: "#company" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] text-white px-6 md:px-12 lg:px-16 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end mb-12">
          <div>
            <motion.a
              href="mailto:connect@bijendrasharma.in"
              whileHover={{ x: 4 }}
              className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold hover:text-[var(--accent)] transition-colors duration-300 block"
            >
              connect@bijendrasharma.in
            </motion.a>
            <p className="text-zinc-500 text-sm mt-3">
              Ranchi, Jharkhand &bull; India
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {LINKS.map((l) => (
              <motion.a
                key={l.label}
                href={l.href}
                whileHover={{ y: -2 }}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
              >
                {l.label}
              </motion.a>
            ))}
          </nav>
        </div>

        <div className="border-t border-[var(--dark-border)] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-xs font-bold text-white">B</div>
            <span className="text-sm font-semibold">Bijendra Sharma</span>
          </div>
          <p className="text-zinc-600 text-xs">
            &copy; {new Date().getFullYear()} Bijendra Sharma. Built with care and intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
