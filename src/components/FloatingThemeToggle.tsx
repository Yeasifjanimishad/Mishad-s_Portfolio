import { useState, useEffect } from 'react';
import { Sun, Moon, Volume2, VolumeX } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { getSoundEnabled, setSoundEnabled, playToggleSound } from '../utils/audio';

export function FloatingThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    setSoundOn(getSoundEnabled());
  }, []);

  const handleToggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    setSoundEnabled(nextState);
    if (nextState) {
      playToggleSound(true);
    }
  };

  const handleToggleTheme = () => {
    toggleTheme();
    playToggleSound(theme === 'dark');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      {/* Sound FX Toggle Button */}
      <button
        onClick={handleToggleSound}
        aria-label="Toggle UI Sound Effects"
        title={soundOn ? 'Mute Sound Effects' : 'Enable Sound Effects'}
        className="w-11 h-11 rounded-full bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border-medium)] text-[var(--text-main)] shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group"
      >
        {soundOn ? (
          <Volume2 className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-200" />
        ) : (
          <VolumeX className="w-4 h-4 text-[var(--text-subtle)] group-hover:scale-110 transition-transform duration-200" />
        )}
      </button>

      {/* Theme Toggle Button */}
      <button
        onClick={handleToggleTheme}
        aria-label="Toggle theme"
        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        className="w-11 h-11 rounded-full bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border-medium)] text-[var(--text-main)] shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group"
      >
        {theme === 'dark' ? (
          <Sun className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600 group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </button>
    </div>
  );
}
