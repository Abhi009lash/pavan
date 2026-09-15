import React, { useState } from 'react';
import { Header } from './components/common/Header';
import { HeroSection } from './components/hero/HeroSection';
import { ClientsSection } from './components/clients/ClientsSection';
import { AboutSection } from './components/about/AboutSection';
import { WorksSection } from './components/works/WorksSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { ContactSection } from './components/contact/ContactSection';
import { AboutPage } from './components/about-page/AboutPage';
import { WorksPage } from './components/works-page/WorksPage';
import { PlaygroundPage } from './components/playground-page/PlaygroundPage';
import { AxioraCaseStudy } from './components/case-study/AxioraCaseStudy';
import { IbunifyCaseStudy } from './components/case-study/IbunifyCaseStudy';
import { ClickSpark } from './components/common/ClickSpark';

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<
    'home' | 'about' | 'works' | 'playground' | 'axiora-pulse' | 'ibunify-crm'
  >('home');

  const handleOpenCaseStudy = (projectId: number) => {
    if (projectId === 1) {
      setActivePage('axiora-pulse');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (projectId === 2) {
      setActivePage('ibunify-crm');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isCaseStudy = activePage === 'axiora-pulse' || activePage === 'ibunify-crm';
  const headerActiveTab = isCaseStudy ? 'works' : activePage;

  return (
    <ClickSpark sparkColor="#F9C949" sparkSize={12} sparkRadius={20} sparkCount={10} duration={400}>
      <div className="min-h-screen bg-white text-[#1D1D1D] flex flex-col antialiased selection:bg-[#F9C949] selection:text-black">
        <Header activePage={headerActiveTab} onNavigate={setActivePage} />
        <main className="flex-1 w-full">
          {activePage === 'home' && (
            <>
              <HeroSection />
              <ClientsSection />
              <AboutSection onReadMore={() => setActivePage('about')} />
              <WorksSection onOpenCaseStudy={handleOpenCaseStudy} />
              <TestimonialsSection />
              <ContactSection />
            </>
          )}
          {activePage === 'about' && <AboutPage />}
          {activePage === 'works' && (
            <WorksPage onOpenCaseStudy={handleOpenCaseStudy} />
          )}
          {activePage === 'playground' && <PlaygroundPage />}
          {activePage === 'axiora-pulse' && (
            <AxioraCaseStudy onBack={() => setActivePage('works')} />
          )}
          {activePage === 'ibunify-crm' && (
            <IbunifyCaseStudy onBack={() => setActivePage('works')} />
          )}
        </main>
      </div>
    </ClickSpark>
  );
};

export default App;
