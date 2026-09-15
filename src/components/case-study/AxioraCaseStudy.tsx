import React from 'react';
import { AxioraHero } from './AxioraHero';
import { AxioraContext } from './AxioraContext';
import { AxioraTimeline } from './AxioraTimeline';
import { AxioraImpact } from './AxioraImpact';
import { ContactSection } from '../contact/ContactSection';

interface AxioraCaseStudyProps {
  onBack: () => void;
}

export const AxioraCaseStudy: React.FC<AxioraCaseStudyProps> = ({ onBack }) => {
  return (
    <div className="w-full flex flex-col bg-white">
      <AxioraHero onBack={onBack} />
      <AxioraContext />
      <AxioraTimeline />
      <AxioraImpact />
      <ContactSection />
    </div>
  );
};
