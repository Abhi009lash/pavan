import React from 'react';

export const AboutHero: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto pt-20 sm:pt-28 pb-14 px-4 sm:px-12 lg:px-28 flex flex-col items-center text-center">
      {/* Eyebrow */}
      <span className="font-['Caveat'] text-2xl sm:text-3xl font-bold text-[#C95E0C] tracking-wide mb-4">
        The Method to My Magic
      </span>

      {/* Main Heading */}
      <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-['Anek_Bangla'] font-bold text-black leading-tight sm:leading-[1.18] tracking-tight">
        Transitioning from rigorous engineering to human-centered digital experiences.
      </h1>

      {/* Decorative Line */}
      <div className="w-28 h-1 bg-black rounded-full mt-8" />
    </section>
  );
};
