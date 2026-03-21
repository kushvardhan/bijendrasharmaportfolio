"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import {
  Code, Globe, ShoppingCart, Building2, Search,
  GraduationCap, Gem, Users, Award, MapPin, ShieldCheck
} from "lucide-react";

const EXPERTISE = [
  { icon: Code, label: "Network Marketing / MLM Software" },
  { icon: Search, label: "Business Directories & Local Search" },
  { icon: Globe, label: "Web Application Development" },
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: Building2, label: "Institution Management System" },
  { icon: Gem, label: "Jewellery Management System" },
  { icon: Users, label: "Online Networking Software" },
  { icon: GraduationCap, label: "Professional Training" },
];

const ACHIEVEMENTS = [
  "Best software development and service provider in Jharkhand",
  "Government / Semi Govt. department projects",
  "Own office premises with 2 branches",
  "5,000+ clients across the world",
  "Working in different domains",
  "Strong organizational structure",
];

const EXPERIENCE = [
  { role: "Managing Director", org: "Horizon Softech", period: "August 2004 – Present", location: "HO: Ranchi | Branch: Jamshedpur" },
  { role: "IT Training Faculty", org: "Central Coal Field (CCL) Head Office", period: "1.5 Years", location: "Ranchi" },
  { role: "IT Project Head", org: "Account General (A.G. Bihar)", period: "1 Year 3 Months", location: "Bihar" },
  { role: "Guest Lecturer, Computer Science PG Dept.", org: "Govt. Marwari College", period: "4 Years (Parallel)", location: "Ranchi" },
];

export function CompanySection() {
  return (
    <section id="company" className="bg-[#0a0a0a] px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)] mb-4">Professional Life</p>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Horizon Softech &mdash; a trusted name in software development
            </h2>
            <p className="mt-6 text-zinc-400 leading-relaxed text-lg max-w-2xl mx-auto">
              An ISO Certified and Government Registered Company. We deal with Government Projects
              and quality delivery on time is our commitment.
            </p>
          </div>
        </Reveal>

        {/* Experience timeline */}
        <Reveal>
          <h3 className="text-xl font-semibold text-white mb-6">Experience</h3>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(200,169,126,0.4)" }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-[var(--dark-border)] bg-[var(--dark-surface)] p-6 h-full"
              >
                <p className="text-sm font-semibold text-[var(--accent)]">{e.period}</p>
                <p className="text-lg font-semibold text-white mt-2">{e.role}</p>
                <p className="text-sm text-zinc-400 mt-1">{e.org}</p>
                <p className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {e.location}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Area of Expertise */}
        <Reveal>
          <h3 className="text-xl font-semibold text-white mb-6">Area of Expertise</h3>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {EXPERTISE.map((e, i) => (
            <Reveal key={e.label} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-2xl border border-[var(--dark-border)] bg-[var(--dark-surface)] p-5 h-full cursor-default"
              >
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[var(--accent)] transition-colors duration-300">
                  <e.icon className="h-5 w-5 text-[var(--accent)] group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-sm font-medium text-white">{e.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Achievements */}
        <Reveal>
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Award className="h-5 w-5 text-[var(--accent)]" /> Achievements
          </h3>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-[var(--dark-border)] bg-[var(--dark-surface)] p-5 flex items-start gap-3"
              >
                <ShieldCheck className="h-5 w-5 text-[var(--accent)] mt-0.5 shrink-0" />
                <p className="text-sm text-zinc-300">{a}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

