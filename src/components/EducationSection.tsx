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
                className="bg-[var(--bg-card)] backdrop-blur-xl p-6 rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--border-medium)] transition-all duration-300 relative group shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h4 className="text-base sm:text-lg font-medium text-[var(--text-main)] transition-colors">
                    {edu.degree}
                  </h4>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 shrink-0 w-fit">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[var(--text-muted)] font-mono mb-3">
                  <span className="text-[var(--text-main)] font-medium">{edu.institution}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[var(--text-subtle)]">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-3">
                    {edu.grade && (
                      <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-300 dark:border-emerald-800/30">
                        <CheckCircle className="w-3 h-3" />
                        {edu.grade}
                      </span>
                    )}
                    {edu.fieldOfStudy && <span className="text-[var(--text-muted)]">{edu.fieldOfStudy}</span>}
                  </div>

                  {edu.url && (
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline transition-colors font-mono ml-auto"
                    >
                      <span>Institution Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
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

            <div className="bg-[var(--bg-card)] backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] space-y-4 shadow-xl">
              {profileData.awards.map((award, aIdx) => (
                <motion.div
                  key={award.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + aIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-4 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] hover:border-[var(--border-medium)] transition-colors flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[var(--text-main)]">{award.title}</h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 font-mono">{award.institution}</p>
                    <span className="text-[10px] text-[var(--text-subtle)] font-mono mt-1 block">{award.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
