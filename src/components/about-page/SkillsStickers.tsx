import React from 'react';

interface SkillBadge {
  name: string;
  bg: string;
}

const SKILLS: SkillBadge[] = [
  { name: 'UX Strategy', bg: '#F9C949' },
  { name: 'SaaS Architecture', bg: '#7EE9B9' },
  { name: 'Systems Mapping', bg: '#FFFFFF' },
  { name: 'Figma Expert', bg: '#F9C949' },
  { name: 'Visual Storytelling', bg: '#7EE9B9' },
  { name: 'Functional Prototyping', bg: '#FFFFFF' },
  { name: 'Technical Feasibility', bg: '#F9C949' },
  { name: 'User Testing', bg: '#7EE9B9' },
  { name: 'Interactive Micro-interactions', bg: '#FFFFFF' },
];

export const SkillsStickers: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-20 sm:py-24 px-4 sm:px-12 lg:px-28 flex flex-col items-center text-center">
      {/* Title */}
      <h3 className="font-['Aleo'] font-bold text-2xl sm:text-3xl lg:text-4xl text-black mb-10">
        Tools, values &amp; design weapons
      </h3>

      {/* Badges Wrap */}
      <div className="max-w-4xl flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            style={{ backgroundColor: skill.bg }}
            className="px-6 py-3 rounded-full border-2 border-black font-['Jost'] font-semibold text-sm sm:text-base text-black shadow-xs hover:shadow-md hover:scale-105 active:scale-95 transition-all cursor-default select-none"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};
