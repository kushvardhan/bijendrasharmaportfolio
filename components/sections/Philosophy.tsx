import React from 'react';
import { motion } from 'framer-motion';

export const Philosophy: React.FC = () => {
  const beliefs = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'Every line of code, every decision, every interaction reflects our commitment to being the best.',
    },
    {
      icon: '👥',
      title: 'Family First',
      description: 'My mother, my wife, my team—they are the foundation of everything I build and achieve.',
    },
    {
      icon: '🤝',
      title: 'Trust Over Profit',
      description: 'Relationships are our greatest asset. We build long-term partnerships, not quick transactions.',
    },
    {
      icon: '🌱',
      title: 'Continuous Growth',
      description: 'Learning never stops. We invest in our people, our processes, and our capabilities.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-100 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-8 text-neutral-900 dark:text-white leading-tight">
              The Personal Philosophy
            </h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                Express+: Left-scale typography with core beliefs as the foundation.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I believe in building things that matter. Not just software—but systems that empower, platforms that connect, and businesses that create value.
              </p>
            </motion.div>

            <motion.div
              variants={{
                animate: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {beliefs.map((belief, index) => (
                <motion.div
                  key={belief.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <span className="text-4xl flex-shrink-0">{belief.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                      {belief.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {belief.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-400 via-neutral-500 to-neutral-600 dark:from-neutral-600 dark:via-neutral-700 dark:to-neutral-800">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-700 dark:text-neutral-400 font-medium">
                  [Portrait Placeholder]
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-200/30 dark:bg-gold-900/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sage-200/30 dark:bg-sage-900/20 rounded-full blur-3xl" />
            </div>

            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full backdrop-blur-md bg-white/80 dark:bg-neutral-900/80 border border-gold-500/50 shadow-lg"
            >
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                Leading with Purpose
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
