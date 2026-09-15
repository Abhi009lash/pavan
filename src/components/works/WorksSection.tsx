import React from 'react';
import { PROJECTS } from '../../constants/portfolioData';
import { ProjectCard } from './ProjectCard';
import ScrollStack, { ScrollStackItem } from '../common/ScrollStack';

interface WorksSectionProps {
  onOpenCaseStudy?: (projectId: number) => void;
}

export const WorksSection: React.FC<WorksSectionProps> = ({ onOpenCaseStudy }) => {
  return (
    <section id="works" className="relative w-full bg-neutral-50/50 py-12">
      {/* Section Header */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-12 lg:px-20 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="font-['Caveat'] text-3xl sm:text-4xl text-black font-semibold tracking-wide">
            Works
          </h3>
          <span className="text-xs sm:text-sm font-['Aleo'] text-neutral-500 hidden sm:inline-block">
            (Scroll down to stack projects)
          </span>
        </div>
      </div>

      {/* ScrollStack Deck */}
      <ScrollStack
        useWindowScroll={true}
        itemDistance={60}
        itemScale={0.03}
        itemStackDistance={25}
        stackPosition="12%"
        scaleEndPosition="5%"
        baseScale={0.88}
        blurAmount={0}
      >
        {PROJECTS.map((project) => (
          <ScrollStackItem key={project.id} itemClassName="max-w-[1140px] mx-auto">
            <ProjectCard
              project={project}
              isActive={true}
              onSelectTab={() => {}}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};
