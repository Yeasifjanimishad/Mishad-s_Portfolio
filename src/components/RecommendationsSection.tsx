import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight, UserCheck } from 'lucide-react';
import { recommendationsData } from '../data/recommendations';
import { playClickSound } from '../utils/audio';
import { TypewriterText } from './TypewriterText';

export function RecommendationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  // Auto slide every 6 seconds when not hovered
  useEffect(() => {
    if (isHovered || recommendationsData.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recommendationsData.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    playClickSound();
    setCurrentIndex((prev) => (prev + 1) % recommendationsData.length);
  };

  const prevSlide = () => {
    playClickSound();
    setCurrentIndex((prev) => (prev - 1 + recommendationsData.length) % recommendationsData.length);
  };

  const currentRec = recommendationsData[currentIndex];

  if (!currentRec) return null;

  return (
    <section
      id="recommendations"
      className="bg-transparent py-20 sm:py-28 px-4 sm:px-6 md:px-8 border-t border-[var(--border-subtle)] relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-3">
              <UserCheck className="w-4 h-4" />
              <span>Endorsements & Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--text-main)]">
              Recommendations & Words of Appreciation
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous recommendation"
              className="p-3 rounded-full bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border-subtle)] hover:border-primary text-[var(--text-muted)] hover:text-[var(--text-main)] shadow-lg transition-all duration-300 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-[var(--text-subtle)] px-2">
              0{currentIndex + 1} / 0{recommendationsData.length}
            </span>
            <button
              onClick={nextSlide}
              aria-label="Next recommendation"
              className="p-3 rounded-full bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border-subtle)] hover:border-primary text-[var(--text-muted)] hover:text-[var(--text-main)] shadow-lg transition-all duration-300 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Recommendation Carousel Card */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRec.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--bg-card)] backdrop-blur-2xl rounded-3xl p-6 sm:p-10 md:p-12 border border-[var(--border-subtle)] shadow-2xl relative overflow-hidden group"
            >
              {/* Background Quote Watermark */}
              <Quote className="absolute top-6 right-6 sm:top-8 sm:right-10 w-20 h-20 sm:w-28 sm:w-28 text-primary/10 pointer-events-none" />

              <div className="relative z-10 flex flex-col justify-between gap-8 min-h-[220px]">
                {/* Rating Stars & Relationship Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: currentRec.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono text-primary bg-primary/10 border border-primary/20">
                    {currentRec.relationship}
                  </span>
                </div>

                {/* Recommendation Quote Body */}
                <blockquote className="text-base sm:text-lg md:text-xl text-[var(--text-main)] font-normal leading-relaxed italic pr-4 sm:pr-8 font-mono">
                  "<TypewriterText key={currentRec.id} text={currentRec.text} speed={20} delay={150} />"
                </blockquote>

                {/* Author Details & Tags */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[var(--border-subtle)]">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)]">
                      {currentRec.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] font-mono">
                      {currentRec.role} • <span className="text-primary">{currentRec.organization}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {currentRec.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-[var(--text-muted)] bg-[var(--bg-inner)] border border-[var(--border-subtle)]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Selector Pills */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {recommendationsData.map((rec, idx) => (
            <button
              key={rec.id}
              onClick={() => {
                playClickSound();
                setCurrentIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-primary shadow-[0_0_10px_var(--color-primary)]'
                  : 'w-2.5 bg-[var(--border-medium)] hover:bg-[var(--text-subtle)]'
              }`}
              aria-label={`Go to recommendation ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
