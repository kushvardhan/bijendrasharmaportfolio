"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

const ITEMS = [
  "My politics carrier is star in college as a college president in 1992",
  "3 yrs. I was in president of Rotract club of Ranchi NIIT.",
  "Year 2009 I joined a Samta Party as a State secretary of Jharkhand.",
  "Right now Im going to join with Nitish kumar (Chief Minister of Bihar) Party JDU. To inspiring Nitish Kr.",
];

export function PoliticsSection() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-16 py-18 md:py-24">
      <Container>
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase ui-muted">Politics and me</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
            A public chapter (kept verbatim)
          </h2>
          <p className="mt-5 ui-muted max-w-2xl">
            This section reflects what you shared in your bio. We can refine tone later, but the data is preserved.
          </p>
        </Reveal>

        <Stagger className="mt-8 grid md:grid-cols-2 gap-4">
          {ITEMS.map((t) => (
            <Reveal key={t} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="ui-muted leading-relaxed">{t}</p>
            </Reveal>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
