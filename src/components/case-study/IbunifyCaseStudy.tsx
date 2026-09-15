import React from 'react';
import { IbunifyHero } from './IbunifyHero';
import { AxioraContext } from './AxioraContext';
import { AxioraTimeline } from './AxioraTimeline';
import { AxioraImpact } from './AxioraImpact';
import { ContactSection } from '../contact/ContactSection';

interface IbunifyCaseStudyProps {
  onBack: () => void;
}

export const IbunifyCaseStudy: React.FC<IbunifyCaseStudyProps> = ({ onBack }) => {
  return (
    <div className="w-full flex flex-col bg-white">
      <IbunifyHero onBack={onBack} />
      <AxioraContext />
      <AxioraTimeline />
      <AxioraImpact />
      <ContactSection />
    </div>
  );
};
