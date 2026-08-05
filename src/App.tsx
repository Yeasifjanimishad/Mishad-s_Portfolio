import { ThemeProvider } from './context/ThemeContext';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ProfileDetailsSection } from './components/ProfileDetailsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { RecommendationsSection } from './components/RecommendationsSection';
import { Footer } from './components/Footer';
import { FloatingThemeToggle } from './components/FloatingThemeToggle';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { GlobalAudioListener } from './components/GlobalAudioListener';

export default function App() {
  return (
    <ThemeProvider>
      <GlobalAudioListener />
      <div className="relative min-h-screen text-[var(--text-main)] selection:bg-[#DEDBC8] selection:text-black font-sans antialiased transition-colors duration-300">
        {/* Scroll Progress Bar & Floating Top Button */}
        <ScrollProgress />

        {/* Custom Interactive Smooth Spring Cursor */}
        <CustomCursor />

        {/* Fixed Background Video for Glassmorphic Skin */}
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 filter blur-[4px] opacity-70 dark:opacity-100 brightness-[0.6] dark:brightness-[0.3] transition-all duration-300"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
              type="video/mp4"
            />
          </video>
          <div className="noise-overlay absolute inset-0 opacity-[0.25] mix-blend-overlay" />
          <div className="absolute inset-0 bg-[#F1F5F9]/88 dark:bg-black/60 backdrop-blur-[2px] transition-colors duration-300" />
        </div>

        {/* SECTION 1: HERO */}
        <HeroSection />

        {/* SECTION 2: ABOUT */}
        <AboutSection />

        {/* SECTION 3: EXPERIENCE */}
        <ExperienceSection />

        {/* SECTION 4: SKILLS */}
        <SkillsSection />

        {/* SECTION 5: EDUCATION & AWARDS */}
        <EducationSection />

        {/* SECTION 6: RECOMMENDATION & PROFILE DETAILS */}
        <ProfileDetailsSection />

        {/* SECTION 7: FEATURES & WORKFLOWS */}
        <FeaturesSection />

        {/* SECTION 8: RECOMMENDATIONS & ENDORSEMENTS */}
        <RecommendationsSection />

        {/* FOOTER & CONTACT */}
        <Footer />

        {/* FLOATING THEME TOGGLE & SOUND TOGGLE */}
        <FloatingThemeToggle />
      </div>
    </ThemeProvider>
  );
}
