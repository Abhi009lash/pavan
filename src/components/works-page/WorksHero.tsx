import React from 'react';
import { MapPin } from 'lucide-react';

export const WorksHero: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto pt-16 sm:pt-24 pb-12 px-4 sm:px-12 lg:px-28">
      <div className="flex flex-col items-start gap-6">
        {/* Eyebrow */}
        <span className="font-['Caveat'] text-2xl sm:text-3xl font-bold text-[#C95E0C] tracking-wide">
          Selected Portfolio
        </span>

        {/* Hero Headline */}
        <h1 className="max-w-5xl text-4xl sm:text-5xl lg:text-6xl font-['Anek_Bangla'] font-bold text-[#1D1D1D] leading-tight sm:leading-[1.18] tracking-tight">
          Eight projects that show how structure, storytelling, and playful systems come together.
        </h1>

        {/* Hero Description */}
        <p className="max-w-5xl font-['Roboto'] text-lg sm:text-xl text-[#3F3F3F] leading-relaxed">
          This page collects the established portfolio entries plus four new additions, each presented with a clear label, a neutral description, and a discover-style CTA that matches the playful editorial language of the site.
        </p>

        {/* Meta Row: Chips & Location Badge */}
        <div className="w-full flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-100">
          {/* Filter / Meta Chips */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2 bg-[#F9C949] text-black font-['Jost'] font-semibold text-sm rounded-full border-2 border-black shadow-xs">
              8 projects
            </div>
            <div className="px-4 py-2 bg-[#7EE9B9] text-black font-['Jost'] font-semibold text-sm rounded-full border-2 border-black shadow-xs">
              Editorial portfolio
            </div>
            <div className="px-4 py-2 bg-white text-black font-['Jost'] font-semibold text-sm rounded-full border-2 border-black shadow-xs">
              Playful systems
            </div>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-[#7EE9B9] text-black px-4 py-2 rounded-md font-['Jost'] font-semibold text-sm shadow-xs">
            <MapPin className="w-4 h-4 text-black" />
            <span>Based in Andhra Pradesh, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};
