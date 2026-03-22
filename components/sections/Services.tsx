"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations/framer-presets';

interface Service {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
}

const services: Service[] = [
  {
    title: 'Custom Software Development',
    problem: "Off-the-shelf solutions don't fit your unique business needs.",
    solution: 'Bespoke applications built with cutting-edge technology tailored to your requirements.',
    outcome: '95%+ client satisfaction with scalable, maintainable code.',
  },
  {
    title: 'Enterprise Solutions',
    problem: 'Managing complex operations across departments becomes chaos without systems.',
    solution: 'Integrated management systems connecting all aspects of your business.',
    outcome: 'Streamlined operations, reduced costs, better decision-making.',
  },
  {
    title: 'Government & Compliance Projects',
    problem: 'Government projects require strict compliance, security, and reliability.',
    solution: 'ISO-certified processes ensuring every project meets regulatory standards.',
    outcome: 'Approved by government bodies, serving critical infrastructure.',
  },
  {
    title: 'Digital Transformation',
    problem: 'Legacy systems are slow, expensive, and limit growth.',
    solution: 'Modernization strategies moving your business to cloud and contemporary tech.',
    outcome: 'Future-ready infrastructure with 40% operational efficiency gains.',
  },
  {
    title: 'Training & Development',
    problem: "Your team needs upskilling but doesn't have guidance.",
    solution: 'Practical, industry-focused training programs from experienced professionals.',
    outcome: 'Empowered team members driving innovation in your organization.',
  },
  {
    title: 'Network & Infrastructure',
    problem: 'Poor network architecture leads to security risks and downtime.',
    solution: 'Robust network design ensuring security, performance, and scalability.',
    outcome: 'Enterprise-grade infrastructure supporting business growth.',
  },
];

export const Services: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-white">
            The Services / Work
          </h2>
          <p className="text-xl text-neutral-400">
            Capability through Transformation (Problem → Outcome)
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-linear-to-br from-gold-500/10 to-sage-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="relative p-8 rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-gold-500/20 group-hover:border-gold-500/40 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-gold-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <div className="space-y-5 flex-1">
                  <div>
                    <p className="text-xs font-semibold text-gold-400/60 uppercase tracking-wider mb-2">
                      Problem
                    </p>
                    <p className="text-neutral-300 leading-relaxed">
                      {service.problem}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gold-400/60 uppercase tracking-wider mb-2">
                      Solution
                    </p>
                    <p className="text-neutral-300 leading-relaxed">
                      {service.solution}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gold-400/60 uppercase tracking-wider mb-2">
                      Outcome
                    </p>
                    <p className="text-neutral-200 font-medium leading-relaxed">
                      {service.outcome}
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="mt-6 h-1 bg-linear-to-r from-gold-500 to-sage-500 origin-left"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
