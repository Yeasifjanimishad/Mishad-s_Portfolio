import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GraduationCap, Award, ExternalLink, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { profileData } from '../data/profile';

export function EducationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="education"
      className="bg-transparent py-20 sm:py-28 px-4 sm:px-6 md:px-8 border-t border-[var(--border-subtle)] relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-3 block font-mono">
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[var(--text-main)] font-medium tracking-tight">
            Education & Academic Honors
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base mt-2 max-w-xl">
            A consistent record of academic excellence with GPA 5.00 achievements and ongoing Software Engineering studies.
          </p>
        </div>

        {/* Education & Awards Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Timeline - Education List */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-medium text-[var(--text-main)] flex items-center gap-2 mb-4 font-mono">
              <GraduationCap className="w-5 h-5 text-primary" />
              Degrees & Certifications
            </h3>

            {profileData.education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[var(--bg-card)] backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-[var(--border-subtle)] hover:border-emerald-500/50 transition-all duration-300 relative group shadow-xl hover:shadow-emerald-500/15 hover:-translate-y-1 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -top-20 -right-20 w-44 h-44 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent rounded-full blur-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h4 className="text-base sm:text-lg font-medium text-[var(--text-main)] transition-colors">
                      {edu.degree}
                    </h4>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/30 shrink-0 w-fit font-semibold shadow-sm">
                      <Calendar className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[var(--text-muted)] font-mono mb-4">
                    <span className="text-[var(--text-main)] font-semibold">{edu.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[var(--text-subtle)]">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
                    <div className="flex items-center gap-3">
                      {edu.grade && (
                        <span className="inline-flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300 font-semibold bg-emerald-100/80 dark:bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/35 shadow-sm">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          {edu.grade}
                        </span>
                      )}
                      {edu.fieldOfStudy && <span className="text-[var(--text-muted)] font-mono">{edu.fieldOfStudy}</span>}
                    </div>

                    {edu.url && (
                      <a
                        href={edu.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 hover:underline transition-colors font-mono ml-auto font-medium"
                      >
                        <span>Institution Link</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Honors & Achievements Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-medium text-[var(--text-main)] flex items-center gap-2 mb-4 font-mono">
              <Award className="w-5 h-5 text-primary" />
              Honors & Extra-Curricular Awards
            </h3>

            <div className="bg-[var(--bg-card)] backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] hover:border-amber-500/50 space-y-4 shadow-xl relative overflow-hidden group transition-all duration-300 hover:shadow-amber-500/15">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-400 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent rounded-full blur-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 space-y-4">
                {profileData.awards.map((award, aIdx) => (
                  <motion.div
                    key={award.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + aIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="p-4 rounded-2xl bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] hover:border-amber-500/40 transition-all duration-200 flex items-start gap-3.5 shadow-sm"
                  >
                    <div className="p-2.5 rounded-xl bg-amber-100/80 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30 shrink-0 mt-0.5 shadow-sm">
                      <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-main)]">{award.title}</h4>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5 font-mono">{award.institution}</p>
                      <span className="text-[10px] text-amber-800 dark:text-amber-300 font-mono mt-1 inline-block bg-amber-100/80 dark:bg-amber-500/15 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-500/30 font-semibold">{award.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
