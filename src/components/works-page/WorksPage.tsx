import React from 'react';
import { WorksHero } from './WorksHero';
import { WorksGrid } from './WorksGrid';
import { ContactSection } from '../contact/ContactSection';

interface WorksPageProps {
  onOpenCaseStudy?: (id: number) => void;
}

export const WorksPage: React.FC<WorksPageProps> = ({ onOpenCaseStudy }) => {
  return (
    <div className="w-full flex flex-col bg-white">
      <WorksHero />
      <WorksGrid onOpenCaseStudy={onOpenCaseStudy} />
      <ContactSection />
    </div>
  );
};
