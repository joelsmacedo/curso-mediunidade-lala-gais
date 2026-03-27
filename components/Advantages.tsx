import React from 'react';

const advantagesList = [
  { id: 1, icon: '👁️', text: 'Autoconhecimento Profundo' },
  { id: 2, icon: '🕊️', text: 'Liberação de Medos e Traumas' },
  { id: 3, icon: '🌌', text: 'Conexão com Mentores e Guias Espirituais' },
  { id: 4, icon: '🌿', text: 'Equilíbrio Energético e Emocional' },
  { id: 5, icon: '💫', text: 'Despertar de Dons Latentes' },
  { id: 6, icon: '🌈', text: 'Serviço ao Outro com Propósito' },
  { id: 7, icon: '🧘', text: 'Aprofundamento na Espiritualidade' },
  { id: 8, icon: '🚫', text: 'Menos confusão, mais clareza' },
];

export const Advantages: React.FC = () => {
  return (
    <section className="py-24 bg-cosmos-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Não é loucura. É lucidez espiritual.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Desenvolver a mediunidade não é sobre se tornar "especial" — é sobre assumir com humildade um dom natural da alma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantagesList.map((adv) => (
            <div 
              key={adv.id} 
              className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800/60 hover:border-gold-500/30 transition-all duration-300 flex flex-col items-center text-center space-y-4"
            >
              <div className="text-4xl">{adv.icon}</div>
              <h3 className="text-slate-200 font-medium leading-snug">
                {adv.id}. {adv.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
