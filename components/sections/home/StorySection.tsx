"use client";

import * as React from "react";
import { Heart } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function StorySection() {
  return (
    <section
      className="bg-linear-to-br from-[#f8f6f3] to-[#efeae4] py-20 md:py-32 px-6 md:px-12 lg:px-16"
      id="story"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c241c] mb-6 leading-tight">
            Not every journey starts clear
          </h2>

          <div className="space-y-6 text-lg text-[#6b5d52] mb-8">
            <p>
              <strong className="text-[#2c241c]">At age 6,</strong> I lost my father. Growing up in a
              village without guidance, I had to figure things out alone.
            </p>
            <p>
              <strong className="text-[#2c241c]">I learned the hard way:</strong> Success isn&apos;t about
              being lucky. It&apos;s about persistence, smart decisions, and surrounding yourself with good
              people.
            </p>
            <p>
              <strong className="text-[#2c241c]">Then came a turning point:</strong> I realized my
              passion wasn&apos;t just computers—it was building systems that solve real problems for real
              businesses.
            </p>
            <p>
              <strong className="text-[#2c241c]">In 2004,</strong> I started Horizon Softech from a
              small room with two friends. Today, we have 20+ team members, offices in Ranchi and
              Jamshedpur, and we serve 5,000+ clients globally.
            </p>
          </div>

          <p className="text-xl text-[#8b9e6f] font-semibold mb-6">
            This journey taught me: Your obstacles are your unfair advantage.
          </p>

          <MagneticButton variant="secondary" withArrow={false}>
            Read my full story
          </MagneticButton>
        </Reveal>

        <Reveal className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-linear-to-br from-[#d9cfc4] to-[#c9bfb4] h-96 md:h-full md:min-h-[500px] flex items-center justify-center">
            <div className="text-center">
              <Heart className="h-20 w-20 text-[#8b9e6f] opacity-20 mb-4 mx-auto" />
              <p className="text-[#6b5d52] font-semibold">Story Photography</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
