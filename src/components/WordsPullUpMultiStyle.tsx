import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TextSegment } from '../types';

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  containerClassName?: string;
  delayOffset?: number;
}

export function WordsPullUpMultiStyle({
  segments,
  containerClassName = '',
  delayOffset = 0,
}: WordsPullUpMultiStyleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  // Flatten segments into an array of words with their corresponding className and global index
  const wordsList: { word: string; className?: string; index: number }[] = [];
  let globalIndex = 0;

  segments.forEach((segment) => {
    const words = segment.text.split(' ');
    words.forEach((word) => {
      if (word.length > 0) {
        wordsList.push({
          word,
          className: segment.className,
          index: globalIndex,
        });
        globalIndex++;
      }
    });
  });

  return (
    <div
      ref={containerRef}
      className={`inline-flex flex-wrap justify-center gap-x-[0.22em] gap-y-[0.1em] ${containerClassName}`}
    >
      {wordsList.map((item) => (
        <motion.span
          key={item.index}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: delayOffset + item.index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block ${item.className || ''}`}
        >
          {item.word}
        </motion.span>
      ))}
    </div>
  );
}
