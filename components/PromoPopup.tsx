import React, { useEffect, useState } from 'react';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';

interface PromoPopupProps {
  onClose: () => void;
}

export const PromoPopup: React.FC<PromoPopupProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pequeno delay para a animação de entrada
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Aguarda a animação de saída
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal Card */}
      <div className={`relative bg-white w-full max-w-md transform transition-all duration-300 shadow-2xl rounded-sm overflow-hidden border-l-8 border-lime-400 ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
        
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 text-white z-20 bg-zinc-900/50 hover:bg-zinc-900 p-1.5 rounded-full transition-all shadow-lg"
          aria-label="Fechar popup"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Header Image Section */}
        <div className="relative h-48 sm:h-64 overflow-hidden bg-zinc-100">
          <img 
            src="https://raw.githubusercontent.com/thiago-martins04/ritmodeequipe-site/refs/heads/main/ritmo-de-equipe-camiseta.avif" 
            alt="Camiseta Oficial Ritmo de Equipe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6">
            <span className="bg-lime-400 text-zinc-900 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-3 sm:py-1 uppercase tracking-[0.2em]">Lançamento</span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
             <div className="bg-lime-100 p-2 sm:p-3 rounded-full">
               <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-lime-600" />
             </div>
             <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 font-display uppercase leading-tight tracking-tight">
               Nossas <span className="text-lime-600">Camisetas</span>
             </h2>
          </div>
          
          <p className="text-sm sm:text-base text-zinc-600 mb-6 sm:mb-8 leading-relaxed">
            As novas camisetas oficiais do <strong>Ritmo de Equipe</strong> chegaram! Garanta a sua e treine com o conforto e o estilo da nossa comunidade.
          </p>

          <div className="space-y-2 sm:space-y-3">
            <a
              href="https://api.whatsapp.com/message/ZHVEC5OA4N5FC1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-zinc-900 text-white font-bold uppercase tracking-widest py-3 sm:py-4 hover:bg-zinc-800 transition-all group shadow-lg text-sm sm:text-base"
            >
              Eu quero a minha
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform text-lime-400" />
            </a>
            
            <button 
              onClick={handleClose}
              className="w-full text-center text-zinc-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:text-zinc-600 transition-colors py-1.5"
            >
              Agora não, obrigado
            </button>
          </div>
        </div>

        {/* Badge Decorativo */}
        <div className="bg-zinc-50 px-6 py-2 sm:px-8 sm:py-3 border-t border-zinc-100 flex justify-center items-center">
          <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-center">Edição Limitada • 100% Poliamida</span>
        </div>
      </div>
    </div>
  );
};