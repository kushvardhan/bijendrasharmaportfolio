"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations/framer-presets';

export const Relatability: React.FC = () => {
  const painPoints = [
    {
      title: 'Lost at the beginning',
      description: 'Started with nothing but determination after losing my father at age 6.',
    },
    {
      title: 'Building from scratch',
      description: 'From a small village to managing a thriving software company with 25+ team members.',
    },
    {
      title: 'Overcoming obstacles',
      description: 'Navigated poverty, limited opportunities, and built a legacy through education and entrepreneurship.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-16 text-neutral-900 dark:text-white">
            Relatability Moment
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.15 }}
                className="flex gap-6"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-linear-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed italic border-l-4 border-gold-500 pl-6"
          >
            Your experiences are molded by your struggles. My journey of perseverance, learning, and growth isn't just a story—it's a proof that transformation is possible for anyone willing to work for it.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
