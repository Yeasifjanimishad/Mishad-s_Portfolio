import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { ProjectDetail } from '../data/projectsData';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[var(--bg-card)] backdrop-blur-2xl rounded-3xl border border-[var(--border-medium)] p-6 sm:p-8 md:p-10 shadow-2xl z-10 text-[var(--text-main)] transition-colors duration-300 my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2.5 rounded-full bg-[var(--bg-card-alt)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-all duration-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Pill & Status Badge */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4 pr-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-primary bg-primary/10 border border-primary/20">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              {project.status}
            </span>
          </div>

          {/* Project Title & Tagline */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-main)] mb-2">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-primary font-mono mb-6 leading-relaxed">
            {project.tagline}
          </p>

          {/* Detailed Description */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-inner)] border border-[var(--border-subtle)] mb-6 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            {project.description}
          </div>

          {/* Key Features Section */}
          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-widest font-mono text-[var(--text-subtle)] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Core Architecture & Functionalities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] flex flex-col justify-between"
                >
                  <h5 className="text-xs font-semibold text-[var(--text-main)] mb-1">
                    {feat.title}
                  </h5>
                  <p className="text-[11px] text-[var(--text-muted)] leading-normal">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Bullet Highlights */}
          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-widest font-mono text-[var(--text-subtle)] mb-3">
              Technical Achievements
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-muted)]">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-widest font-mono text-[var(--text-subtle)] mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl bg-[var(--bg-badge)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-main)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-black font-medium text-xs sm:text-sm hover:opacity-90 transition-all duration-200 shadow-md"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[var(--bg-card-alt)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] font-mono transition-all duration-200"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
