import { Mail, Phone } from 'lucide-react';
import { SocialLinks } from './SocialLinks';
import { ContactForm } from './ContactForm';

export function Footer() {
  return (
    <footer id="footer" className="bg-transparent text-[var(--text-muted)] py-16 px-4 sm:px-6 md:px-8 border-t border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Contact Form & Quick Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6 bg-[var(--bg-card)] backdrop-blur-2xl p-8 rounded-3xl border border-[var(--border-subtle)] shadow-2xl h-full justify-between">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-primary font-mono block mb-2">
                Contact & Opportunities
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl text-[var(--text-main)] font-medium tracking-tight mb-3">
                Let's connect & build modern web applications together.
              </h3>
              <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed mb-6">
                Available for software engineering opportunities, web development projects, and technical collaborations.
              </p>

              {/* Direct Contact Links */}
              <div className="flex flex-col gap-3 text-xs sm:text-sm font-mono text-[var(--text-main)] mb-8">
                <a
                  href="mailto:mdyeasifjanimishad@gmail.com"
                  className="inline-flex items-center gap-3 p-3.5 rounded-2xl bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span className="truncate">mdyeasifjanimishad@gmail.com</span>
                </a>
                <a
                  href="tel:+8801767655821"
                  className="inline-flex items-center gap-3 p-3.5 rounded-2xl bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>(+880) 1767655821</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-[var(--border-subtle)]">
              <span className="text-xs text-[var(--text-subtle)] font-mono uppercase tracking-wider block mb-3">
                Social Profiles
              </span>
              <SocialLinks variant="pills" />
            </div>
          </div>

          {/* Right: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs sm:text-sm pt-8 border-t border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[var(--text-main)] tracking-wider text-base font-mono">MISHAD</span>
            <span className="text-[var(--border-medium)]">|</span>
            <span className="text-[var(--text-muted)]">Software Engineer</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[var(--text-muted)] font-mono text-xs">
            <a href="#hero" className="hover:text-primary transition-colors">Top</a>
            <span>•</span>
            <a href="#about" className="hover:text-primary transition-colors">Story</a>
            <span>•</span>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <span>•</span>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <span>•</span>
            <a href="#recommendations" className="hover:text-primary transition-colors">Recommendations</a>
            <span>•</span>
            <a href="#footer" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="text-[var(--text-subtle)] text-xs font-mono">
            © {new Date().getFullYear()} Md. Yeasif Jani Mishad. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
