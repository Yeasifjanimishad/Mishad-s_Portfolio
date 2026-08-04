import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, MessageCircle, Mail } from 'lucide-react';

export interface SocialLink {
  name: string;
  url: string;
  icon: typeof Facebook;
  customSvg?: boolean;
  colorHover: string;
}

export const socialLinksData = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yeasif-jani-mishad/',
    icon: Linkedin,
    colorHover: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/yemtiasmishad',
    icon: Instagram,
    colorHover: 'hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/yemtiasmishad/',
    icon: Facebook,
    colorHover: 'hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/+8801767655821',
    icon: MessageCircle,
    colorHover: 'hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/10',
  },
];

interface SocialLinksProps {
  variant?: 'pills' | 'icons' | 'hero';
  className?: string;
}

export function SocialLinks({ variant = 'pills', className = '' }: SocialLinksProps) {
  if (variant === 'hero') {
    return (
      <div className={`flex items-center gap-3 flex-wrap ${className}`}>
        {socialLinksData.map((social) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${social.name} profile`}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[#E1E0CC]/80 transition-colors duration-300 ${social.colorHover}`}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          );
        })}
      </div>
    );
  }

  if (variant === 'icons') {
    return (
      <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
        {socialLinksData.map((social) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${social.name} profile`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 sm:p-2.5 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] text-[var(--text-main)] transition-all duration-300 shadow-md ${social.colorHover}`}
            >
              <Icon className="w-4 h-4 sm:w-4 sm:h-4" />
            </motion.a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 sm:gap-3 ${className}`}>
      {socialLinksData.map((social) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Connect on ${social.name}`}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] text-xs sm:text-sm font-medium text-[var(--text-main)] flex items-center gap-2 transition-all duration-300 shadow-md ${social.colorHover}`}
          >
            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{social.name}</span>
          </motion.a>
        );
      })}
    </div>
  );
}
