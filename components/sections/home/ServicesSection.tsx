"use client";

import * as React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

type Service = {
  title: string;
  problem: string;
  solution: string;
  outcomes: string[];
};

const SERVICES: Service[] = [
  {
    title: "Web & Software Development",
    problem: "Your business is stuck with outdated systems",
    solution: "Modern, scalable applications built to grow with you",
    outcomes: ["Faster operations", "Better user experience", "Real competitive advantage"],
  },
  {
    title: "Government & Enterprise Solutions",
    problem: "Government projects need specialized expertise",
    solution: "ISO-certified systems trusted by agencies nationwide",
    outcomes: ["Compliance guaranteed", "Proven track record", "On-time delivery"],
  },
  {
    title: "Custom Business Automation",
    problem: "Manual processes waste time and money",
    solution: "Automated workflows designed for your business",
    outcomes: ["Save 40+ hours/week", "Reduce errors", "Scale without hiring"],
  },
  {
    title: "E-Commerce & Marketplaces",
    problem: "Can't compete with established online platforms",
    solution: "Custom platforms tailored to your unique needs",
    outcomes: ["Own your platform", "Higher margins", "Direct customer relationships"],
  },
  {
    title: "Institution & Retail Management",
    problem: "Managing operations is becoming too complex",
    solution: "Integrated systems that tie everything together",
    outcomes: ["Real-time insights", "Better control", "Happier teams"],
  },
  {
    title: "Strategic Technology Consulting",
    problem: "Not sure which direction to take",
    solution: "Expert guidance on technology & strategy",
    outcomes: ["Clear roadmap", "Smarter decisions", "Future-proof business"],
  },
];

export function ServicesSection() {
  return (
    <section className="bg-linear-to-br from-[#f8f6f3] to-[#efeae4] py-20 md:py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c241c] mb-4">What I build</h2>
          <p className="text-lg text-[#6b5d52] max-w-2xl mx-auto">
            Solutions designed to solve your real problems, not generic templates
          </p>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Reveal
              key={service.title}
              className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all group"
            >
              <h3 className="text-xl font-bold text-[#2c241c] mb-4 group-hover:text-[#8b9e6f] transition-colors">
                {service.title}
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-semibold text-[#8b9e6f] uppercase tracking-wide">Problem</p>
                  <p className="text-[#6b5d52]">{service.problem}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#d4a574] uppercase tracking-wide">Solution</p>
                  <p className="text-[#6b5d52]">{service.solution}</p>
                </div>
              </div>

              <div className="border-t border-[#e8e2dc] pt-4">
                <p className="text-sm font-semibold text-[#2c241c] uppercase tracking-wide mb-3">Outcome</p>
                <ul className="space-y-2">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm text-[#6b5d52]">
                      <span className="text-[#8b9e6f] font-bold mt-1">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
