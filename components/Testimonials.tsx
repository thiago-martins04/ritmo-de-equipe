import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

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
            <div key={testimonial.id} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-lime-200">
              <Quote className="h-10 w-10 text-lime-200 mb-6 group-hover:text-lime-400 transition-colors" />
              <p className="text-zinc-600 mb-8 leading-relaxed font-medium italic">"{testimonial.content}"</p>
              <div className="flex items-center pt-6 border-t border-zinc-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4 border-2 border-zinc-100 shadow-sm grayscale"
                />
                <div>
                  <h4 className="font-bold text-zinc-900 uppercase tracking-wide text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-lime-600 font-bold">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};