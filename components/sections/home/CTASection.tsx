"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function CTASection() {
  return (
    <section className="bg-[#2c241c] py-20 md:py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to build something together?</h2>
          <p className="text-lg text-[#d4a574] mb-8 max-w-2xl mx-auto">
            You don&apos;t need another vendor. You need a partner who cares about your success as much as you do.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton variant="primary">Let&apos;s talk</MagneticButton>
            <button
              type="button"
              className="inline-flex items-center text-white hover:text-[#d4a574] font-semibold transition-colors"
            >
              Check out my work <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <p className="text-[#9d8f87] text-sm mt-8">
            Or reach out directly:{" "}
            <a
              href="mailto:connect@bijendrasharma.in"
              className="text-[#d4a574] hover:text-white transition-colors font-semibold"
            >
              connect@bijendrasharma.in
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
