"use client";

import * as React from "react";
import { Users, Trophy, Zap } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

type TrustItem = {
  label: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

const ITEMS: TrustItem[] = [
  { icon: Users, label: "20+ Team Members", desc: "Growing team in Ranchi & Jamshedpur" },
  { icon: Trophy, label: "5,000+ Clients", desc: "Served worldwide across diverse domains" },
  { icon: Zap, label: "18+ Years Active", desc: "Continuous innovation since 2004" },
];

export function TrustSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-16" id="trust">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-center text-[#6b5d52] text-lg md:text-xl mb-12 font-semibold">
            Trusted by government agencies, SMBs, and enterprises across India
          </p>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-8">
          {ITEMS.map((item) => (
            <Reveal
              key={item.label}
              className="p-8 rounded-2xl bg-linear-to-br from-[#f8f6f3] to-[#efeae4] border border-[#e8e2dc] hover:shadow-lg transition-all"
            >
              <item.icon className="h-12 w-12 text-[#8b9e6f] mb-4" />
              <h3 className="text-xl font-bold text-[#2c241c] mb-2">{item.label}</h3>
              <p className="text-[#6b5d52]">{item.desc}</p>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
