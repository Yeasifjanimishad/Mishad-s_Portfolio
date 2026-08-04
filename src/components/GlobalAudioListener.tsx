import { useEffect } from 'react';
import { playClickSound } from '../utils/audio';

export function GlobalAudioListener() {
  useEffect(() => {
    const handleGlobalPointerDown = (e: PointerEvent) => {
      // Play a crisp click sound on any user interaction with the screen or buttons
      playClickSound();
    };

    window.addEventListener('pointerdown', handleGlobalPointerDown, { capture: true });
    return () => {
      window.removeEventListener('pointerdown', handleGlobalPointerDown, { capture: true });
    };
  }, []);

  return null;
}
