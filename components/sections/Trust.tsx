"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations/framer-presets';

const StatItem: React.FC<{ number: string; label: string; delay: number }> = ({ number, label, delay }) => (
  <motion.div
    variants={staggerItem}
    transition={{ delay }}
    className="flex flex-col items-center sm:items-start"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: delay + 0.2 }}
      className="text-4xl sm:text-5xl font-bold bg-linear-to-br from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent mb-2"
    >
      {number}
    </motion.div>
    <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">{label}</p>
  </motion.div>
);

export const Trust: React.FC = () => {
  const stats = [
    { number: '20+', label: 'Years of Excellence' },
    { number: '5000+', label: 'Happy Clients' },
    { number: '100+', label: 'Projects Delivered' },
    { number: '25+', label: 'Team Members' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} delay={index * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
