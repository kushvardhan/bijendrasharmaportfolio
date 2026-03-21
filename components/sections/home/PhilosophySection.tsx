"use client";

import * as React from "react";
import { Heart, Users, Trophy, Zap } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

const BELIEFS = [
  { icon: Heart, belief: "Technology should serve people, not complicate their lives." },
  { icon: Users, belief: "Your business deserves a partner who stays, not just a vendor." },
  { icon: Trophy, belief: "Real relationships are built on trust and consistent delivery." },
  { icon: Zap, belief: "Growth is a marathon. We build systems that last." },
];

export function PhilosophySection() {
  return (
    <section className="bg-white py-20 md:py-32 px-6 md:px-12 lg:px-16" id="philosophy">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c241c] mb-6">Why I do this</h2>
          <p className="text-lg text-[#6b5d52]">Beyond the code, here&apos;s what actually drives me</p>
        </Reveal>

        <Stagger className="space-y-8">
          {BELIEFS.map((item) => (
            <Reveal
              key={item.belief}
              className="flex gap-6 items-start p-6 rounded-2xl hover:bg-[#f8f6f3] transition-colors"
            >
              <item.icon className="h-8 w-8 text-[#8b9e6f] flex-shrink-0 mt-1" />
              <p className="text-xl text-[#2c241c] font-semibold">{item.belief}</p>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
