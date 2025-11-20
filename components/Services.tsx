import React from 'react';
import { Check, Star } from 'lucide-react';
import { PLANS } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 md:py-24 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 uppercase tracking-tight font-display">
            Invista na sua <span className="inline-block border-b-4 border-lime-400">Evolução</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Planos flexíveis desenhados para se adaptar à sua rotina e objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {PLANS.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-sm transition-all ${
                plan.isPopular 
                  ? 'bg-white border-2 border-lime-400 scale-105 shadow-2xl z-10' 
                  : 'bg-zinc-50 border border-zinc-200 hover:border-zinc-300 hover:shadow-lg'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-900 text-lime-400 text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-current" /> Recomendado
                </div>
              )}
              
              <div className="mb-8 border-b border-zinc-200 pb-8">
                <h3 className="text-lg font-bold text-zinc-500 uppercase tracking-wider mb-2">{plan.title}</h3>
                <div className="flex items-baseline">
                  <span className={`text-4xl font-bold font-display ${plan.isPopular ? 'text-zinc-900' : 'text-zinc-900'}`}>
                    {plan.price}
                  </span>
                  {plan.price !== 'Sob Consulta' && <span className="text-zinc-400 ml-2 text-sm font-medium">/mês</span>}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className={`mt-0.5 mr-3 p-0.5 rounded-full ${plan.isPopular ? 'bg-lime-100 text-lime-700' : 'bg-zinc-200 text-zinc-400'}`}>
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-zinc-600 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full py-4 font-bold uppercase tracking-widest text-sm transition-all rounded-sm ${
                plan.isPopular 
                  ? 'bg-lime-400 hover:bg-lime-500 text-zinc-900 shadow-md' 
                  : 'bg-zinc-900 hover:bg-zinc-800 text-white'
              }`}>
                Selecionar
              </a>
            </div>
          ))}
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
  );
};