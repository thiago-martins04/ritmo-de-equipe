import React from 'react';

export const Community: React.FC = () => {
  return (
    <section className="w-full bg-zinc-50">
      {/* Image Section - Full Width */}
      <div className="w-full h-[250px] md:h-[400px] lg:h-[450px] relative">
        <img 
          src="https://raw.githubusercontent.com/thiago-martins04/ritmodeequipe-site/refs/heads/main/comunidadde.avif" 
          alt="Comunidade de Corredores" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-50/20"></div>
      </div>

      {/* Text Content Section - Light Background */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-20">
            
            {/* Title - Left Side */}
            <div className="lg:w-2/5 relative pt-2">
              <h2 className="text-5xl md:text-7xl font-bold font-display italic text-zinc-900 tracking-tighter uppercase leading-none">
                Comunidade
              </h2>
              <div className="w-24 h-2 bg-lime-400 mt-6"></div>
            </div>

            {/* Text - Right Side */}
            <div className="lg:w-3/5 space-y-6">
              <p className="text-xl md:text-2xl text-zinc-900 leading-relaxed font-bold">
                A comunidade nasceu para unir pessoas em um único propósito: transformar a corrida em um estilo de vida.
              </p>
              <p className="text-base md:text-lg text-zinc-600 leading-relaxed font-normal">
                Reunimos apaixonados pelo esporte, de todos os níveis, em um espaço seguro e acolhedor para compartilhar histórias, conquistas e motivação. Aqui, cada membro inspira e é inspirado, fortalecendo o vínculo com a corrida e incentivando o crescimento pessoal e coletivo.
              </p>
              <p className="text-base md:text-lg text-zinc-600 leading-relaxed font-normal">
                Juntos, celebramos cada passo, apoiamos nos desafios e transformamos a paixão pela corrida em uma jornada de superação e evolução.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};