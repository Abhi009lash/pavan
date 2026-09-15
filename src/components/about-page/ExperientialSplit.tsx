import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { SkeletonLoader } from '../common/SkeletonLoader';

export const ExperientialSplit: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="w-full max-w-[1440px] mx-auto py-12 px-4 sm:px-12 lg:px-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left: Media Collage with Darkroom Image and Floating Badges */}
        <div className="lg:col-span-6 relative flex justify-center">
          <div className="relative w-full max-w-[480px]">
            {/* Image Box */}
            <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[460px] rounded-[16px] overflow-hidden shadow-[0px_12px_24px_rgba(0,0,0,0.101961)] bg-neutral-900 border border-neutral-100">
              {!imageLoaded && (
                <SkeletonLoader className="absolute inset-0 w-full h-full" />
              )}
              <img
                src="/assets/about/darkroom_concept.png"
                alt="Aesthetic darkroom processing trays with monochrome print developing under warm ambient orange glow"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
              />
            </div>

            {/* Sticker 1: ⚡ Precision Logic */}
            <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#7EE9B9] text-black font-['Aleo'] font-bold text-xs sm:text-sm px-4 py-2 rounded-full border-4 border-white shadow-lg transform -rotate-6 select-none hover:scale-105 transition-transform">
              ⚡ Precision Logic
            </div>

            {/* Sticker 2: 🎞️ Analog Patience */}
            <div className="absolute top-16 -right-3 sm:-right-6 bg-[#F9C949] text-black font-['Aleo'] font-bold text-xs sm:text-sm px-4 py-2 rounded-full border-4 border-white shadow-lg transform rotate-4 select-none hover:scale-105 transition-transform">
              🎞️ Analog Patience
            </div>

            {/* Sticker 3: 🔬 Meticulous Detail */}
            <div className="absolute -bottom-4 right-4 sm:right-8 bg-white text-black font-['Aleo'] font-bold text-xs sm:text-sm px-4 py-2 rounded-full border-4 border-white shadow-lg transform -rotate-2 select-none hover:scale-105 transition-transform">
              🔬 Meticulous Detail
            </div>
          </div>
        </div>

        {/* Right: Detailed Story & Philosophy */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-left">
          <h2 className="font-['Aleo'] text-2xl sm:text-3xl font-semibold text-black leading-snug">
            &ldquo;I design software that respects the user&apos;s attention, built on absolute structural logic.&rdquo;
          </h2>

          <p className="font-['Roboto'] text-base sm:text-lg text-[#3F3F3F] leading-relaxed">
            My background isn&apos;t typical for a product designer. I spent my formative career years as an electronic engineer inside high-stakes software environments, untangling rigorous logic, and decoding raw product constraints.
          </p>

          <p className="font-['Roboto'] text-base sm:text-lg text-[#3F3F3F] leading-relaxed">
            In parallel, my passion for the meticulous patience of darkroom photography taught me how light, chemistry, and composition work in complete harmony. Designing software feels remarkably similar: it&apos;s about setting up the right structural parameters so that user intuition can flow naturally.
          </p>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#7EE9B9] text-black px-5 py-2.5 rounded-md font-['Jost'] font-semibold text-sm shadow-xs mt-2">
            <MapPin className="w-4 h-4 text-black" />
            <span>Based in Andhra Pradesh, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};
