import React from 'react';
import { PlaygroundSection } from '../playground/PlaygroundSection';
import { ContactSection } from '../contact/ContactSection';

export const PlaygroundPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      <PlaygroundSection />
      <ContactSection />
    </div>
  );
};
