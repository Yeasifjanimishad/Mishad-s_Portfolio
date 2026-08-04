import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top glowing progress line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[10001] origin-left shadow-[0_0_10px_var(--color-primary)] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Floating Back To Top Button */}
      {showTopBtn && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-20 right-6 z-[9990] w-11 h-11 rounded-full bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border-medium)] text-primary hover:text-[var(--text-main)] shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </>
  );
}
