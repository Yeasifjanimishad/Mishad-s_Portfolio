import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Check, ArrowRight, ShieldAlert, Car, ExternalLink, Info, Bot, Boxes } from 'lucide-react';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';
import { TextSegment } from '../types';
import { ProjectModal } from './ProjectModal';
import { projectsData, ProjectDetail } from '../data/projectsData';

export function FeaturesSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const headerSegments: TextSegment[] = [
    {
      text: 'Driven by faith in Allah and a passion for technology,',
      className: 'text-[var(--text-main)]',
    },
    {
      text: 'I build projects that blend purpose, innovation, and impact.',
      className: 'text-[var(--text-muted)]',
    },
  ];

  const gridRef = useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef, { once: true, margin: '-100px' });

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: (index: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const openProjectModal = (projectId: string) => {
    const proj = projectsData.find((p) => p.id === projectId);
    if (proj) setSelectedProject(proj);
  };

  return (
    <section
      id="features"
      className="min-h-screen bg-[var(--bg-page)] relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-8 overflow-hidden transition-colors duration-300"
    >
      {/* Background Noise Texture */}
      <div className="bg-noise absolute inset-0 opacity-[0.12] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <WordsPullUpMultiStyle
            segments={headerSegments}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-snug"
          />
        </div>

        {/* Project Card Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {/* Card 1 - Video Card */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={isGridInView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="rounded-2xl md:rounded-3xl overflow-hidden relative min-h-[360px] lg:min-h-0 flex flex-col justify-end p-6 md:p-8 group shadow-xl border border-[var(--border-subtle)]"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                type="video/mp4"
              />
            </video>
            {/* Gradient Overlay */}
            <div className="bg-gradient-to-t from-black/90 via-black/30 to-transparent absolute inset-0 pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[10px] text-primary uppercase tracking-widest font-mono mb-1 block">
                Take It Easy &
              </span>
              <p className="text-white text-xl font-medium tracking-tight">
                Trust the Process
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Elite-Mess-Management (01) */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={isGridInView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="bg-[var(--bg-card)] rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col justify-between min-h-[360px] lg:min-h-0 border border-[var(--border-subtle)] group hover:border-[var(--border-medium)] transition-all duration-300 shadow-xl"
          >
            <div>
              {/* Header Icon & Number */}
              <div className="flex justify-between items-start mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00b87c] flex items-center justify-center shadow-lg shadow-emerald-950/50 border border-emerald-400/20 group-hover:scale-105 transition-all duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  >
                    <path d="M12 2c0 3.5-3 5.5-3 8.5 0 2.5 1.8 4.5 3 4.5s3-2 3-4.5c0-3-3-5-3-8.5z" />
                    <path d="M5 20l14-6" />
                    <path d="M19 20l-14-6" />
                  </svg>
                </div>
                <span className="text-[var(--text-subtle)] font-mono text-[10px] sm:text-xs uppercase tracking-wider">01</span>
              </div>

              {/* Title */}
              <h3 className="text-[var(--text-main)] text-lg sm:text-xl font-medium tracking-tight mb-4">
                Elite-Mess-Management
              </h3>

              {/* Checklist */}
              <ul className="space-y-2.5">
                {[
                  'User authentication & role-based access',
                  'Meal planning with calorie tracking',
                  'Food inventory & expense management',
                  'Analytics dashboard and report export',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-muted)] leading-snug">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn More & Discover Links */}
            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
              <button
                onClick={() => openProjectModal('elite-mess')}
                className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-medium hover:gap-2 transition-all duration-300"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Details</span>
              </button>
              <a
                href="https://github.com/Yeasifjanimishad/Elite-Mess-Management/tree/main#-elite-mess-management-system"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-medium hover:gap-2.5 transition-all duration-300"
              >
                <span>GitHub</span>
                <ArrowRight className="w-3.5 h-3.5 rotate-[-45deg]" />
              </a>
            </div>
          </motion.div>

          {/* Card 3 - Lab-Monitor Pro (02) */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={isGridInView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="bg-[var(--bg-card)] rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col justify-between min-h-[360px] lg:min-h-0 border border-[var(--border-subtle)] group hover:border-[var(--border-medium)] transition-all duration-300 shadow-xl"
          >
            <div>
              {/* Header Icon & Number */}
              <div className="flex justify-between items-start mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6366F1] flex items-center justify-center shadow-lg shadow-purple-950/60 border border-purple-400/30 group-hover:scale-105 transition-all duration-300">
                  <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]" />
                </div>
                <span className="text-[var(--text-subtle)] font-mono text-[10px] sm:text-xs uppercase tracking-wider">02</span>
              </div>

              {/* Title */}
              <h3 className="text-[var(--text-main)] text-lg sm:text-xl font-medium tracking-tight mb-4">
                Lab-Monitor Pro
              </h3>

              {/* Checklist */}
              <ul className="space-y-2.5">
                {[
                  'Real-time multi-lab PC telemetry',
                  'One-click remote power controls',
                  'Interactive exam mode & screen locking',
                  'Automated assignment file collection',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-muted)] leading-snug">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn More Link */}
            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
              <button
                onClick={() => openProjectModal('lab-monitor')}
                className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-medium hover:gap-2 transition-all duration-300"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Details</span>
              </button>
              <a
                href="https://github.com/Yeasifjanimishad/LabMonitor#labmonitor-pro---centralized-university-lab-monitoring-system"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-medium hover:gap-2.5 transition-all duration-300"
              >
                <span>GitHub</span>
                <ArrowRight className="w-3.5 h-3.5 rotate-[-45deg]" />
              </a>
            </div>
          </motion.div>

          {/* Card 4 - Parkify (03) */}
          <motion.div
            custom={3}
            initial="hidden"
            animate={isGridInView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="bg-[var(--bg-card)] rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col justify-between min-h-[360px] lg:min-h-0 border border-[var(--border-subtle)] group hover:border-[var(--border-medium)] transition-all duration-300 shadow-xl"
          >
            <div>
              {/* Header Icon & Number */}
              <div className="flex justify-between items-start mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] bg-gradient-to-br from-[#FF4D4D] via-[#E63946] to-[#4A5568] flex items-center justify-center shadow-lg shadow-red-950/60 border border-red-400/30 group-hover:scale-105 transition-all duration-300">
                  <Car className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2]" />
                </div>
                <span className="text-[var(--text-subtle)] font-mono text-[10px] sm:text-xs uppercase tracking-wider">03</span>
              </div>

              {/* Title */}
              <h3 className="text-[var(--text-main)] text-lg sm:text-xl font-medium tracking-tight mb-4">
                Parkify
              </h3>

              {/* Checklist */}
              <ul className="space-y-2.5">
                {[
                  'Real-time slot availability tracker',
                  'QR code gate ticket generation',
                  'Automated hourly fee calculation',
                  'Peak-hour lot analytics & heatmaps',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-muted)] leading-snug">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn More Link */}
            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
              <button
                onClick={() => openProjectModal('parkify')}
                className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-medium hover:gap-2 transition-all duration-300"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Details</span>
              </button>
              <button
                onClick={() => openProjectModal('parkify')}
                className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-medium hover:gap-2.5 transition-all duration-300"
              >
                <span>Preview</span>
                <ArrowRight className="w-3.5 h-3.5 rotate-[-45deg]" />
              </button>
            </div>
          </motion.div>

          {/* Card 5 - Autonomous Obstacle Detection & Avoidance Robot (04) */}
          <motion.div
            custom={4}
            initial="hidden"
            animate={isGridInView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="bg-[var(--bg-card)] rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col justify-between min-h-[360px] lg:min-h-0 border border-[var(--border-subtle)] group hover:border-[var(--border-medium)] transition-all duration-300 shadow-xl"
          >
            <div>
              {/* Header Icon & Number */}
              <div className="flex justify-between items-start mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] bg-gradient-to-br from-[#3B82F6] via-[#1D4ED8] to-[#0F172A] flex items-center justify-center shadow-lg shadow-blue-950/60 border border-blue-400/30 group-hover:scale-105 transition-all duration-300">
                  <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2]" />
                </div>
                <span className="text-[var(--text-subtle)] font-mono text-[10px] sm:text-xs uppercase tracking-wider">04</span>
              </div>

              {/* Title */}
              <h3 className="text-[var(--text-main)] text-lg sm:text-xl font-medium tracking-tight mb-4">
                Obstacle Avoidance Robot
              </h3>

              {/* Checklist */}
              <ul className="space-y-2.5">
                {[
                  'Automated obstacle detection via ultrasonic sensors',
                  'Collision avoidance with real-time steering logic',
                  'Independent navigation in complex environments',
                  'Microcontroller & motor driver real-time control',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-muted)] leading-snug">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn More Link */}
            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
              <button
                onClick={() => openProjectModal('obstacle-robot')}
                className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-medium hover:gap-2 transition-all duration-300"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Details</span>
              </button>
              <button
                onClick={() => openProjectModal('obstacle-robot')}
                className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-medium hover:gap-2.5 transition-all duration-300"
              >
                <span>View Specs</span>
                <ArrowRight className="w-3.5 h-3.5 rotate-[-45deg]" />
              </button>
            </div>
          </motion.div>

          {/* Card 6 - Personal Inventory Manager (C Language) (05) */}
          <motion.div
            custom={5}
            initial="hidden"
            animate={isGridInView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="bg-[var(--bg-card)] rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col justify-between min-h-[360px] lg:min-h-0 border border-[var(--border-subtle)] group hover:border-[var(--border-medium)] transition-all duration-300 shadow-xl"
          >
            <div>
              {/* Header Icon & Number */}
              <div className="flex justify-between items-start mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] bg-gradient-to-br from-[#F59E0B] via-[#D97706] to-[#78350F] flex items-center justify-center shadow-lg shadow-amber-950/60 border border-amber-400/30 group-hover:scale-105 transition-all duration-300">
                  <Boxes className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2]" />
                </div>
                <span className="text-[var(--text-subtle)] font-mono text-[10px] sm:text-xs uppercase tracking-wider">05</span>
              </div>

              {/* Title */}
              <h3 className="text-[var(--text-main)] text-lg sm:text-xl font-medium tracking-tight mb-4">
                Personal Inventory Manager
              </h3>

              {/* Checklist */}
              <ul className="space-y-2.5">
                {[
                  'Item management using Array, Stack, Queue & BST',
                  'Search items by name & sort by price',
                  'Undo last added item via Stack LIFO',
                  'Alphabetical traversal using Binary Search Tree',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-muted)] leading-snug">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn More Link */}
            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
              <button
                onClick={() => openProjectModal('c-inventory-manager')}
                className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-medium hover:gap-2 transition-all duration-300"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Details</span>
              </button>
              <button
                onClick={() => openProjectModal('c-inventory-manager')}
                className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-medium hover:gap-2.5 transition-all duration-300"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 rotate-[-45deg]" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

