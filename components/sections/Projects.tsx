"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, hoverLift } from '@/lib/animations/framer-presets';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  color: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'MLM Software Platform',
    description: 'Comprehensive network marketing solution serving 1000+ users with real-time analytics and payment integration.',
    category: 'Software Development',
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: '2',
    title: 'Institution Management System',
    description: 'Complete academic management solution for colleges and schools handling admissions, fees, and records.',
    category: 'Enterprise Software',
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: '3',
    title: 'Network Diagram Tools',
    description: 'Advanced network architecture visualization and documentation platform for IT professionals.',
    category: 'Development Tools',
    color: 'from-green-400 to-green-600',
  },
  {
    id: '4',
    title: 'E-Commerce Platform',
    description: 'Full-featured online retail solution with inventory management, payment gateway, and analytics.',
    category: 'E-Commerce',
    color: 'from-amber-400 to-amber-600',
  },
  {
    id: '5',
    title: 'Government Project Suite',
    description: 'Critical government projects ensuring data security, compliance, and seamless operations.',
    category: 'Government IT',
    color: 'from-red-400 to-red-600',
  },
  {
    id: '6',
    title: 'Jewellery Management System',
    description: 'Specialized inventory and billing system for jewellery businesses with real-time pricing.',
    category: 'Specialized Software',
    color: 'from-yellow-400 to-yellow-600',
  },
];

export const Projects: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-neutral-900 dark:text-white">
            The Trust
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            (Projects) — Stacking geometric feature cards, like space in your scroll.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={hoverLift.whileHover}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 p-8">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-linear-to-r ${project.color} bg-opacity-10 mb-4`}>
                    <div className={`w-2 h-2 rounded-full bg-linear-to-r ${project.color}`} />
                    <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-gold-500 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <motion.button
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-300 font-medium"
                  >
                    View Project
                    <ArrowRight size={16} />
                  </motion.button>
                </div>

                {/* Hover highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-white/10 to-transparent rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-300 inline-flex items-center gap-2"
          >
            Explore All Projects
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};