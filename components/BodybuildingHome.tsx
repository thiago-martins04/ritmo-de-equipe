
import React from 'react';
import { Dumbbell, Check, Activity, Scale, Shield } from 'lucide-react';

export const BodybuildingHome: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 bg-white min-h-screen text-zinc-900 selection:bg-lime-400 selection:text-zinc-900">
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-12 overflow-hidden bg-zinc-50">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-zinc-200/50 -skew-x-12 origin-top-right translate-x-32 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
               <div className="inline-flex items-center space-x-2 border-l-4 border-lime-400 pl-4 mb-8">
                  <span className="text-lime-600 font-bold uppercase tracking-widest text-xs md:text-sm">Consultoria Especializada</span>
               </div>

               <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-10 font-display uppercase leading-none tracking-tight">
                  Força <br />
                  <span className="text-zinc-400">Foco</span> <br />
                  <span className="text-lime-500">Resultado</span>
               </h1>

               <p className="text-lg text-zinc-600 mb-12 max-w-lg leading-relaxed font-light border-l-2 border-zinc-200 pl-8 py-2">
                  Treine de forma personalizada em busca dos seus objetivos, seja hipertrofia, fortalecimento ou emagrecimento. Tenha o acompanhamento profissional necessário para alavancar seus resultados.
               </p>
            </div>

            <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
                <div className="relative z-10 w-full max-w-md">
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-lime-400 z-20"></div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-lime-400 z-20"></div>
                    
                    <div className="relative shadow-2xl shadow-zinc-200">
                        <img 
                            src="https://raw.githubusercontent.com/thiago-martins04/ritmodeequipe-site/refs/heads/main/ritmo-de-equipe-musculacao.avif" 
                            alt="Atleta realizando musculação pesada" 
                            className="w-full h-[350px] md:h-[450px] object-cover filter"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent pointer-events-none"></div>
                        
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center justify-between bg-white p-4 shadow-lg border-l-4 border-lime-400">
                                <div>
                                    <p className="text-sm text-zinc-400 uppercase tracking-widest font-bold">Planilhas</p>
                                    <p className="text-zinc-900 font-bold text-lg">Hipertrofia | Fortalecimento | Emagrecimento</p>
                                </div>
                                <Dumbbell className="w-8 h-8 text-lime-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-zinc-200 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-200">
               <div className="px-4">
                  <p className="text-3xl md:text-4xl font-bold text-zinc-900 font-display mb-1">100%</p>
                  <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest font-bold">Personalizado</p>
               </div>
               <div className="px-4">
                  <p className="text-3xl md:text-4xl font-bold text-zinc-900 font-display mb-1">SUPORTE</p>
                  <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest font-bold">Via WhatsApp</p>
               </div>
               <div className="px-4">
                  <p className="text-3xl md:text-4xl font-bold text-zinc-900 font-display mb-1">APP</p>
                  <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest font-bold">Treino na Mão</p>
               </div>
                <div className="px-4">
                  <p className="text-3xl md:text-4xl font-bold text-zinc-900 font-display mb-1">VÍDEO</p>
                  <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest font-bold">Execução de Movimento</p>
               </div>
            </div>
         </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 font-display uppercase mb-4">
                    Pilares do <span className="text-lime-500">Desenvolvimento</span>
                </h2>
                <div className="h-1 w-20 bg-lime-400"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-zinc-50 p-8 border border-zinc-100 hover:border-lime-400 hover:bg-white hover:shadow-xl transition-all group hover:-translate-y-1">
                    <div className="w-14 h-14 bg-white rounded-sm flex items-center justify-center border border-zinc-200 mb-6 group-hover:bg-lime-400 group-hover:border-lime-400 transition-colors shadow-sm">
                        <Scale className="h-6 w-6 text-zinc-900" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3 font-display uppercase tracking-wide">Periodização</h3>
                    <p className="text-zinc-600 text-base leading-relaxed">
                        Planejamento macrociclo ajustado para garantir que você nunca estagne. Alternância inteligente de volume e intensidade.
                    </p>
                </div>

                <div className="bg-zinc-50 p-8 border border-zinc-100 hover:border-lime-400 hover:bg-white hover:shadow-xl transition-all group hover:-translate-y-1">
                    <div className="w-14 h-14 bg-white rounded-sm flex items-center justify-center border border-zinc-200 mb-6 group-hover:bg-lime-400 group-hover:border-lime-400 transition-colors shadow-sm">
                        <Activity className="h-6 w-6 text-zinc-900" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3 font-display uppercase tracking-wide">Avaliação Postural</h3>
                    <p className="text-zinc-600 text-base leading-relaxed">
                        Avaliação por fotos a cada 3 meses para um treino mais personalizado e acompanhamento da evolução.
                    </p>
                </div>

                <div className="bg-zinc-50 p-8 border border-zinc-100 hover:border-lime-400 hover:bg-white hover:shadow-xl transition-all group hover:-translate-y-1">
                    <div className="w-14 h-14 bg-white rounded-sm flex items-center justify-center border border-zinc-200 mb-6 group-hover:bg-lime-400 group-hover:border-lime-400 transition-colors shadow-sm">
                        <Shield className="h-6 w-6 text-zinc-900" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3 font-display uppercase tracking-wide">Constância</h3>
                    <p className="text-zinc-600 text-base leading-relaxed">
                        Estratégias para manter a aderência ao treino, adaptando a rotina à sua realidade de tempo e equipamento.
                    </p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-zinc-50" id="plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 font-display uppercase">Investimento</h2>
                <p className="text-zinc-500">Escolha a melhor opção para você.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-sm border border-zinc-200 flex flex-col hover:border-zinc-300 hover:shadow-lg transition-all">
                    <h3 className="text-lg font-bold text-zinc-400 uppercase tracking-wider mb-4">Musculação</h3>
                    <div className="flex items-baseline mb-8">
                        <span className="text-4xl font-bold text-zinc-900 font-display">R$ 79,90</span>
                        <span className="text-zinc-400 ml-2">/mês</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center text-zinc-600"><Check className="h-4 w-4 text-lime-500 mr-3" /> Troca de treino mensal</li>
                        <li className="flex items-center text-zinc-600"><Check className="h-4 w-4 text-lime-500 mr-3" /> App exclusivo com vídeos</li>
                        <li className="flex items-center text-zinc-600"><Check className="h-4 w-4 text-lime-500 mr-3" /> Suporte via WhatsApp</li>
                    </ul>
                    <a 
                        href="https://invoice.infinitepay.io/plans/ritmo-de-equipe/9lwew43XV"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 bg-zinc-900 text-white text-center font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors rounded-sm"
                    >
                        Selecionar
                    </a>
                </div>

                <div className="bg-white p-8 rounded-sm border-2 border-lime-400 relative flex flex-col shadow-xl transform md:-translate-y-4">
                    <div className="absolute top-0 right-0 bg-lime-400 text-zinc-900 text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Melhor Opção</div>
                    <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-wider mb-4">Híbrido (Corrida + Musculação)</h3>
                    <div className="flex items-baseline mb-8">
                        <span className="text-4xl font-bold text-zinc-900 font-display">R$ 129,90</span>
                        <span className="text-zinc-400 ml-2">/total</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center text-zinc-600"><Check className="h-4 w-4 text-lime-500 mr-3" /> <strong>Economia de 45%</strong></li>
                        <li className="flex items-center text-zinc-600"><Check className="h-4 w-4 text-lime-500 mr-3" /> Planilha de corrida personalizada</li>
                        <li className="flex items-center text-zinc-600"><Check className="h-4 w-4 text-lime-500 mr-3" /> Exercícios educativos e fortalecimento específico</li>
                        <li className="flex items-center text-zinc-600"><Check className="h-4 w-4 text-lime-500 mr-3" /> Suporte Prioritário</li>
                    </ul>
                    <a 
                        href="https://invoice.infinitepay.io/plans/ritmo-de-equipe/hR2uVr4WN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 bg-lime-400 text-zinc-900 text-center font-bold uppercase tracking-widest hover:bg-lime-500 transition-colors rounded-sm shadow-md"
                    >
                        Garantir Vaga
                    </a>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-xs text-zinc-500">
                    * Todos os planos possuem garantia de 07 dias caso queira pedir o reembolso.
                </p>
            </div>

            <div className="mt-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <p className="text-zinc-600 text-lg">
                    Precisa de ajuda para escolher?{' '}
                    <a
                        href="https://api.whatsapp.com/message/ZHVEC5OA4N5FC1?autoload=1&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-lime-600 hover:text-lime-700 uppercase tracking-wide border-b-2 border-lime-400 hover:border-lime-600 transition-all inline-flex items-center gap-1"
                    >
                        Entre em contato
                    </a>
                </p>
            </div>
        </div>
      </section>
    </div>
  );
};
