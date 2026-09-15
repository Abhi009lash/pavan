import React, { useState } from 'react';
import type { GridProjectItem } from '../../types/portfolio';
import { SkeletonLoader } from '../common/SkeletonLoader';
import { ArrowUpRight } from 'lucide-react';

interface WorksGridCardProps {
  project: GridProjectItem;
  onOpenCaseStudy?: (id: number) => void;
}

export const WorksGridCard: React.FC<WorksGridCardProps> = ({ project, onOpenCaseStudy }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (onOpenCaseStudy) {
      e.preventDefault();
      onOpenCaseStudy(project.id);
    }
  };

  return (
    <div
      style={{
        backgroundColor: project.bgColor,
        color: project.textColor,
      }}
      onClick={handleClick}
      className="max-w-[592px] w-full min-h-[560px] rounded-[16px] border border-[#E5E5E5] p-6 flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1 active:scale-[0.98] select-none"
    >
      {/* Card Top: Header with Tag, Watermark number, Title & Description (Figma spec: 592px x 292px) */}
      <div className="flex flex-col justify-between space-y-6">
        {/* Header with Project Tag & Watermark Number (Figma spec: 544px x 86px) */}
        <div className="flex items-center justify-between h-[86px]">
          <div
            style={{
              backgroundColor: project.tagBg,
              color: project.tagColor,
            }}
            className="px-[12px] py-[6px] h-[29px] rounded-[20px] font-['Jost'] font-bold text-[12px] leading-[17px] uppercase shadow-xs flex items-center justify-center"
          >
            {project.tagLabel}
          </div>

          <div
            style={{ color: project.watermarkColor }}
            className="font-['Aleo'] font-black text-[72px] leading-[86px] select-none opacity-90"
          >
            {project.numberStr}
          </div>
        </div>

        {/* Title & Description Block (Figma spec: 544px x 158px) */}
        <div className="flex flex-col gap-2">
          <h3 className="font-['Aleo'] font-medium text-[32px] leading-[38px] tracking-tight">
            {project.title}
          </h3>
          <p className="font-['Roboto'] font-normal text-[18px] leading-[28px] opacity-95">
            {project.description}
          </p>
        </div>
      </div>

      {/* Card Body: Copy Column, Discover CTA & Media Preview (Figma spec: 592px x 268px, gap 24px) */}
      <div className="pt-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        {/* Left Copy Column (Figma spec: 200px width) */}
        <div className="sm:col-span-6 flex flex-col justify-between h-full space-y-5 min-w-[200px]">
          <p className="font-['Manrope'] font-normal text-[16px] leading-[26px] opacity-90">
            {project.portfolioNote}
          </p>

          <div>
            <button
              type="button"
              onClick={handleClick}
              className="w-[157px] h-[48px] inline-flex items-center justify-center gap-2 bg-[#F3E7D3] hover:bg-[#e8dcbe] text-black rounded-sm font-['Aleo'] font-bold text-[14px] leading-[17px] tracking-[0.04em] uppercase transition-transform group-hover/btn:scale-105 active:scale-95 shadow-xs group/btn cursor-pointer"
            >
              <span>Discover</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Right Media Preview Box (Figma spec: 320px x 220px, rounded: 12px, border: 1px solid #E5E5E5) */}
        <div className="sm:col-span-6 flex justify-end">
          <div className="relative w-full max-w-[320px] h-[220px] rounded-[12px] overflow-hidden shadow-md border border-[#E5E5E5] bg-neutral-900/10">
            {!imageLoaded && (
              <SkeletonLoader className="absolute inset-0 w-full h-full" />
            )}
            <img
              src={project.mediaSrc}
              alt={project.mediaAlt}
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
