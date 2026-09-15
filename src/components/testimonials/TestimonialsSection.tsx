import React from 'react';
import { TESTIMONIAL } from '../../constants/portfolioData';
import { PillBadge } from '../hero/PillBadge';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-24 px-4 sm:px-12 lg:px-20">
      {/* Script Title */}
      <h3 className="font-['Caveat'] text-3xl sm:text-4xl text-black font-semibold tracking-wide mb-10">
        Great Words
      </h3>

      {/* Quote Block */}
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-8">
        <p className="font-['Aleo'] text-xl sm:text-2xl text-neutral-900 leading-relaxed sm:leading-loose">
          &ldquo;{TESTIMONIAL.quote}&rdquo;
        </p>

        {/* Attribution Badge with Curved Doodle Arrow */}
        <div className="flex items-center gap-3 self-end mr-4 sm:mr-12">
          <svg
            className="w-10 h-8 text-neutral-700"
            viewBox="0 0 50 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 10 Q 25 30, 40 10" strokeLinecap="round" />
            <path d="M35 5 L 40 10 L 30 15" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <PillBadge
            text={TESTIMONIAL.company}
            bgColor="#F9C949"
            isTape
            rotation="rotate-2"
          />
        </div>
      </div>
    </section>
  );
};
