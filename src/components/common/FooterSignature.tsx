import React from 'react';
import { CONTACT_INFO } from '../../constants/portfolioData';

export const FooterSignature: React.FC = () => {
  return (
    <div className="w-full pt-16 pb-8 border-t border-neutral-800 flex flex-col gap-10">
      {/* Contact Info & Signature */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end justify-between">
        {/* Left: Email & Phone */}
        <div className="md:col-span-7 flex flex-col sm:flex-row gap-8 sm:gap-14">
          {/* Email */}
          <div className="space-y-1">
            <span className="font-['Caveat'] text-2xl text-white block">
              Email
            </span>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="font-['Jost'] text-lg text-[#BE92F8] hover:underline"
            >
              {CONTACT_INFO.email}
            </a>
          </div>

          {/* Phone Number */}
          <div className="space-y-1">
            <span className="font-['Caveat'] text-2xl text-white block">
              Phone number
            </span>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
              className="font-['Jost'] text-lg text-[#BE92F8] hover:underline"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>

        {/* Right: Warm regards + Signature */}
        <div className="md:col-span-5 flex flex-col items-start md:items-end">
          <span className="font-['Aleo'] text-2xl text-neutral-400 font-normal">
            Warm regards
          </span>
          <div className="mt-1">
            <h4 className="font-['Caveat'] text-5xl sm:text-6xl text-[#F9C949] font-bold tracking-wide">
              Pavan Kumar
            </h4>
          </div>
        </div>
      </div>

      {/* Footer Bottom Attribution */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-neutral-500 text-xs font-['Jost'] border-t border-neutral-900 gap-4">
        <span>© {new Date().getFullYear()} Pavan Kumar. All rights reserved.</span>
        <div className="flex items-center gap-2">
          <span>Designed with care</span>
          <span>•</span>
          <span>Crafted for high performance</span>
        </div>
      </div>
    </div>
  );
};
