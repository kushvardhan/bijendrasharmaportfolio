"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Trophy, Users, Zap, Target } from "lucide-react";
import { SplitText } from "@/components/motion/SplitText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/motion/Reveal";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-linear-to-br from-[#f8f6f3] via-[#f3ede6] to-[#efeae4] overflow-hidden px-6 md:px-12 lg:px-16 py-20 md:py-32">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(139, 158, 111, 0.1) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center min-h-[80vh] md:min-h-screen">
        <Reveal className="z-10">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-[rgba(139,158,111,0.15)] text-[#2c241c] text-xs md:text-sm font-semibold">
              Welcome
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#2c241c] mb-6">
            <SplitText text="From uncertainty to trusted partner" />
          </h1>

          <p className="text-lg md:text-xl text-[#6b5d52] max-w-xl mb-8 leading-relaxed">
            I struggled alone. Built from nothing. Now I help businesses grow with systems designed to last.
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-12">
            <MagneticButton variant="primary">Get in touch</MagneticButton>
            <button
              type="button"
              className="inline-flex items-center text-[#8b9e6f] hover:text-[#7a8b5f] font-semibold transition-colors"
            >
              See my work <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-[#6b5d52]">
              <Trophy className="h-5 w-5 text-[#8b9e6f]" />
              <span>20+ team members | 5,000+ clients worldwide</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#6b5d52]">
              <Zap className="h-5 w-5 text-[#8b9e6f]" />
              <span>18+ years in software development</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#6b5d52]">
              <Target className="h-5 w-5 text-[#8b9e6f]" />
              <span>ISO certified | Government trusted</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="relative h-96 md:h-full md:min-h-[500px]">
          <div className="absolute inset-0 bg-linear-to-br from-[rgba(139,158,111,0.2)] via-transparent to-transparent rounded-3xl blur-3xl" />

          <div className="relative h-full bg-linear-to-br from-[#d9cfc4] to-[#c9bfb4] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Users className="h-24 w-24 text-[#8b9e6f] opacity-20 mb-4 mx-auto" />
                <p className="text-[#6b5d52] font-semibold">Professional Portrait</p>
                <p className="text-sm text-[#9d8f87]">High-quality headshot</p>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -right-4 md:-right-12 bg-white rounded-2xl shadow-xl p-4 border border-[#e8e2dc] max-w-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#8b9e6f] flex items-center justify-center text-white">
                <Trophy className="h-5 w-5" />
              </div>
              <div className="text-sm">
                <p className="font-bold text-[#2c241c]">5000+</p>
                <p className="text-[#6b5d52]">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-6 md:-left-12 bg-white rounded-2xl shadow-xl p-4 border border-[#e8e2dc] max-w-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#d4a574] flex items-center justify-center text-white">
                <Zap className="h-5 w-5" />
              </div>
              <div className="text-sm">
                <p className="font-bold text-[#2c241c]">ISO</p>
                <p className="text-[#6b5d52]">Certified Company</p>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
