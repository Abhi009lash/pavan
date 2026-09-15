import React from 'react';
import { MapPin } from 'lucide-react';

export const AxioraContext: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F5F7] border-y border-neutral-200 py-20 sm:py-28 px-4 sm:px-12 lg:px-28">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Platform & Role Metadata */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-3">
            <span className="font-['Jost'] font-bold text-xs sm:text-sm tracking-[2px] uppercase text-[#C95E0C] block">
              The Platform
            </span>
            <h2 className="font-['Aleo'] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1D] leading-tight">
              Untangling Ambiguity
            </h2>
          </div>

          <div className="space-y-6 pt-2">
            <div>
              <span className="font-['Jost'] font-bold text-xs uppercase tracking-wider text-[#C95E0C] block">
                Role
              </span>
              <p className="font-['Aleo'] font-semibold text-lg sm:text-xl text-[#1D1D1D] mt-1">
                Product Designer
              </p>
            </div>

            <div>
              <span className="font-['Jost'] font-bold text-xs uppercase tracking-wider text-[#C95E0C] block">
                Focus
              </span>
              <p className="font-['Aleo'] font-semibold text-lg sm:text-xl text-[#1D1D1D] mt-1">
                UX/UI Design
              </p>
            </div>

            <div>
              <span className="font-['Jost'] font-bold text-xs uppercase tracking-wider text-[#C95E0C] block">
                Objective
              </span>
              <p className="font-['Aleo'] font-semibold text-lg sm:text-xl text-[#1D1D1D] mt-1">
                Simplify business logic into a guided experience
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Problem, Solution & Hyderabad Badge */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <h3 className="font-['Aleo'] font-bold text-2xl sm:text-3xl text-[#1D1D1D]">
              The Problem
            </h3>
            <p className="font-['Roboto'] text-base sm:text-lg text-[#3F3F3F] leading-relaxed">
              New founders often struggle to systematically test their assumptions. Market research is distributed across scattered documentation, customer interview scripts are disorganized, and quantitative validation metrics are difficult to interpret without a business analyst background.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-['Aleo'] font-bold text-2xl sm:text-3xl text-[#1D1D1D]">
              The Guided Validation Approach
            </h3>
            <p className="font-['Roboto'] text-base sm:text-lg text-[#3F3F3F] leading-relaxed">
              Through a simplified, guided digital wizard, Axiora Pulse walks the entrepreneur step-by-step through business canvas mapping, audience identification, and automated feedback loops. AI works behind the scenes to synthesize raw text thoughts into structured opportunity briefs and risk assessments.
            </p>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#7EE9B9] text-black px-5 py-2.5 rounded-md font-['Jost'] font-semibold text-sm shadow-xs mt-4">
            <MapPin className="w-4 h-4 text-black" />
            <span>Designed &amp; developed with technical logic in Hyderabad, India.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
