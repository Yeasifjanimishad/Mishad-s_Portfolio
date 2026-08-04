import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface AnimatedLetterProps {
  key?: number | string;
  char: string;
  index: number;
  totalChars: number;
  progress: MotionValue<number>;
}

export function AnimatedLetter({
  char,
  index,
  totalChars,
  progress,
}: AnimatedLetterProps) {
  const charProgress = index / totalChars;
  const startRange = Math.max(0, charProgress - 0.1);
  const endRange = Math.min(1, charProgress + 0.05);

  const opacity = useTransform(progress, [startRange, endRange], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  );
}

interface ScrollTextRevealProps {
  text: string;
  className?: string;
}

export function ScrollTextReveal({
  text,
  className = '',
}: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');
  const totalChars = chars.length;

  return (
    <p ref={containerRef} className={className}>
      {chars.map((char, index) => (
        <AnimatedLetter
          key={index}
          char={char}
          index={index}
          totalChars={totalChars}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}
