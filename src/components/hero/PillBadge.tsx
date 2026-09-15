import React from 'react';

interface PillBadgeProps {
  text: string;
  bgColor: string;
  textColor?: string;
  className?: string;
  rotation?: string;
  isTape?: boolean;
}

export const PillBadge: React.FC<PillBadgeProps> = ({
  text,
  bgColor,
  textColor = '#000000',
  className = '',
  rotation = 'rotate-0',
  isTape = false,
}) => {
  if (isTape) {
    return (
      <div
        style={{ backgroundColor: bgColor, color: textColor }}
        className={`inline-flex items-center justify-center px-4 py-1.5 shadow-sm transform ${rotation} font-['Caveat'] text-lg font-bold tracking-wide ${className}`}
      >
        <span>{text}</span>
      </div>
    );
  }

  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className={`inline-flex items-center justify-center px-6 py-2 rounded-full border-4 border-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] transform ${rotation} font-['Aleo'] font-semibold text-sm sm:text-base tracking-wide ${className}`}
    >
      <span>{text}</span>
    </div>
  );
};
