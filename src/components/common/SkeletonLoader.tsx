import React from 'react';

interface SkeletonProps {
  className?: string;
  rounded?: string;
}

export const SkeletonLoader: React.FC<SkeletonProps> = ({
  className = 'w-full h-full',
  rounded = 'rounded-md',
}) => {
  return (
    <div
      className={`animate-pulse bg-neutral-200/80 dark:bg-neutral-800/60 ${rounded} ${className}`}
      aria-hidden="true"
    />
  );
};
