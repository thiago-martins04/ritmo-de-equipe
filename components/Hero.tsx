import React from 'react';
import { ChevronRight, Timer } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-12 overflow-hidden bg-zinc-50">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-zinc-100 skew-x-12 origin-bottom translate-x-32 hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content - Takes up more space now (7 columns) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-1.5 mb-6 border border-zinc-200 shadow-sm">
              <Timer className="w-4 h-4 text-lime-600" />
              <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest">Performance & Saúde</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 leading-[0.95] tracking-tighter mb-6 font-display uppercase">
              Mais que uma assessoria <br />
              <span className="text-lime-600">Uma comunidade</span>
            </h1>
            
            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed mb-8">
              Comece do zero ou melhore sua performance, seja iniciante, intermediário ou avançado.
              Procuramos a melhor  estratégia para você!
            </p>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a
                href="#services"
                onClick={(e) => handleScroll(e, 'services')}
                className="flex items-center justify-center px-8 py-3.5 bg-lime-400 text-zinc-900 font-bold uppercase tracking-wider hover:bg-lime-500 transition-all shadow-lg shadow-lime-400/20 rounded-sm min-w-[160px]"
              >
                Ver Planos
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://api.whatsapp.com/message/ZHVEC5OA4N5FC1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-3.5 border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all font-bold uppercase tracking-wider rounded-sm min-w-[160px]"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Image Content - More compact (5 columns) */}
          <div className="lg:col-span-5 relative mt-4 md:mt-0 order-1 lg:order-2">
            <div className="relative z-10 group">
               {/* Image Container with constrained height */}
               <div className="relative overflow-hidden rounded-sm shadow-2xl">
                  <img
                    src="/images/hero_capa.avif"
                    alt="Corredor em movimento"
                    className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent"></div>
               </div>
            </div>
            
            {/* Decorative Elements behind image - Adjusted */}
            <div className="absolute -top-3 -right-3 w-full h-full border-2 border-lime-400/30 z-0 rounded-sm hidden md:block"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-lime-400 rounded-full filter blur-3xl opacity-30 z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};