import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Methodology } from './components/Methodology';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BodybuildingHome } from './components/BodybuildingHome';
import { Community } from './components/Community';
import { PromoPopup } from './components/PromoPopup';

export type PageView = 'home' | 'bodybuilding';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Ativa o popup após 2 segundos do carregamento inicial
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-lime-400 selection:text-zinc-900">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Community />
            <Methodology />
            <About />
            <Services />
            <Testimonials />
          </>
        ) : (
          <BodybuildingHome />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      {showPopup && <PromoPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default App;