"use client";

import * as React from "react";
import { Lightbulb, Target, Users, Zap, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

type Item = { icon: LucideIcon; title: string; desc: string };

const ITEMS: Item[] = [
  { icon: Lightbulb, title: "You have an idea", desc: "But no clear path to execute it" },
  { icon: Target, title: "You want to scale", desc: "But current systems are holding you back" },
  { icon: Users, title: "You need a trusted partner", desc: "Someone who understands your vision" },
  { icon: Zap, title: "You want real results", desc: "Not empty promises or generic solutions" },
];

export function RelatableSection() {
  return (
    <section className="bg-white py-20 md:py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c241c] mb-12 text-center">
            Can you relate?
          </h2>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 gap-6">
          {ITEMS.map((item) => (
            <Reveal
              key={item.title}
              className="p-8 rounded-2xl border-2 border-[#e8e2dc] hover:border-[#8b9e6f] hover:shadow-lg hover:bg-[rgba(139,158,111,0.05)] transition-all group"
            >
              <item.icon className="h-10 w-10 text-[#8b9e6f] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-[#2c241c] mb-2">{item.title}</h3>
              <p className="text-[#6b5d52]">{item.desc}</p>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
