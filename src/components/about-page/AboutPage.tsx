import React from 'react';
import { AboutHero } from './AboutHero';
import { ExperientialSplit } from './ExperientialSplit';
import { JourneyPillars } from './JourneyPillars';
import { SkillsStickers } from './SkillsStickers';
import { ContactSection } from '../contact/ContactSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      <AboutHero />
      <ExperientialSplit />
      <JourneyPillars />
      <SkillsStickers />
      <ContactSection />
    </div>
  );
};
