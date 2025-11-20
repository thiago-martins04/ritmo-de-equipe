import React from 'react';
import { Zap, Instagram } from 'lucide-react';
import { PageView } from '../App';

interface FooterProps {
  onNavigate?: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-zinc-100 text-zinc-600 pt-12 pb-8 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
            <div className="flex items-center space-x-2 select-none">
                <div className="bg-lime-400 p-1 rounded-sm rotate-3">
                   <Zap className="h-6 w-6 text-zinc-900" />
                </div>
                <span className="text-2xl font-bold uppercase tracking-wider text-zinc-900 font-display">
                  Ritmo<span className="text-lime-600"> de </span>Equipe
                </span>
            </div>
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
          <p className="mt-2 md:mt-0 font-medium">Run Fast. Run Strong.</p>
        </div>
      </div>
    </footer>
  );
};