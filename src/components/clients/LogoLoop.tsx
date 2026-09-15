import React from 'react';

export interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  alt?: string;
  title?: string;
  href?: string;
}

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number; // duration in seconds
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  className?: string;
}

export const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 25,
  direction = 'left',
  logoHeight = 44,
  gap = 48,
  pauseOnHover = true,
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor = '#FFFFFF',
  ariaLabel = 'Partner and client logos',
  className = '',
}) => {
  // Double the list for seamless continuous infinite loop
  const repeatedLogos = [...logos, ...logos];

  return (
    <div
      className={`relative w-full overflow-hidden py-3 group ${className}`}
      aria-label={ariaLabel}
      role="region"
    >
      {/* Left Fade Out Gradient */}
      {fadeOut && (
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
          }}
        />
      )}

      {/* Right Fade Out Gradient */}
      {fadeOut && (
        <div
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
          }}
        />
      )}

      {/* Infinite Scrolling Track */}
      <div
        className={`flex items-center w-max ${
          pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
        }`}
        style={{
          gap: `${gap}px`,
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {repeatedLogos.map((logo, index) => {
          const content = (
            <div
              key={`${logo.title || logo.alt || index}-${index}`}
              style={{ height: `${logoHeight}px` }}
              className={`flex items-center justify-center transition-transform duration-200 ${
                scaleOnHover ? 'hover:scale-110 cursor-pointer' : ''
              }`}
            >
              {logo.node ? (
                logo.node
              ) : logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.alt || logo.title || 'Client logo'}
                  style={{ height: `${logoHeight}px` }}
                  className="w-auto max-h-full object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="font-['Aleo'] font-bold text-lg text-neutral-800">
                  {logo.title}
                </span>
              )}
            </div>
          );

          if (logo.href) {
            return (
              <a
                key={`link-${index}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                title={logo.title || logo.alt}
                className="focus:outline-hidden"
              >
                {content}
              </a>
            );
          }

          return content;
        })}
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default LogoLoop;
