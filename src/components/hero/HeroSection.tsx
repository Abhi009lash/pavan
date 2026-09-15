import React from 'react';
import { PillBadge } from './PillBadge';
import { ArrowDownRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative w-full max-w-[1440px] mx-auto pt-8 pb-20 px-4 sm:px-8 overflow-hidden">
      {/* Playful Floating Badges */}
      <div className="relative w-full max-w-5xl mx-auto min-h-[360px] sm:min-h-[420px] flex flex-col items-center justify-center">
        {/* Top Badges */}
        <div className="w-full flex items-center justify-between px-2 sm:px-8 mb-4">
          <PillBadge
            text="Made things"
            bgColor="#7EE9B9"
            rotation="-rotate-3"
            className="hover:scale-105 transition-transform cursor-default"
          />

          {/* "my Name is" handwriting badge */}
          <div className="flex flex-col items-center">
            <span className="font-['Caveat'] text-2xl sm:text-3xl text-neutral-800 -mb-2">
              my Name is
            </span>
            <svg
              className="w-6 h-8 text-neutral-800"
              viewBox="0 0 24 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v24m0 0l-5-5m5 5l5-5" />
            </svg>
          </div>

          <PillBadge
            text="Steal The Details"
            bgColor="#E9C77E"
            rotation="rotate-2"
            className="hover:scale-105 transition-transform cursor-default"
          />
        </div>

        {/* Central Blackletter Name Frame */}
        <div className="relative my-2 w-full max-w-[742px] border-[5px] border-[#C95E0C] bg-white p-4 sm:p-8 flex items-center justify-center shadow-lg transition-transform hover:scale-[1.01]">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-['UnifrakturMaguntia'] text-black tracking-normal select-none leading-none">
              Pavan Kumar
            </h1>
          </div>

          {/* Corner accents */}
          <div className="absolute -top-3 -left-3 w-5 h-5 bg-[#C95E0C]" />
          <div className="absolute -top-3 -right-3 w-5 h-5 bg-[#C95E0C]" />
          <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-[#C95E0C]" />
          <div className="absolute -bottom-3 -right-3 w-5 h-5 bg-[#C95E0C]" />
        </div>

        {/* Lower Tags with hand-drawn indicator arrows */}
        <div className="w-full flex items-center justify-between px-4 sm:px-12 mt-4">
          <div className="flex items-center gap-2">
            <PillBadge
              text="Product things"
              bgColor="#F9C949"
              isTape
              rotation="-rotate-2"
            />
            <svg
              className="w-12 h-8 text-neutral-700 hidden sm:block rotate-12"
              viewBox="0 0 50 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 25 Q 25 5, 45 20" strokeLinecap="round" />
              <path d="M40 10 L 45 20 L 35 25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-12 h-8 text-neutral-700 hidden sm:block -rotate-12"
              viewBox="0 0 50 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M45 25 Q 25 5, 5 20" strokeLinecap="round" />
              <path d="M15 10 L 5 20 L 15 25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <PillBadge
              text="Andhra Pradesh, India"
              bgColor="#7EE9B9"
              isTape
              rotation="rotate-3"
            />
          </div>
        </div>
      </div>

      {/* Main Value Proposition Headline */}
      <div className="mt-14 text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Anek_Bangla'] font-bold text-[#1D1D1D] leading-[1.1] tracking-tight">
          I Design software that
          <br />
          gets out of your way.
        </h2>

        {/* Connect With Me CTA Button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-3 bg-black text-white px-7 py-3.5 rounded-full hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-md font-['Jost'] font-medium text-base group"
        >
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center transform -rotate-90 group-hover:rotate-0 transition-transform">
            <ArrowDownRight className="w-4 h-4 text-black" />
          </div>
          <span>Connect with ME</span>
        </a>
      </div>
    </section>
  );
};
