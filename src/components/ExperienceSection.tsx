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
          {profileData.experience.map((exp, idx) => {
            const accents = [
              {
                gradient: 'from-amber-500/25 via-orange-500/10 to-transparent',
                border: 'group-hover:border-amber-500/50',
                glow: 'group-hover:shadow-amber-500/15',
                badge: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30',
                topLine: 'from-amber-500 via-orange-400 to-yellow-400',
                iconColor: 'text-amber-500',
              },
              {
                gradient: 'from-blue-500/25 via-indigo-500/10 to-transparent',
                border: 'group-hover:border-blue-500/50',
                glow: 'group-hover:shadow-blue-500/15',
                badge: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30',
                topLine: 'from-blue-500 via-indigo-400 to-cyan-400',
                iconColor: 'text-blue-500',
              },
              {
                gradient: 'from-emerald-500/25 via-teal-500/10 to-transparent',
                border: 'group-hover:border-emerald-500/50',
                glow: 'group-hover:shadow-emerald-500/15',
                badge: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
                topLine: 'from-emerald-500 via-teal-400 to-green-400',
                iconColor: 'text-emerald-500',
              },
            ][idx % 3];

            return (
              <motion.div
                key={exp.id}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`bg-[var(--bg-card)] backdrop-blur-xl hover:bg-[var(--bg-card-hover)] rounded-3xl p-6 sm:p-8 border border-[var(--border-subtle)] ${accents.border} transition-all duration-300 flex flex-col justify-between shadow-xl ${accents.glow} group hover:-translate-y-1.5 relative overflow-hidden`}
              >
                {/* Vibrant Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${accents.topLine} opacity-90 group-hover:opacity-100 transition-opacity`} />
                {/* Ambient Soft Color Glow */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${accents.gradient} rounded-full blur-2xl pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Header Icon & Period */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl ${accents.badge} border group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <Briefcase className={`w-5 h-5 ${accents.iconColor}`} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[var(--text-muted)] bg-[var(--bg-inner)] px-3 py-1 rounded-full border border-[var(--border-subtle)] shadow-sm">
                      <Calendar className={`w-3 h-3 ${accents.iconColor}`} />
                      {exp.period}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-lg sm:text-xl font-medium text-[var(--text-main)] tracking-tight transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-mono mt-1.5 mb-5">
                    <span className={`font-semibold ${accents.iconColor}`}>{exp.company}</span>
                    <span className="text-[var(--text-muted)]">•</span>
                    <span className="flex items-center gap-1 text-[var(--text-muted)]">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-3 pt-3 border-t border-[var(--border-subtle)]">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                        <CheckCircle2 className={`w-4 h-4 ${accents.iconColor} shrink-0 mt-0.5`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
