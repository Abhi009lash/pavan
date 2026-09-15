import React from 'react';
import { Sparkles } from 'lucide-react';

interface Phase {
  number: string;
  numberColor: string;
  title: string;
  description: string;
}

const PHASES: Phase[] = [
  {
    number: '01',
    numberColor: '#1D1D1D',
    title: 'System Mapping',
    description:
      'Deconstructed multi-variable business canvases into simple, sequential digital wizard questions. Focused heavily on cognitive-load reduction for non-technical users.',
  },
  {
    number: '02',
    numberColor: '#8A38F5',
    title: 'Guided UX Design',
    description:
      'Developed wireframes and user journeys centered around interactive feedback, providing intuitive indicators and validation prompts that adapt as the entrepreneur inputs ideas.',
  },
  {
    number: '03',
    numberColor: '#1D1D1D',
    title: 'Feasibility Review',
    description:
      'Bridged AI data inputs with front-end components, verifying the logical structure and interactive micro-interactions so developers can easily translate high-fidelity designs.',
  },
];

export const AxioraTimeline: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-24 sm:py-32 px-4 sm:px-12 lg:px-28">
      <div className="flex flex-col gap-16">
        {/* Title Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="font-['Jost'] font-bold text-sm tracking-[2px] uppercase text-[#C95E0C] block">
              The Roadmap
            </span>
            <h2 className="font-['Aleo'] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1D] leading-tight">
              Project Implementation Timeline
            </h2>
          </div>

          <div className="self-start md:self-end">
            <span className="font-['Caveat'] text-2xl sm:text-3xl text-[#8A38F5] transform -rotate-4 inline-block font-bold">
              Meticulous phase structure! ⚡
            </span>
          </div>
        </div>

        {/* 3 Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHASES.map((phase) => (
            <div
              key={phase.number}
              className="bg-white rounded-2xl border border-neutral-200 p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center justify-between pb-6">
                <span
                  style={{ color: phase.numberColor }}
                  className="font-['Aleo'] font-black text-4xl"
                >
                  {phase.number}
                </span>
                <Sparkles className="w-5 h-5 text-neutral-800" />
              </div>

              <div className="space-y-4">
                <h3 className="font-['Aleo'] font-bold text-xl sm:text-2xl text-black">
                  {phase.title}
                </h3>
                <p className="font-['Roboto'] text-sm sm:text-base text-[#3F3F3F] leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
