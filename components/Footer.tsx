
import React from 'react';
import { Instagram } from 'lucide-react';
import { PageView } from '../App';

interface FooterProps {
  onNavigate?: (page: PageView) => void;
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

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-zinc-100 text-zinc-600 pt-12 pb-8 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
            <button 
              onClick={() => onNavigate?.('home')}
              className="flex items-center space-x-2 select-none hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="Voltar ao início"
            >
                <div className="bg-lime-400 p-1 rotate-3">
                   <CustomLogo className="h-6 w-6 text-zinc-900" />
                </div>
                <span className="text-2xl font-bold uppercase tracking-wider text-zinc-900 font-display">
                  Ritmo<span className="text-lime-600"> de </span>Equipe
                </span>
            </button>
            <div className="flex space-x-6">
                <a 
                  href="https://www.instagram.com/bia.personal_/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zinc-400 hover:text-lime-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
            </div>
        </div>

        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Ritmo de Equipe. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <p className="font-medium">Run Fast. Run Strong.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
