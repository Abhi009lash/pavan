import React, { useState } from 'react';
import { SkeletonLoader } from '../common/SkeletonLoader';
import { ArrowLeft } from 'lucide-react';

interface AxioraHeroProps {
  onBack: () => void;
}

export const AxioraHero: React.FC<AxioraHeroProps> = ({ onBack }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="w-full max-w-[1440px] mx-auto pt-10 pb-16 px-4 sm:px-12 lg:px-28">
      {/* Back button */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-['Jost'] font-semibold text-neutral-600 hover:text-black hover:bg-neutral-100 px-4 py-2 rounded-full transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </button>
      </div>

      {/* Header Block */}
      <div className="flex flex-col items-center text-center space-y-4 max-w-4xl mx-auto">
        <span className="font-['Caveat'] text-2xl sm:text-3xl font-bold text-[#C95E0C] tracking-wide">
          Featured Case Study
        </span>

        <h1 className="font-['Aleo'] font-bold text-4xl sm:text-6xl lg:text-7xl text-[#1D1D1D] tracking-tight">
          Axiora Pulse
        </h1>

        <p className="font-['Roboto'] text-lg sm:text-2xl text-[#3F3F3F] leading-relaxed max-w-3xl">
          An AI-powered business validation platform that helps entrepreneurs evaluate ideas, understand market opportunities, and gather customer insights.
        </p>
      </div>

      {/* Media Canvas Container */}
      <div className="relative mt-12 w-full max-w-[1216px] mx-auto pt-10">
        <div className="relative w-full aspect-[1216/781] rounded-[24px] overflow-hidden shadow-[0px_12px_32px_rgba(0,0,0,0.12)] border border-neutral-200 bg-neutral-900">
          {!imageLoaded && (
            <SkeletonLoader className="absolute inset-0 w-full h-full" />
          )}
          <img
            src="/assets/case-study/axiora_hero_canvas.png"
            alt="Axiora Pulse Platform Showcase Canvas"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>
    </section>
  );
};
