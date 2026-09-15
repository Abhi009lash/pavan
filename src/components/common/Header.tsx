import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../../constants/portfolioData';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activePage: 'home' | 'about' | 'works' | 'playground';
  onNavigate: (page: 'home' | 'about' | 'works' | 'playground') => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'linkedin':
        return (
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case 'behance':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.088 0-6.625-2.787-6.625-6.844 0-4.225 2.73-6.906 6.375-6.906 4.078 0 5.864 2.872 5.565 6.469h-8.875c.108 2.052 1.542 3.844 3.75 3.844 1.838 0 2.923-1.077 3.328-1.75l1.583 2.187zm-7.656-6.156h5.812c-.062-1.688-1.25-2.844-2.844-2.844-1.688 0-2.812 1.156-2.968 2.844zm-10.07-5.844h4.75c2.457 0 3.75 1.172 3.75 2.969 0 1.25-.625 2.188-1.75 2.656 1.406.469 2.25 1.562 2.25 3.125 0 2.188-1.625 3.406-4.25 3.406h-4.75v-12.156zm3.031 4.562h1.688c.875 0 1.469-.438 1.469-1.219 0-.75-.594-1.188-1.469-1.188h-1.688v2.407zm0 5.25h1.938c1.031 0 1.781-.5 1.781-1.438 0-.906-.75-1.406-1.781-1.406h-1.938v2.844z" />
          </svg>
        );
      case 'whatsapp':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const handleNavClick = (target: 'home' | 'about' | 'works' | 'playground') => {
    onNavigate(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-100 transition-all">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-28 h-[64px] flex items-center justify-between">
        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1.5">
          {/* Home Tab */}
          <button
            onClick={() => handleNavClick('home')}
            className={`px-5 py-2 text-sm font-['Jost'] transition-all cursor-pointer ${
              activePage === 'home'
                ? 'bg-[#F9C949] text-black font-semibold rounded'
                : 'text-neutral-700 hover:text-black font-medium'
            }`}
          >
            Home
          </button>

          {/* About Tab */}
          <button
            onClick={() => handleNavClick('about')}
            className={`px-5 py-2 text-sm font-['Jost'] transition-all cursor-pointer ${
              activePage === 'about'
                ? 'bg-[#F9C949] text-black font-semibold rounded'
                : 'text-neutral-700 hover:text-black font-medium'
            }`}
          >
            About
          </button>

          {/* Works Tab */}
          <button
            onClick={() => handleNavClick('works')}
            className={`px-5 py-2 text-sm font-['Jost'] transition-all cursor-pointer ${
              activePage === 'works'
                ? 'bg-[#F9C949] text-black font-semibold rounded'
                : 'text-neutral-700 hover:text-black font-medium'
            }`}
          >
            Works
          </button>

          {/* Playground Tab */}
          <button
            onClick={() => handleNavClick('playground')}
            className={`px-5 py-2 text-sm font-['Jost'] transition-all cursor-pointer ${
              activePage === 'playground'
                ? 'bg-[#F9C949] text-black font-semibold rounded'
                : 'text-neutral-700 hover:text-black font-medium'
            }`}
          >
            Playground
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-black hover:bg-neutral-100 rounded-lg cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-4 sm:gap-8">
          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: social.bg }}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all shadow-xs"
                title={social.name}
              >
                {renderSocialIcon(social.icon)}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className={`font-['Jost'] font-semibold text-sm px-6 py-2.5 rounded transition-transform hover:scale-105 active:scale-95 shadow-xs ${
              activePage !== 'home'
                ? 'bg-black text-white hover:bg-neutral-800'
                : 'bg-[#F9C949] text-black hover:bg-[#ebd532]'
            }`}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-4 flex flex-col gap-3">
          <button
            onClick={() => {
              handleNavClick('home');
              setMobileMenuOpen(false);
            }}
            className={`text-left text-base font-['Jost'] py-2 ${
              activePage === 'home' ? 'font-bold text-black' : 'text-neutral-700'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => {
              handleNavClick('about');
              setMobileMenuOpen(false);
            }}
            className={`text-left text-base font-['Jost'] py-2 ${
              activePage === 'about' ? 'font-bold text-black' : 'text-neutral-700'
            }`}
          >
            About
          </button>
          <button
            onClick={() => {
              handleNavClick('works');
              setMobileMenuOpen(false);
            }}
            className={`text-left text-base font-['Jost'] py-2 ${
              activePage === 'works' ? 'font-bold text-black' : 'text-neutral-700'
            }`}
          >
            Works
          </button>
          <button
            onClick={() => {
              handleNavClick('playground');
              setMobileMenuOpen(false);
            }}
            className={`text-left text-base font-['Jost'] py-2 ${
              activePage === 'playground' ? 'font-bold text-black' : 'text-neutral-700'
            }`}
          >
            Playground
          </button>
        </div>
      )}
    </header>
  );
};
