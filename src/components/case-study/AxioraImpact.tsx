import React, { useState } from 'react';
import { SkeletonLoader } from '../common/SkeletonLoader';
import { ArrowUpRight } from 'lucide-react';

export const AxioraImpact: React.FC = () => {
  const [img1Loaded, setImg1Loaded] = useState(false);
  const [img2Loaded, setImg2Loaded] = useState(false);

  return (
    <section className="w-full bg-[#F5F5F7] border-t border-[#E5E5E5] py-[120px] px-4 sm:px-12 lg:px-[112px]">
      <div className="max-w-[1216px] mx-auto flex flex-col gap-[80px]">
        {/* Result Heading Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-[700px] flex flex-col gap-4">
            <span className="font-['Jost'] font-bold text-[14px] leading-[20px] tracking-[2px] uppercase text-[#C95E0C] block">
              The Outcome
            </span>
            <h2 className="font-['Aleo'] font-bold text-3xl sm:text-[44px] sm:leading-[53px] text-[#1D1D1D]">
              The Qualitative Impact
            </h2>
            <p className="font-['Manrope'] font-normal text-base sm:text-[18px] sm:leading-[28px] text-[#3F3F3F]">
              Successfully balanced business logic and playful modern design, turning complex business discovery into a highly intuitive SaaS tool.
            </p>
          </div>

          <div>
            <a
              href="#contact"
              className="w-[157px] h-[48px] inline-flex items-center justify-center gap-2 bg-[#F3E7D3] hover:bg-[#eae0cd] text-black rounded-sm font-['Aleo'] font-bold text-[14px] leading-[17px] tracking-[0.04em] uppercase transition-transform hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
            >
              <span>Discover</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Screens Row: Result Card Left & Result Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-start">
          {/* Result Card Left: Adaptive Interface */}
          <div className="bg-white rounded-[16px] border border-[#E5E5E5] p-6 flex flex-col justify-between max-w-[584px] min-h-[775px] w-full shadow-xs hover:shadow-md transition-shadow group mx-auto">
            <div className="relative w-full max-w-[536px] h-[360px] sm:h-[480px] lg:h-[607px] rounded-[8px] overflow-hidden bg-neutral-950 border border-neutral-100 mb-6 mx-auto">
              {!img1Loaded && (
                <SkeletonLoader className="absolute inset-0 w-full h-full" />
              )}
              <img
                src="/assets/case-study/axiora_result_mobile.png"
                alt="Axiora Mobile Adaptive Interface"
                onLoad={() => setImg1Loaded(true)}
                className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ${
                  img1Loaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-['Aleo'] font-bold text-[20px] leading-[24px] text-[#1D1D1D]">
                Adaptive Interface
              </h3>
              <p className="font-['Manrope'] font-normal text-[15px] leading-[24px] text-[#3F3F3F]">
                High-contrast accents guide entrepreneurs through difficult strategic decision trees.
              </p>
            </div>
          </div>

          {/* Result Card Right: Seamless Business Synthesis */}
          <div className="bg-white rounded-[16px] border border-[#E5E5E5] p-6 flex flex-col justify-between max-w-[584px] w-full shadow-xs hover:shadow-md transition-shadow group mx-auto">
            <div className="relative w-full max-w-[536px] h-[280px] sm:h-[360px] lg:h-[402px] rounded-[8px] overflow-hidden bg-neutral-950 border border-neutral-100 mb-6 mx-auto">
              {!img2Loaded && (
                <SkeletonLoader className="absolute inset-0 w-full h-full" />
              )}
              <img
                src="/assets/case-study/axiora_result_desktop.png"
                alt="Seamless Business Synthesis Workspace"
                onLoad={() => setImg2Loaded(true)}
                className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ${
                  img2Loaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-['Aleo'] font-bold text-[20px] leading-[24px] text-[#1D1D1D]">
                Seamless Business Synthesis
              </h3>
              <p className="font-['Manrope'] font-normal text-[15px] leading-[24px] text-[#3F3F3F]">
                AI transforms unstructured narrative input into clear, validated, investor-ready slides.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
