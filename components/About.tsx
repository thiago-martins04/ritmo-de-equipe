import React from 'react';
import { Award, Medal, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-zinc-50 relative overflow-hidden scroll-mt-28">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-100 skew-x-12 translate-x-20 hidden lg:block z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-block border-b-2 border-lime-400 mb-4">
              <span className="text-zinc-900 font-bold uppercase tracking-widest text-xs">Sua Treinadora</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 font-display uppercase leading-none">
              Beatriz <span className="text-lime-600">Cavalcanti</span>
            </h2>
            
            <p className="text-lg text-zinc-600 mb-6 leading-relaxed font-light">
              Apaixonada pela corrida e praticante desde os 8 anos. Ex-atleta profissional e meia maratonista.
            </p>
            
            <p className="text-base text-zinc-600 mb-8 leading-relaxed">
              Minha missão é incentivar pessoas que querem transformar a corrida em um estilo de vida.
              Como ex-atleta profissional e atual treinadora, uno a ciência do esporte com a vivência prática de quem sabe o que é sentir cada km.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center group">
                <div className="p-2 bg-white border border-zinc-200 rounded-sm mr-4 shadow-sm group-hover:border-lime-400 transition-colors">
                  <GraduationCap className="h-5 w-5 text-zinc-900" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-wide">Formação Acadêmica</h4>
                  <p className="text-sm text-zinc-500">Graduada em Educação Física (UNITAU)</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="p-2 bg-white border border-zinc-200 rounded-sm mr-4 shadow-sm group-hover:border-lime-400 transition-colors">
                  <Award className="h-5 w-5 text-zinc-900" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-wide">Certificação</h4>
                  <p className="text-sm text-zinc-500">Programa Treinador de corrrida por Adauto Domingues</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="p-2 bg-white border border-zinc-200 rounded-sm mr-4 shadow-sm group-hover:border-lime-400 transition-colors">
                  <Medal className="h-5 w-5 text-zinc-900" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-wide">Conquistas</h4>
                  <p className="text-sm text-zinc-500">3x Medalista em campeonatos estaduais</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images Gallery - Masonry Style */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                    <div className="relative overflow-hidden rounded-sm shadow-lg group">
                        <img 
                            src="https://raw.githubusercontent.com/thiago-martins04/ritmodeequipe-site/refs/heads/main/competicao.avif" 
                            alt="Treinadora analisando dados" 
                            className="w-full h-64 object-cover transition-all duration-500"
                        />
                         <div className="absolute inset-0 bg-lime-400/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-multiply"></div>
                    </div>
                    <div className="relative overflow-hidden rounded-sm shadow-lg group">
                        <img 
                            src="https://raw.githubusercontent.com/thiago-martins04/ritmodeequipe-site/refs/heads/main/pista_2.avif" 
                            alt="Treinadora correndo" 
                            className="w-full h-48 object-cover transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-lime-400/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-multiply"></div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-sm shadow-lg group">
                        <img 
                            src="https://raw.githubusercontent.com/thiago-martins04/ritmodeequipe-site/refs/heads/main/pista.avif" 
                            alt="Medalhas e conquistas" 
                            className="w-full h-48 object-cover transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-lime-400/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-multiply"></div>
                    </div>
                    <div className="relative overflow-hidden rounded-sm shadow-lg group">
                        <img 
                            src="https://raw.githubusercontent.com/thiago-martins04/ritmodeequipe-site/refs/heads/main/trofeu.avif" 
                            alt="Treino funcional" 
                            className="w-full h-64 object-cover transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-lime-400/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-multiply"></div>
                    </div>
                </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-900 text-white p-4 rounded-full shadow-xl border-4 border-zinc-50 z-20">
                <div className="text-center">
                    <span className="block text-2xl font-bold font-display text-lime-400">15+</span>
                    <span className="block text-[10px] uppercase tracking-widest font-bold">Anos exp.</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};