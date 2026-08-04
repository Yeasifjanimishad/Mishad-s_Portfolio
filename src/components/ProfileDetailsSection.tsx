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
            className="bg-[var(--bg-card)] backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-6">
                <Languages className="w-4 h-4" />
                <span>Languages Proficiency</span>
              </div>

              <div className="space-y-3">
                {profileData.languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3.5 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-subtle)]"
                  >
                    <span className="text-sm font-medium text-[var(--text-main)] flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                      {lang.language}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">{lang.level}</span>
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
            className="bg-[var(--bg-card)] backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-6">
                <Heart className="w-4 h-4" />
                <span>Personal Interests & Activities</span>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-6 leading-relaxed">
                Activities that foster critical thinking, teamwork, creativity, and balanced personal growth outside software engineering.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {profileData.hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="px-4 py-2 rounded-2xl bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-main)] font-mono flex items-center gap-2 hover:border-primary/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
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

