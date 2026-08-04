import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Code2, Palette, Users, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-primary" />;
      case 1:
        return <Palette className="w-5 h-5 text-primary" />;
      default:
        return <Users className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section
      id="skills"
      className="bg-transparent py-20 sm:py-28 px-4 sm:px-6 md:px-8 border-t border-[var(--border-subtle)] relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-3 block font-mono">
            Core Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[var(--text-main)] font-medium tracking-tight">
            Technical & Professional Skills
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base mt-2 max-w-xl">
            A balanced skill set spanning programming, creative software design, and team leadership.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profileData.skills.map((cat, idx) => {
            const theme = [
              {
                topLine: 'from-amber-500 via-orange-400 to-rose-500',
                glow: 'group-hover:shadow-amber-500/15',
                border: 'group-hover:border-amber-500/50',
                iconBg: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30',
                bgGlow: 'from-amber-500/20 via-orange-500/10 to-transparent',
                badgeHover: 'hover:border-amber-500/50 hover:bg-amber-500/15 hover:text-amber-700 dark:hover:text-amber-300',
                dotColor: 'text-amber-500',
              },
              {
                topLine: 'from-purple-500 via-violet-400 to-pink-500',
                glow: 'group-hover:shadow-purple-500/15',
                border: 'group-hover:border-purple-500/50',
                iconBg: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30',
                bgGlow: 'from-purple-500/20 via-pink-500/10 to-transparent',
                badgeHover: 'hover:border-purple-500/50 hover:bg-purple-500/15 hover:text-purple-700 dark:hover:text-purple-300',
                dotColor: 'text-purple-500',
              },
              {
                topLine: 'from-cyan-500 via-sky-400 to-emerald-500',
                glow: 'group-hover:shadow-cyan-500/15',
                border: 'group-hover:border-cyan-500/50',
                iconBg: 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
                bgGlow: 'from-cyan-500/20 via-sky-500/10 to-transparent',
                badgeHover: 'hover:border-cyan-500/50 hover:bg-cyan-500/15 hover:text-cyan-700 dark:hover:text-cyan-300',
                dotColor: 'text-cyan-500',
              },
            ][idx % 3];

            return (
              <motion.div
                key={cat.category}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`bg-[var(--bg-card)] backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-[var(--border-subtle)] ${theme.border} transition-all duration-300 shadow-xl ${theme.glow} flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden`}
              >
                {/* Top Accent Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${theme.topLine} opacity-90 group-hover:opacity-100 transition-opacity`} />
                {/* Background Ambient Radial Glow */}
                <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${theme.bgGlow} rounded-full blur-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className={`p-3.5 rounded-2xl ${theme.iconBg} border shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      {getCategoryIcon(idx)}
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium text-[var(--text-main)] tracking-tight">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--bg-badge)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-main)] ${theme.badgeHover} transition-all duration-200 shadow-sm`}
                      >
                        <Sparkles className={`w-3 h-3 ${theme.dotColor}`} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
