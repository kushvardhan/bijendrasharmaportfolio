"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations/framer-presets';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering Digital Craft',
    excerpt: 'The art of building scalable systems that stand the test of time and evolving technologies.',
    author: 'Bijendra Sharma',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
  },
  {
    id: '2',
    title: 'Code as Storytelling',
    excerpt: 'How to write code that tells a story—making it maintainable, readable, and beautiful.',
    author: 'Bijendra Sharma',
    date: 'Mar 10, 2024',
    readTime: '12 min read',
  },
  {
    id: '3',
    title: 'Code as Storytelling',
    excerpt: 'Part 2: Advanced patterns and practices for writing expressive, business-logic-focused code.',
    author: 'Bijendra Sharma',
    date: 'Mar 5, 2024',
    readTime: '10 min read',
  },
  {
    id: '4',
    title: 'Building Teams that Build',
    excerpt: 'Leadership lessons from scaling Horizon Softech from 2 to 25+ team members.',
    author: 'Bijendra Sharma',
    date: 'Feb 28, 2024',
    readTime: '9 min read',
  },
  {
    id: '5',
    title: 'Government Projects: Lessons Learned',
    excerpt: 'Navigating complexity, compliance, and delivery in critical government infrastructure.',
    author: 'Bijendra Sharma',
    date: 'Feb 20, 2024',
    readTime: '11 min read',
  },
  {
    id: '6',
    title: 'Tech for Social Impact',
    excerpt: 'How technology can drive positive change in underserved communities.',
    author: 'Bijendra Sharma',
    date: 'Feb 12, 2024',
    readTime: '7 min read',
  },
];

export const Blog: React.FC = () => {
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
            The Thoughts
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            (Blog) — Insights, lessons, and reflections on building, leading, and creating impact.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full cursor-pointer"
            >
              <div className="flex-1 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-gold-500/50 dark:hover:border-gold-500/50 transition-all duration-300 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-900 flex flex-col">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-gold-500 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-neutral-900 dark:text-white">
                      {post.author}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      {post.date}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-800 px-3 py-1 rounded-full">
                    {post.readTime}
                  </span>
                </div>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="mt-4 h-1 bg-linear-to-r from-gold-500 to-sage-500 origin-left"
              />
            </motion.article>
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
            Read All Articles
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
