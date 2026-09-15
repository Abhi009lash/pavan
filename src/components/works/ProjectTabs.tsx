import React from 'react';
import type { ProjectTab } from '../../types/portfolio';
import { Sparkles } from 'lucide-react';

interface ProjectTabsProps {
  tabs: ProjectTab[];
  activeTabId: number;
  onSelectTab: (id: number) => void;
  position: 'top' | 'bottom';
}

export const ProjectTabs: React.FC<ProjectTabsProps> = ({
  tabs,
  activeTabId,
  onSelectTab,
  position,
}) => {
  if (!tabs || tabs.length === 0) return null;

  return (
    <div
      className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-6 select-none ${
        position === 'top' ? '-mb-[1px] z-10' : '-mt-[1px] z-10'
      }`}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;

        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            style={{
              backgroundColor: tab.tabColor,
              color: tab.textColor,
            }}
            className={`cursor-pointer px-4 sm:px-6 py-2 flex items-center gap-2 text-xs sm:text-sm font-['Aleo'] font-semibold transition-all duration-200 ${
              position === 'top'
                ? 'rounded-t-lg border-t border-x border-white/20'
                : 'rounded-b-lg border-b border-x border-white/20'
            } ${
              isActive
                ? 'shadow-md scale-102 opacity-100'
                : 'opacity-80 hover:opacity-100 hover:scale-101'
            }`}
            aria-selected={isActive}
            role="tab"
          >
            <Sparkles
              className="w-3.5 h-3.5 shrink-0"
              style={{ color: tab.iconColor, fill: tab.iconColor }}
            />
            <span className="whitespace-nowrap">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
