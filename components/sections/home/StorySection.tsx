"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Heart, Bike, Cpu, GraduationCap, Frown, Dumbbell } from "lucide-react";

const ABOUT_ME = [
  { icon: Bike, k: "My Passion", v: "Travelling and long rides on my motor bike. From Hero Ranger to Yamaha R-15, from Scorpio VLX to long drives." },
  { icon: Heart, k: "My Love", v: "My Dog Bruni. Yes, I love my dog like a child, and I am proud to admit it." },
  { icon: Cpu, k: "My Weakness", v: "Electronic gadgets & Car/Bike" },
  { icon: GraduationCap, k: "I'm Rich", v: "In my friends" },
  { icon: Frown, k: "I Hate", v: "Child Labour and untrustworthy people." },
  { icon: Dumbbell, k: "My Strength", v: "My commitments to my family specially my Amma (Mother)." },
];

export function StorySection() {
  return (
    <section id="story" className="bg-[var(--background)] px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)] mb-4">Personal Life</p>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-tight text-[var(--foreground)]">
              A story written under pressure &mdash; and built with commitment
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
          {/* Left — story text */}
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-7">
                <p className="text-[var(--muted)] leading-relaxed">
                  I was born in a small village of Bihar called Raghunathpur. A defining and sad moment
                  overshadowed my childhood when I lost my dad (Paapa Ji) at the age of 6. His loss came
                  at a crucial time of my development and left me with responsibilities without any
                  guidance and support. I had to struggle hard, make compromises and fight against
                  unforeseen odds to support myself and my family.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-7">
                <p className="text-[var(--muted)] leading-relaxed">
                  My early schooling was also done in small cities like Raghunathpur and then Gaziapur.
                  I did my graduation in Zoology from Maharaja College Ara. By this time I had realised
                  my Passion in computers so I did a diploma in hardware from Govt. Polytechnic in Ranchi,
                  Diploma in Software from NIIT, Ranchi and MCA from IGNOU and St. Xavier&apos;s college Ranchi.
                  Once I came to Ranchi, my entrepreneurial journey started.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-7">
                <p className="text-[var(--muted)] leading-relaxed">
                  I am an Entrepreneur, a motorbike enthusiast, a teacher and a gadget geek, all rolled
                  into one. Currently I am running my own web and software development company in Ranchi,
                  Jharkhand which I had started at my room with two of my friends in 2004. From a small
                  rented room and 2 employees we have now grown to a big office in Ranchi and with around
                  20+ employees.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--accent-weak)] p-7">
                <p className="text-[var(--foreground)] leading-relaxed font-medium">
                  After long search for a suitable life partner, I finally found my match in Anima, a
                  kathak dance teacher from Jamshedpur and we were married in December 2009. She is the
                  strength behind my achievements, my best friend, adviser and support.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-sm text-[var(--muted)] italic">I Miss: My father and his guiding words.</p>
            </Reveal>
          </div>

          {/* Right — image + about me cards */}
          <div className="space-y-6">
            <Reveal>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="rounded-[2rem] overflow-hidden aspect-[4/3] relative"
              >
                <Image
                  alt="Story photo"
                  src="https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1000&q=80"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">More about me</h3>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-3">
              {ABOUT_ME.map((item, i) => (
                <Reveal key={item.k} delay={0.1 + i * 0.05}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 h-full"
                  >
                    <p className="text-sm font-semibold text-[var(--foreground)] flex items-center gap-2 mb-2">
                      <item.icon className="h-4 w-4 text-[var(--accent)]" /> {item.k}
                    </p>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">{item.v}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

