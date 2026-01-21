import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const MaleSilhouette = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-zinc-400">
    <path d="M50 15c-10 0-18 8-18 18 0 8 5 15 12 17-15 4-26 15-26 29h64c0-14-11-25-26-29 7-2 12-9 12-17 0-10-8-18-18-18z" />
  </svg>
);

const FemaleSilhouette = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full fill-zinc-400">
    <path d="M50 12c-12 0-21 9-21 21 0 7 3 13 8 17-14 4-24 15-24 29h74c0-14-10-25-24-29 5-4 8-10 8-17 0-12-10-21-21-21z" />
    <path d="M29 33c0-12 9-21 21-21s21 9 21 21c0 5-2 9-5 13 4 4 6 10 6 16v5H28v-5c0-6 2-12 6-16-3-4-5-8-5-13z" fillOpacity="0.1" />
  </svg>
);

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-zinc-50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10 md:mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 uppercase tracking-wide font-display">
              Resultados <span className="text-lime-600">Reais</span>
            </h2>
            <div className="hidden md:block h-px bg-zinc-200 flex-1 ml-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group border border-zinc-100 hover:border-lime-200 flex flex-col">
              <Quote className="h-8 w-8 text-lime-400 mb-6 group-hover:scale-110 transition-transform" />
              <p className="text-zinc-600 mb-8 leading-relaxed font-medium italic flex-1">"{testimonial.content}"</p>
              <div className="flex items-center pt-6 border-t border-zinc-50">
                <div className="relative mr-4">
                  <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-zinc-100 group-hover:border-lime-400 transition-colors shadow-sm bg-zinc-50 flex items-center justify-center p-1">
                    {testimonial.image === 'female' ? <FemaleSilhouette /> : <MaleSilhouette />}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 uppercase tracking-wide text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-lime-600 font-bold uppercase tracking-tighter">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};