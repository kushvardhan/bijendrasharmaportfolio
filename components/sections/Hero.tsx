"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations/framer-presets';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
            >
              <div className="w-2 h-2 rounded-full bg-gold-500"></div>
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">50,000+ events worldwide</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 dark:from-white dark:via-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent"
            >
              Architecting Digital Empires
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-md leading-relaxed"
            >
              Unlock your narrative. Experience seamless transformation from concept to code.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-300"
              >
                Explore My Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white rounded-full font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300"
              >
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-96 lg:h-150 flex items-center justify-center"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-radial from-gold-500/20 via-transparent to-transparent dark:from-gold-500/10 rounded-full blur-3xl" />

            {/* Geometric elements */}
            <div className="absolute top-20 right-10 w-32 h-32 rounded-full border-2 border-gold-300/30 dark:border-gold-500/30" />
            <div className="absolute bottom-32 left-10 w-24 h-24 border-2 border-sage-300/30 dark:border-sage-500/30 rotate-45" />
            <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-neutral-200 dark:bg-neutral-800 opacity-20" />

            {/* Main portrait placeholder - using gradient */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-linear-to-br from-neutral-300 via-neutral-400 to-neutral-500 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-800">
                {/* Placeholder for actual photo */}
                <div className="absolute inset-0 flex items-center justify-center text-neutral-600 dark:text-neutral-400 font-medium">
                  [Professional Portrait]
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-10, 10] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-4 -left-4 px-4 py-2 rounded-full backdrop-blur-md bg-white/30 dark:bg-white/20 border border-white/50 text-xs font-medium text-neutral-900 dark:text-white shadow-lg"
              >
                Leading Innovation
              </motion.div>

              <motion.div
                animate={{ y: [10, -10] }}
                transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full backdrop-blur-md bg-gold-400/30 dark:bg-gold-500/30 border border-gold-500/50 text-xs font-medium text-neutral-900 dark:text-white shadow-lg"
              >
                Expert Developer
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Gradient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-gold-100 to-transparent dark:from-gold-900/20 opacity-30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-sage-100 to-transparent dark:from-sage-900/20 opacity-30 rounded-full blur-3xl -z-10" />
    </section>
  );
};
