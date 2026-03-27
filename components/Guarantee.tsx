import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-20 bg-cosmos-900 border-y border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-gold-500/10 rounded-full mb-6 relative">
          <div className="absolute inset-0 bg-gold-500/20 blur-xl rounded-full"></div>
          <ShieldCheck className="w-16 h-16 text-gold-400 relative z-10" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
          Garantia Incondicional de 7 Dias
        </h2>
        
        <p className="text-lg text-slate-300 leading-relaxed mb-8">
          Temos tanta confiança no poder transformador deste material que oferecemos uma garantia irrestrita. 
          Se por qualquer motivo você decidir que este curso não é para você dentro dos primeiros 7 dias, 
          basta enviar um único e-mail para nossa equipe de suporte e devolveremos 100% do seu dinheiro. 
          Sem burocracia, letrinhas miúdas ou ressentimentos.
        </p>
        
        <p className="font-medium text-gold-400 text-xl">
          Seu risco é absolutamente zero.
        </p>
      </div>
    </section>
  );
};
