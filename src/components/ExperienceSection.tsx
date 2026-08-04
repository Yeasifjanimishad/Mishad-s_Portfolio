import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      className="bg-transparent py-20 sm:py-28 px-4 sm:px-6 md:px-8 border-t border-[var(--border-subtle)] relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-3 block font-mono">
            Track Record & Impact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[var(--text-main)] font-medium tracking-tight">
            Work Experience & Leadership
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base mt-2 max-w-xl">
            Demonstrated capabilities across software delivery, athletic coordination, and community guidance.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profileData.experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--bg-card)] backdrop-blur-xl hover:bg-[var(--bg-card-hover)] rounded-3xl p-6 sm:p-8 border border-[var(--border-subtle)] hover:border-[var(--border-medium)] transition-all duration-300 flex flex-col justify-between shadow-2xl group"
            >
              <div>
                {/* Header Icon & Period */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-[var(--bg-card-alt)] text-primary border border-[var(--border-subtle)] group-hover:scale-105 transition-transform duration-300">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[var(--text-muted)] bg-[var(--bg-inner)] px-3 py-1 rounded-full border border-[var(--border-subtle)]">
                    <Calendar className="w-3 h-3 text-primary" />
                    {exp.period}
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="text-lg sm:text-xl font-medium text-[var(--text-main)] tracking-tight transition-colors">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-primary font-mono mt-1 mb-4">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[var(--text-muted)]">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>

                {/* Bullet Highlights */}
                <ul className="space-y-2.5 pt-2 border-t border-[var(--border-subtle)]">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
