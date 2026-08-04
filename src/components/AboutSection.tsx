import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';
import { TypewriterText } from './TypewriterText';
import { TextSegment } from '../types';
import profilePic from '../assets/images/FB_IMG_1784875165869.jpg.jpeg';

export function AboutSection() {
 
  const aboutHeadingSegments: TextSegment[] = [
    {
      text: 'I am Md. Yeasif Jani Mishad,',
      className: 'font-normal',
    },
    {
      text: 'a software engineering student.',
      className: 'italic font-serif text-primary',
    },
    {
      text: 'Building innovative web and AI solutions through vibe coding, data analysis, and technical leadership.',
      className: 'font-normal',
    },
  ];

  const bodyText =
    'Currently pursuing a B.Sc. in Software Engineering at Daffodil International University while gaining hands-on experience through an internship. Passionate about building impactful projects, solving real-world problems with technology, exploring emerging innovations, and contributing to research-driven solutions.';

  return (
    <section id="about" className="bg-transparent py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-8 transition-colors duration-300 relative">
      <div className="max-w-6xl mx-auto bg-[var(--bg-card)] backdrop-blur-2xl rounded-3xl md:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 border border-[var(--border-subtle)] relative overflow-hidden shadow-2xl">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-radial from-white/[0.03] to-transparent pointer-events-none" />

        {/* Small top label */}
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-8 block font-medium text-center lg:text-left font-mono">
          Software Engineering & Web Programming
        </span>

        {/* Content Layout: Photo on Left/Side & Text on Right/Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Profile Photo Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-[320px] lg:max-w-none aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden border border-[var(--border-medium)] shadow-2xl bg-[var(--bg-inner)]">
              <img
                src={profilePic}
                alt="Md. Yeasif Jani Mishad"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 text-left">
            {/* Main Heading with MultiStyle Pull-Up */}
            <div>
              <WordsPullUpMultiStyle
                segments={aboutHeadingSegments}
                containerClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-[var(--text-main)] tracking-tight font-medium"
              />
            </div>

            {/* Typewriter animated body paragraph */}
            <p className="text-[var(--text-sub)] text-xs sm:text-sm md:text-base mt-6 sm:mt-8 leading-relaxed font-normal font-mono">
              <TypewriterText text={bodyText} speed={15} delay={400} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


