import React from 'react';
import { ABOUT_TEXT } from '../../constants/portfolioData';
import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onReadMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onReadMore }) => {
  return (
    <section id="about" className="w-full max-w-[1440px] mx-auto py-20 px-4 sm:px-12 lg:px-20">
      {/* Script Section Title */}
      <div className="flex items-center justify-between mb-12">
        <h3 className="font-['Caveat'] text-3xl sm:text-4xl text-black font-semibold tracking-wide">
          About me!
        </h3>
        {onReadMore && (
          <button
            onClick={onReadMore}
            className="inline-flex items-center gap-2 font-['Jost'] font-semibold text-sm text-black hover:text-[#C95E0C] hover:underline cursor-pointer"
          >
            <span>Read full story</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Taped Yellow Sticky Note Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] bg-[#F9C949] shadow-xl p-8 flex items-center justify-center transform rotate-1 hover:rotate-0 transition-transform">
            {/* Top-Left Semi-Transparent Silver Tape */}
            <div
              className="absolute -top-4 -left-6 w-28 h-8 bg-neutral-200/90 shadow-xs transform -rotate-30 pointer-events-none backdrop-blur-xs border border-white/40"
              style={{ clipPath: 'polygon(0% 10%, 95% 0%, 100% 90%, 5% 100%)' }}
            />

            {/* Top-Right Semi-Transparent Silver Tape */}
            <div
              className="absolute -top-4 -right-6 w-28 h-8 bg-neutral-200/90 shadow-xs transform rotate-35 pointer-events-none backdrop-blur-xs border border-white/40"
              style={{ clipPath: 'polygon(5% 0%, 100% 10%, 95% 100%, 0% 90%)' }}
            />

            <div className="text-center font-['Caveat'] text-neutral-800 text-2xl font-bold leading-relaxed select-none">
              Electronics Engineer
              <br />
              &rarr; Darkroom Craft
              <br />
              &rarr; SaaS UX Architect
            </div>
          </div>
        </div>

        {/* Right: Bio Statement */}
        <div className="lg:col-span-7 space-y-6">
          <p className="font-['Aleo'] text-2xl sm:text-3xl lg:text-[32px] text-[#3F3F3F] leading-snug sm:leading-relaxed font-normal">
            {ABOUT_TEXT}
          </p>

          {onReadMore && (
            <div>
              <button
                onClick={onReadMore}
                className="inline-flex items-center gap-2 bg-[#F9C949] hover:bg-[#ebd532] text-black px-6 py-2.5 rounded font-['Jost'] font-semibold text-sm transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
              >
                <span>Explore the full journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
