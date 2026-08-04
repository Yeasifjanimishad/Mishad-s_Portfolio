import React, { useState, MouseEvent } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { playClickSound } from '../utils/audio';

const navItems = [
  { label: 'Story', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Workflows', href: '#features' },
  { label: 'Endorsements', href: '#recommendations' },
  { label: 'Contact', href: '#footer' },
];

export function Navbar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    playClickSound();
    setActiveItem(label);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-30 pointer-events-auto max-w-full px-0.5 sm:px-2">
      <div className="bg-[var(--bg-nav)] backdrop-blur-md rounded-b-md sm:rounded-b-2xl md:rounded-b-3xl px-1.5 py-0.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 flex items-center gap-1 sm:gap-3.5 md:gap-5 lg:gap-7 shadow-xl border-x border-b border-[var(--border-medium)] z-20 overflow-x-auto max-w-full scrollbar-none">
        {navItems.map((item) => {
          const isActive = activeItem === item.label;
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.label)}
              className={`text-[6.5px] min-[380px]:text-[7.5px] sm:text-[10px] md:text-xs font-medium uppercase tracking-tighter sm:tracking-widest transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                isActive ? 'text-[var(--text-main)] font-semibold' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
            >
              {item.label}
            </a>
          );
        })}

        {/* Dark / Light Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark and light mode"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className="ml-1 sm:ml-2 p-1 sm:p-1.5 rounded-full bg-[var(--bg-card-alt)] text-[var(--text-main)] border border-[var(--border-medium)] hover:border-[var(--color-primary)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center shrink-0 cursor-pointer shadow-sm"
        >
          {theme === 'dark' ? (
            <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-amber-300 animate-spin-slow" />
          ) : (
            <Moon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-indigo-700" />
          )}
        </button>
      </div>
    </nav>
  );
}

