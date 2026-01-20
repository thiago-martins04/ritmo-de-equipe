
import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { PageView } from '../App';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

const CustomLogo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
       const element = document.querySelector(href);
       if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-zinc-200 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#hero" onClick={handleLogoClick} className="flex items-center space-x-2 group cursor-pointer">
            <div className="bg-lime-400 p-1 rotate-3 group-hover:rotate-12 transition-transform">
                <CustomLogo className="h-6 w-6 text-zinc-900" />
            </div>
            <span className="text-2xl font-bold uppercase tracking-wider text-zinc-900 font-display">
              Ritmo<span className="text-lime-600"> de </span>Equipe
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-bold text-zinc-600 hover:text-lime-600 transition-colors uppercase tracking-widest"
              >
                {item.label}
              </button>
            ))}
            
            <div className="h-6 w-px bg-zinc-300"></div>

             <button
              onClick={() => onNavigate('bodybuilding')}
              className={`flex items-center text-sm font-bold uppercase tracking-widest transition-colors ${
                currentPage === 'bodybuilding' ? 'text-lime-600' : 'text-zinc-900 hover:text-lime-600'
              }`}
            >
              <Dumbbell className="w-4 h-4 mr-2" />
              Musculação
            </button>

            <a
              href="https://api.whatsapp.com/message/ZHVEC5OA4N5FC1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-2 font-bold uppercase tracking-wide transition-all transform hover:-translate-y-0.5 rounded-sm"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Entre em contato
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-900 hover:text-lime-600 transition-colors relative w-10 h-10 flex items-center justify-center"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              <span className={`absolute transition-all duration-300 transform ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
                <Menu className="h-8 w-8" />
              </span>
              <span className={`absolute transition-all duration-300 transform ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
                <X className="h-8 w-8" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden bg-white border-b border-zinc-100 absolute w-full top-full left-0 shadow-xl transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 h-screen overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left px-3 py-4 text-lg font-bold uppercase tracking-wider text-zinc-600 hover:text-lime-600 hover:bg-zinc-50 border-l-4 border-transparent hover:border-lime-400 transition-all"
            >
              {item.label}
            </button>
          ))}
           
          <div className="border-t border-zinc-100 my-2"></div>

          <button
              onClick={() => {
                  onNavigate('bodybuilding');
                  setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-4 text-lg font-bold uppercase tracking-wider text-zinc-900 hover:text-lime-600 hover:bg-zinc-50 border-l-4 border-transparent hover:border-lime-400 transition-all flex items-center"
          >
              <Dumbbell className="w-5 h-5 mr-3" />
              Musculação
          </button>

          <div className="pt-4 pb-20">
            <a
              href="https://api.whatsapp.com/message/ZHVEC5OA4N5FC1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center bg-lime-400 text-zinc-900 px-4 py-4 font-bold uppercase hover:bg-lime-500"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
