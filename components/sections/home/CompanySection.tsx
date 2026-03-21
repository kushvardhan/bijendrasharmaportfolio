"use client";

import * as React from "react";
import { Check, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

const EXPERTISE = [
  "Network Marketing or MLM Software.",
  "Business Directories & Local Search.",
  "Wedding portal & Directories.",
  "Dating and Friendship sites.",
  "Home & Apartment Rental Sites.",
  "Web Application Development.",
  "Institution Management System.",
  "Jewellery Management System.",
  "On line Networking Software.",
  "Search Engine Optimization.",
  "Retail Management System.",
  "Professional Training.",
  "E-Commerce.",
  "Web Design.",
];

const ACHIEVEMENTS = [
  "We are the best software development and service provider in Jharkhand.",
  "We are having lots of Government/Semi Govt. department projects.",
  "Our organizations structure is good.",
  "We are having own office premises.",
  "We are having 2 Branch with big setup.",
  "Our client is more than 5,000 Over world.",
  "We are working in different-different domains.",
];

export function CompanySection() {
  return (
    <section id="company" className="bg-[var(--background)] px-6 md:px-12 lg:px-16 py-18 md:py-24">
      <Container>
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase ui-muted">About the company</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
              Horizon Softech a trusted name
            </h2>
            <p className="mt-5 ui-muted leading-relaxed">
              A Trusted name Horizon Softech is a "Software Development" Company. It is an ISO Certified and
              Government Registered Company. We are dealing with Government Projects and quality delivery on time
              is our commitment.
            </p>

            <div className="mt-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="text-sm font-semibold text-[var(--foreground)] flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[var(--accent)]" /> Specialties
              </p>
              <p className="mt-2 ui-muted text-sm">
                Our Company is specializes in Office administration projects, Competitive Analysis, Clients dealing
                and Customized Software Development.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6" id="expertise">
            <Reveal>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">Area of expertise</h3>
              <p className="ui-muted mt-2">Domains we have built across (verbatim list from your bio).</p>
            </Reveal>

            <Stagger className="grid sm:grid-cols-2 gap-4">
              {EXPERTISE.map((t) => (
                <Reveal
                  key={t}
                  className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all"
                >
                  <p className="text-sm text-[var(--foreground)]">{t}</p>
                </Reveal>
              ))}
            </Stagger>

            <Reveal>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mt-8">Achievements</h3>
            </Reveal>
            <Stagger className="grid sm:grid-cols-2 gap-4">
              {ACHIEVEMENTS.map((a) => (
                <Reveal key={a} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5">
                  <p className="text-sm ui-muted flex gap-2">
                    <Check className="h-4 w-4 text-[var(--accent)] mt-[2px] flex-shrink-0" />
                    <span>{a}</span>
                  </p>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
