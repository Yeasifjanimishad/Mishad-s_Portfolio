import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delayOffset?: number;
}

export function WordsPullUp({
  text,
  className = '',
  showAsterisk = false,
  delayOffset = 0,
}: WordsPullUpProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  const words = text.split(' ');

  return (
    <div ref={containerRef} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1;
        const renderAsterisk = isLastWord && showAsterisk;

        return (
          <motion.span
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: delayOffset + index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block relative mr-[0.2em] last:mr-0"
          >
            {word}
            {renderAsterisk && (
              <sup className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] font-normal pointer-events-none select-none text-primary">
                *
              </sup>
            )}
          </motion.span>
        );
      })}
    </div>
  );
}
