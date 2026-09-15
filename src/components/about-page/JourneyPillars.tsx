import React from 'react';
import { Sparkles } from 'lucide-react';

interface PillarData {
  number: string;
  numberColor: string;
  title: string;
  description: string;
}

const PILLARS: PillarData[] = [
  {
    number: '01',
    numberColor: '#141414',
    title: 'Electronic Engineering',
    description:
      'Engineering taught me to embrace complexity, analyze constraints, and model clean architectures before writing a single line of code. No design survives without logic.',
  },
  {
    number: '02',
    numberColor: '#8A38F5',
    title: 'Analog Darkroom Craft',
    description:
      'Working in the darkroom requires precise chemical balances and physical print adjustments. It taught me absolute patience, structural composure, and focus on details.',
  },
  {
    number: '03',
    numberColor: '#141414',
    title: 'UX & Product Design',
    description:
      'The sweet spot where complex technical constraints dissolve into intuitive human experiences. Crafting digital products that work flawlessly, get out of your way, and scale.',
  },
];

export const JourneyPillars: React.FC = () => {
  return (
    <section className="w-full bg-[#F9F9FB] border-y border-neutral-200 py-24 sm:py-32 px-4 sm:px-12 lg:px-28">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        {/* Title Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl space-y-3">
            <span className="font-['Jost'] font-bold text-sm tracking-[2px] uppercase text-[#C95E0C] block">
              My Foundations
            </span>
            <h2 className="font-['Aleo'] font-bold text-3xl sm:text-4xl lg:text-5xl text-black leading-tight">
              Three chapters that shaped my philosophy.
            </h2>
          </div>

          <div className="self-start md:self-end">
            <span className="font-['Caveat'] text-2xl sm:text-3xl text-[#8A38F5] transform -rotate-4 inline-block font-bold">
              How it all ties together! ↗
            </span>
          </div>
        </div>

        {/* 3 Pillars Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white rounded-2xl border border-neutral-200 p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center justify-between pb-6">
                <span
                  style={{ color: pillar.numberColor }}
                  className="font-['Aleo'] font-black text-4xl"
                >
                  {pillar.number}
                </span>
                <Sparkles className="w-5 h-5 text-neutral-800" />
              </div>

              <div className="space-y-4">
                <h3 className="font-['Aleo'] font-bold text-xl sm:text-2xl text-black">
                  {pillar.title}
                </h3>
                <p className="font-['Roboto'] text-sm sm:text-base text-[#3F3F3F] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
