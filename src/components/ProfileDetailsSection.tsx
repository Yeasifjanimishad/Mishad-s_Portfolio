import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Languages, Heart, Check } from 'lucide-react';
import { profileData } from '../data/profile';

export function ProfileDetailsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="profile-details"
      className="bg-transparent py-16 sm:py-20 px-4 sm:px-6 md:px-8 border-t border-[var(--border-subtle)] relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Languages Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[var(--bg-card)] backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] hover:border-indigo-500/50 shadow-xl hover:shadow-indigo-500/15 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
          >
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-indigo-500/20 via-blue-500/10 to-transparent rounded-full blur-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-2.5 text-indigo-700 dark:text-indigo-400 font-mono text-xs uppercase tracking-widest mb-6 font-semibold">
                <div className="p-2.5 rounded-xl bg-indigo-100/80 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 shadow-sm">
                  <Languages className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <span>Languages Proficiency</span>
              </div>

              <div className="space-y-3">
                {profileData.languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3.5 rounded-2xl bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] hover:border-indigo-500/40 transition-all duration-200 shadow-sm"
                  >
                    <span className="text-sm font-medium text-[var(--text-main)] flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                      {lang.language}
                    </span>
                    <span className="text-xs font-mono text-indigo-700 dark:text-indigo-300 bg-indigo-100/80 dark:bg-indigo-500/15 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/30 font-semibold">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hobbies & Personal Interests Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[var(--bg-card)] backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] hover:border-rose-500/50 shadow-xl hover:shadow-rose-500/15 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
          >
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-rose-500/20 via-pink-500/10 to-transparent rounded-full blur-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-2.5 text-rose-700 dark:text-rose-400 font-mono text-xs uppercase tracking-widest mb-6 font-semibold">
                <div className="p-2.5 rounded-xl bg-rose-100/80 dark:bg-rose-500/15 border border-rose-200 dark:border-rose-500/30 shadow-sm">
                  <Heart className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                </div>
                <span>Personal Interests & Activities</span>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-6 leading-relaxed">
                Activities that foster critical thinking, teamwork, creativity, and balanced personal growth outside software engineering.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {profileData.hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="px-4 py-2 rounded-2xl bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-main)] font-mono flex items-center gap-2 hover:border-rose-500/40 hover:bg-rose-100/80 dark:hover:bg-rose-500/15 transition-all duration-200 shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-rose-500 shadow-sm" />
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

