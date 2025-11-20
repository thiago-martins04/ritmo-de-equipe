import React, { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-zinc-900 mb-6 uppercase tracking-tight font-display">Fale com o Treinador</h2>
            <p className="text-lg text-zinc-600 mb-8 md:mb-12 font-light">
              Pronto para começar? Tire suas dúvidas ou agende um treino experimental gratuito.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 bg-white p-2 shadow-sm rounded-sm">
                  <MapPin className="h-6 w-6 text-lime-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-wide">Local de Treino</h3>
                  <p className="mt-1 text-zinc-600">Parque Ibirapuera, Portão 7<br />São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 bg-white p-2 shadow-sm rounded-sm">
                  <Phone className="h-6 w-6 text-lime-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-wide">WhatsApp</h3>
                  <p className="mt-1 text-zinc-600 hover:text-lime-600 transition-colors cursor-pointer">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 bg-white p-2 shadow-sm rounded-sm">
                  <Mail className="h-6 w-6 text-lime-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-wide">E-mail</h3>
                  <p className="mt-1 text-zinc-600">contato@ritmodeequipe.com.br</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 shadow-xl border border-zinc-100 rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-zinc-900 uppercase tracking-widest mb-2">Nome Atleta</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-zinc-50 border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-lime-500 focus:ring-1 focus:ring-lime-500 focus:outline-none transition-all rounded-sm"
                  placeholder="Digite seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-zinc-900 uppercase tracking-widest mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-zinc-50 border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-lime-500 focus:ring-1 focus:ring-lime-500 focus:outline-none transition-all rounded-sm"
                  placeholder="Digite seu e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-zinc-900 uppercase tracking-widest mb-2">Objetivo</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full bg-zinc-50 border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-lime-500 focus:ring-1 focus:ring-lime-500 focus:outline-none transition-all rounded-sm resize-none"
                  placeholder="Ex: Quero correr minha primeira maratona..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center px-4 py-4 bg-zinc-900 text-white font-bold uppercase tracking-widest hover:bg-lime-400 hover:text-zinc-900 transition-all disabled:opacity-50 group rounded-sm shadow-md"
              >
                {isSubmitting ? 'Enviando...' : (
                  <>
                    Enviar Mensagem
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};