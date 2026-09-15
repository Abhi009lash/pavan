import React from 'react';
import { LogoLoop, type LogoItem } from './LogoLoop';

export const ClientsSection: React.FC = () => {
  const clientLogos: LogoItem[] = [
    {
      title: 'Axiora Pulse',
      src: '/assets/clients/pulse_logo.png',
      alt: 'Axiora Pulse',
    },
    {
      title: 'Butterfly Designs',
      src: '/assets/clients/butterfly_logo.png',
      alt: 'Butterfly Designs',
    },
    {
      title: 'Karnik',
      node: (
        <div className="flex items-center gap-2.5 px-6 py-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-white font-['Jost'] font-bold text-lg tracking-tight group-hover:bg-[#C95E0C] transition-colors">
            K
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="font-['Aleo'] font-bold text-2xl tracking-widest uppercase text-neutral-900">
              KARNIK
            </span>
            <span className="text-[10px] text-neutral-400 font-['Jost'] tracking-wider uppercase">
              Enterprises
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="clients" className="w-full max-w-[1440px] mx-auto py-16 px-4 sm:px-12 lg:px-20 border-t border-neutral-100 overflow-hidden">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h3 className="font-['Caveat'] text-3xl sm:text-4xl text-black font-semibold tracking-wide">
            Clients
          </h3>
        </div>

        {/* Client Logos with smooth continuous loop */}
        <div className="py-2">
          <LogoLoop
            logos={clientLogos}
            speed={20}
            direction="left"
            logoHeight={56}
            gap={72}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#FFFFFF"
            ariaLabel="Client partners: Axiora Pulse, Butterfly Designs, and Karnik"
          />
        </div>
      </div>
    </section>
  );
};
