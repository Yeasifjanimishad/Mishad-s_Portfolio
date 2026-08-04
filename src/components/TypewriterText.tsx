import { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

interface TypewriterTextProps {
  key?: string | number;
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorChar?: string;
  triggerOnce?: boolean;
}

export function TypewriterText({
  text,
  speed = 30,
  delay = 200,
  className = '',
  cursorChar = '|',
  triggerOnce = true,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: triggerOnce, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    setDisplayedText('');
    let currentIndex = 0;

    const delayTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [isInView, text, speed, delay]);

  return (
    <span ref={containerRef} className={className}>
      {displayedText}
      <span className="inline-block font-mono ml-0.5 text-primary animate-cursor-blink font-bold">
        {cursorChar}
      </span>
    </span>
  );
}
