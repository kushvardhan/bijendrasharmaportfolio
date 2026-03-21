"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

export function IntroSection() {
  return (
    <section className="relative bg-[var(--background)] px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Left — image */}
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-[var(--surface-2)]"
          >
            <Image
              alt="Bijendra Sharma working"
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 backdrop-blur-md border border-[var(--border)] p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold text-sm">20+</div>
                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">Years of Experience</p>
                  <p className="text-xs text-[var(--muted)]">Since 2004 &mdash; Ranchi, Jharkhand</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Reveal>

        {/* Right — text */}
        <div>
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
              Introduction
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-tight text-[var(--foreground)]">
              Your Technology Partner for{" "}
              <span className="text-[var(--accent)]">Clarity, Confidence, and Results.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-[var(--muted)] leading-relaxed text-lg">
              Hi, I am Bijendra Sharma. I am a Software professional and Managing Director of the
              Company called Horizon Softech that is based in Ranchi, Jharkhand. This website is for
              my friends and well-wishers who want to know more about me.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              I am an entrepreneur with over 10 years of experience in marketing, management and
              business development in diverse companies. My strength lies in making relations and
              working with businesses and people across various geographies and domains.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { num: "5,000+", label: "Clients Worldwide" },
                { num: "20+", label: "Team Members" },
                { num: "2004", label: "Founded" },
                { num: "ISO", label: "Certified Company" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 cursor-default"
                >
                  <p className="text-2xl font-bold text-[var(--foreground)]">{s.num}</p>
                  <p className="text-sm text-[var(--muted)] mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

