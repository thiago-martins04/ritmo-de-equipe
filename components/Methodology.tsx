import React from 'react';
import { Activity, Users, Target, Smartphone } from 'lucide-react';
import { FEATURES } from '../constants';

const iconMap = {
  Activity: Activity,
  Users: Users,
  Target: Target,
  Smartphone: Smartphone,
};

export const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-12 md:py-24 bg-white relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-lime-600 font-bold uppercase tracking-widest text-sm mb-2">O que vou ter acesso?</h2>
            <p className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight font-display">
              TECNOLOGIA ALIADA <br /> AO MOVIMENTO
            </p>
          </div>
          <p className="text-zinc-500 max-w-md text-left">
            Nossa abordagem combina dados, biomecânica e comunidade para criar a experiência de treino definitiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.iconName];
            return (
              <div
                key={index}
                className="group bg-zinc-50 border border-zinc-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-sm"
              >
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-3 bg-white shadow-sm rounded-sm group-hover:bg-lime-400 transition-colors">
                    <Icon className="h-6 w-6 text-zinc-900" />
                  </div>
                  <span className="text-4xl font-bold font-display text-zinc-100 group-hover:text-zinc-200 transition-colors">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3 font-display uppercase tracking-wide">{feature.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};