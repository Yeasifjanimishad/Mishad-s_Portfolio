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
          {profileData.skills.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--bg-card)] backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-[var(--border-subtle)] hover:border-[var(--border-medium)] transition-all duration-300 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-[var(--bg-card-alt)] border border-[var(--border-subtle)] shadow-md">
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
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--bg-badge)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] hover:border-primary/40 transition-all duration-200"
                    >
                      <Sparkles className="w-3 h-3 text-primary" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
