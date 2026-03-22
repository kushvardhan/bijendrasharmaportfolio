"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations/framer-presets';

interface TimelineItem {
  title: string;
  description: string;
  year?: string;
}

const timelineItems: TimelineItem[] = [
  {
    title: 'Small Village Roots',
    description: 'Born in Raghunathpur, Bihar. Lost my father at age 6, setting the stage for a life of challenges and resilience.',
    year: '1985',
  },
  {
    title: 'Education Journey',
    description: 'Graduation in Zoology from Maharaja College Ara. Discovered passion for computers and pursued multiple certifications.',
    year: '2004',
  },
  {
    title: 'Entrepreneurial Birth',
    description: 'Founded Horizon Softech in a small rented room with two friends. Started with passion, no guarantees.',
    year: '2004',
  },
  {
    title: 'Growth & Expansion',
    description: 'From 2 employees in a room to 25+ team members across offices in Ranchi and Jamshedpur.',
    year: '2020',
  },
  {
    title: 'Family & Balance',
    description: 'Married Anima in 2009. She became my strength, advisor, and backbone of all achievements.',
    year: '2009',
  },
  {
    title: 'Impact & Legacy',
    description: 'Working on government projects, serving 5000+ clients globally, and giving back through education.',
    year: 'Present',
  },
];

export const Origin: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-white">
            The Origin
          </h2>
          <p className="text-xl text-neutral-400 mb-16">(About)</p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 sm:gap-12 group cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-12 h-12 rounded-full bg-linear-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white font-bold shrink-0 group-hover:shadow-lg group-hover:shadow-gold-500/50 transition-shadow duration-300"
                  >
                    {index + 1}
                  </motion.div>
                  {index < timelineItems.length - 1 && (
                    <div className="w-1 h-20 bg-linear-to-b from-gold-400 to-transparent mt-2" />
                  )}
                </div>

                <div className="pb-8 flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    {item.year && (
                      <span className="text-gold-400 font-semibold text-sm shrink-0">
                        {item.year}
                      </span>
                    )}
                  </div>
                  <p className="text-neutral-400 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 p-8 rounded-2xl bg-linear-to-br from-gold-500/10 to-sage-500/10 border border-gold-500/20 dark:border-gold-500/30"
          >
            <p className="text-white text-lg leading-relaxed">
              "My story is not about how privileged I was, but how I refused to let circumstances define me. Every challenge became a lesson, every setback a setup for a comeback. Today, I lead a company built on values of excellence, integrity, and giving back to society."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
