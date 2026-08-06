import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal } from 'lucide-react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Smooth progress timer over ~2.2 seconds
    const startTime = Date.now();
    const duration = 2100; // ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      // Ease out numerical increment
      setProgress((prev) => {
        if (rawProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.max(prev, rawProgress);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsFinished(true);
        if (onComplete) {
          onComplete();
        }
      }, 400); // Brief pause at 100% before opening curtain

      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  // Letters of Mishad'sfolio
  const brandTitle = "Mishad'sfolio";
  const titleChars = Array.from(brandTitle);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070709] text-white overflow-hidden select-none"
        >
          {/* Ambient Glowing Background Orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.25, 0.45, 0.25],
                x: [-20, 20, -20],
                y: [-30, 30, -30],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-600/35 via-purple-600/20 to-transparent rounded-full blur-[100px]"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3],
                x: [30, -30, 30],
                y: [20, -20, 20],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-gradient-to-tr from-amber-500/25 via-rose-500/20 to-transparent rounded-full blur-[120px]"
            />
            <div className="noise-overlay absolute inset-0 opacity-[0.22] mix-blend-overlay" />
          </div>

          {/* Center Brand Content */}
          <div className="relative z-10 flex flex-col items-center max-w-lg px-6 text-center">
            {/* Main Animated Title: Mishad'sfolio */}
            <div className="relative mb-6 overflow-hidden py-2 px-4 flex items-center justify-center">
              <div className="flex items-center justify-center text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
                {titleChars.map((char, index) => {
                  const isFolio = index >= 8; // 'folio' part
                  return (
                    <motion.span
                      key={index}
                      initial={{ y: 80, opacity: 0, rotateX: -90, filter: 'blur(8px)' }}
                      animate={{ y: 0, opacity: 1, rotateX: 0, filter: 'blur(0px)' }}
                      transition={{
                        duration: 0.7,
                        delay: 0.2 + index * 0.045,
                        ease: [0.215, 0.61, 0.355, 1],
                      }}
                      className={`inline-block transform-gpu ${
                        isFolio
                          ? 'font-serif italic font-normal text-amber-300/90 drop-shadow-[0_0_25px_rgba(251,191,36,0.35)]'
                          : 'bg-gradient-to-b from-white via-gray-100 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(255,255,255,0.15)]'
                      }`}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </div>

              {/* Glowing Accent Line underneath */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_15px_#f59e0b]"
              />
            </div>

            {/* Subtitle / Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xs sm:text-sm font-mono text-gray-300/80 max-w-xs mb-10 tracking-wide font-light"
            >
              Crafting digital products, interactive design & full-stack web solutions
            </motion.p>

            {/* Dynamic Progress Bar & Counter */}
            <div className="w-full max-w-xs flex flex-col items-center gap-3">
              <div className="w-full flex items-center justify-between text-xs font-mono text-gray-400 px-1">
                <span className="flex items-center gap-1.5 text-[11px] text-amber-300/90 font-medium">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>
                    {progress < 30
                      ? 'Loading core assets...'
                      : progress < 70
                      ? 'Compiling interfaces...'
                      : progress < 100
                      ? 'Finalizing experience...'
                      : 'Welcome'}
                  </span>
                </span>
                <span className="text-amber-400 font-bold tracking-wider">{progress}%</span>
              </div>

              {/* Track */}
              <div className="relative w-full h-1.5 rounded-full bg-white/10 overflow-hidden backdrop-blur-sm border border-white/5 p-[1px]">
                {/* Fill */}
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 via-purple-500 to-indigo-400 relative shadow-[0_0_12px_rgba(245,158,11,0.6)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                >
                  {/* Leading Light Glint */}
                  <div className="absolute right-0 top-0 bottom-0 w-3 bg-white blur-[2px] rounded-full animate-pulse" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
