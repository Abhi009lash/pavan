import React from 'react';
import { GRID_PROJECTS } from '../../constants/portfolioData';
import { WorksGridCard } from './WorksGridCard';

interface WorksGridProps {
  onOpenCaseStudy?: (id: number) => void;
}

export const WorksGrid: React.FC<WorksGridProps> = ({ onOpenCaseStudy }) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto pb-30 px-4 sm:px-12 lg:px-28">
      {/* Works Grid (Figma: width 1216px, padding 0px 112px 120px, gap 32px) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
        {GRID_PROJECTS.map((project) => (
          <WorksGridCard
            key={project.id}
            project={project}
            onOpenCaseStudy={onOpenCaseStudy}
          />
        ))}
      </div>
    </section>
  );
};
