"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations/framer-presets';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-8 text-neutral-900 dark:text-white">
            The CTA
          </h2>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-12"
          >
            <a
              href="mailto:contact@bijendrasharma.dev"
              className="inline-block text-4xl sm:text-5xl font-bold bg-linear-to-r from-gold-500 to-gold-600 dark:from-gold-400 dark:to-gold-500 bg-clip-text text-transparent hover:from-gold-600 hover:to-gold-700 dark:hover:from-gold-300 dark:hover:to-gold-400 transition-all duration-300"
            >
              contact@bijendrasharma.dev
            </a>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to build something extraordinary? Let's collaborate and create digital solutions that matter. Reach out for partnerships, projects, or just a conversation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="mailto:contact@bijendrasharma.dev"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-300 inline-flex items-center gap-2"
            >
              Explore My Journey
              <ArrowRight size={20} />
            </motion.a>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white rounded-full font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300 inline-flex items-center gap-2"
            >
              GitHub Profile
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 border-t border-neutral-200 dark:border-neutral-800"
          >
            <div className="text-center">
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">Location</p>
              <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                Ranchi, Jharkhand
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">Company</p>
              <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                Horizon Softech
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">Status</p>
              <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                Open to Projects
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
