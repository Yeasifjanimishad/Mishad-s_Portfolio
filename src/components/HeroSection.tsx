import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { WordsPullUp } from './WordsPullUp';
import { Navbar } from './Navbar';
import { SocialLinks } from './SocialLinks';
import { TypewriterText } from './TypewriterText';

export function HeroSection() {
  const handleJoinLab = () => {
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen p-4 md:p-6 bg-[var(--bg-page)] flex flex-col transition-colors duration-300">
      {/* Outer inset rounded container */}
      <div className="relative h-full w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black/90">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Navbar */}
        <Navbar />

        {/* Hero Content (bottom-aligned) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 lg:p-16 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
            {/* Left 8 columns - Giant Heading */}
            <div className="lg:col-span-8 overflow-visible">
              <WordsPullUp
                text="Mishad"
                showAsterisk={false}
                className="text-[19vw] sm:text-[17vw] md:text-[15vw] lg:text-[13vw] xl:text-[12vw] 2xl:text-[11.5vw] font-medium leading-[0.88] tracking-[-0.06em] text-[#E1E0CC] select-none"
              />
            </div>

            {/* Right 4 columns - Description & CTA Button */}
            <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8 pb-2 sm:pb-3 lg:pb-4">
              {/* Description Paragraph */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-primary/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-md font-mono"
              >
                <TypewriterText
                  text="Full-Stack Web Developer, and intern passionate about building modern web applications and solving real-world challenges through technology."
                  speed={25}
                  delay={600}
                />
              </motion.p>

              {/* CTA Button "Join the lab" & Social Profiles */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-wrap items-center gap-4"
              >
                <button
                  onClick={handleJoinLab}
                  className="bg-primary hover:bg-[#eae7d8] text-black font-medium text-sm sm:text-base pl-5 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 rounded-full inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 group cursor-pointer shadow-lg"
                >
                  <span>Let's go...</span>
                  <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="text-[#E1E0CC] w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </button>

                {/* Hero Social Links Icons */}
                <SocialLinks variant="hero" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
