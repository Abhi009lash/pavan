import React, { useState } from 'react';
import type { ProjectItem } from '../../types/portfolio';
import { SkeletonLoader } from '../common/SkeletonLoader';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  isActive: boolean;
  onSelectTab?: (id: number) => void;
  onOpenCaseStudy?: (id: number) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isActive,
  onOpenCaseStudy,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleDiscoverClick = (e: React.MouseEvent) => {
    if (onOpenCaseStudy && (project.id === 1 || project.id === 2)) {
      e.preventDefault();
      onOpenCaseStudy(project.id);
    }
  };

  return (
    <div
      className={`w-full flex flex-col transition-opacity duration-300 ${
        isActive ? 'scale-100 opacity-100' : 'scale-[0.98] opacity-85'
      }`}
    >
      {/* Main Card Body - Full Card Surface */}
      <div
        style={{
          backgroundColor: project.bgColor,
          color: project.textColor,
        }}
        onClick={handleDiscoverClick}
        className="relative min-h-[460px] sm:min-h-[480px] lg:h-[510px] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden flex flex-col justify-between cursor-pointer group"
      >
        {/* Giant Watermark Number */}
        <div
          style={{ color: project.watermarkColor }}
          className="absolute bottom-[-15px] left-4 sm:left-8 font-['Aleo'] font-black text-8xl sm:text-9xl lg:text-[140px] select-none pointer-events-none leading-none z-0"
        >
          {project.numberStr}
        </div>

        {/* Content Layout: Two Columns */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center h-full">
          {/* Left Column: Title, Description, Discover CTA */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full py-2">
            <div className="space-y-4">
              <h3 className="font-['Aleo'] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                {project.title}
              </h3>
              <p className="font-['Roboto'] text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose opacity-95">
                {project.description}
              </p>
            </div>

            {/* Discover Button */}
            <div className="pt-6 sm:pt-8 flex items-center">
              <button
                type="button"
                onClick={handleDiscoverClick}
                className="inline-flex items-center gap-2 bg-[#F3E7D3] hover:bg-[#eae0cd] text-black px-6 py-2.5 rounded-sm font-['Aleo'] font-bold text-xs sm:text-sm tracking-wider uppercase transition-transform hover:scale-105 active:scale-95 shadow-md group cursor-pointer"
              >
                <span>Discover</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Screenshot Preview with Skeleton */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[490px] h-[240px] sm:h-[290px] lg:h-[350px] rounded-xl overflow-hidden shadow-xl border border-black/10 bg-neutral-900/10">
              {!imageLoaded && (
                <SkeletonLoader className="absolute inset-0 w-full h-full" />
              )}
              <img
                src={project.mediaSrc}
                alt={project.mediaAlt}
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
