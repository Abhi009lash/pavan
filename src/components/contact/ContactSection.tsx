import React from 'react';
import { ContactForm } from './ContactForm';
import { FooterSignature } from '../common/FooterSignature';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full pt-16 bg-white overflow-hidden">
      {/* "Thank You" Dot-Matrix / Pixel Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 text-center flex flex-col items-center gap-6">
        <h2 className="font-['Press_Start_2P'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-black tracking-tight select-none">
          Thank You
        </h2>

        {/* Tilted badges: "Looking forward to" & "Connect with you" */}
        <div className="flex flex-col items-center -space-y-2 mt-4">
          <div className="bg-[#2B6BE1] text-white px-8 py-3 rounded-md font-['Asap'] font-semibold text-lg sm:text-xl shadow-md transform -rotate-6 z-10">
            Looking forward to
          </div>
          <div className="bg-black text-white px-8 py-3 rounded-md font-['Asap'] font-semibold text-lg sm:text-xl shadow-md z-0">
            Connect with you
          </div>
        </div>

        {/* Decorative Blue Pin / Connector Icon (Figma Spec: 219px x 329px) */}
        <div className="my-2 flex justify-center z-20 -mb-16 sm:-mb-20 lg:-mb-24 pointer-events-none select-none">
          <img
            src="/assets/illustrations/blue_tie_connector.png"
            alt="Blue String Tie Connector"
            className="w-[120px] sm:w-[160px] lg:w-[219px] h-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>

      {/* Large Curved Black Container */}
      <div className="w-full bg-black text-white rounded-t-[60px] sm:rounded-t-[100px] lg:rounded-t-[140px] px-6 sm:px-12 lg:px-24 pt-16 sm:pt-20 pb-8">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-12 sm:gap-16">
          {/* Form & Illustration Layout (Matching Figma mockup) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start justify-between">
            {/* Left: HD "WE LOVE YOU" Illustration Graphic Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[460px] aspect-square bg-white p-6 sm:p-10 rounded-2xl shadow-2xl flex items-center justify-center transform hover:scale-[1.01] transition-transform">
                <img
                  src="/assets/illustrations/we_love_you.png"
                  alt="We Love You Graphic Art"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right: "With Great Love" + Contact Form */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              <h3 className="font-['Caveat'] text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-wide mb-6">
                With Great Love
              </h3>
              <ContactForm />
            </div>
          </div>

          {/* Footer Signature and Contact Meta */}
          <FooterSignature />
        </div>
      </div>
    </section>
  );
};
