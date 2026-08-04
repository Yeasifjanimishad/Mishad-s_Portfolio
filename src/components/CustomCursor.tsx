import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse positions
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  const trailingX = useSpring(0, { stiffness: 180, damping: 20 });
  const trailingY = useSpring(0, { stiffness: 180, damping: 20 });

  useEffect(() => {
    // Check if device is touch primary
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      trailingX.set(e.clientX);
      trailingY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, textarea, select, label, video, [role="button"], .cursor-pointer, [data-hover]'
        );
        setIsHovered(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [mouseX, mouseY, trailingX, trailingY, isVisible]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Trailing Fluid Glowing Ring */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-[1px]"
        style={{
          x: trailingX,
          y: trailingY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 56 : isClicked ? 24 : 36,
          height: isHovered ? 56 : isClicked ? 24 : 36,
          opacity: isVisible ? (isHovered ? 0.85 : 0.6) : 0,
          scale: isClicked ? 0.85 : 1,
          backgroundColor: isHovered
            ? 'var(--primary-bg-accent)'
            : 'rgba(0, 0, 0, 0.02)',
          borderColor: isHovered
            ? 'var(--color-primary)'
            : 'var(--border-medium)',
          boxShadow: isHovered
            ? '0 0 20px var(--primary-bg-accent)'
            : 'none',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      />

      {/* Center Precision Dot */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 10 : isClicked ? 14 : 6,
          height: isHovered ? 10 : isClicked ? 14 : 6,
          opacity: isVisible ? 1 : 0,
          scale: isHovered ? 1.2 : isClicked ? 0.7 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
    </div>
  );
}
