import React from 'react';
import { Button } from './Button';
import { FEATURES } from '../constants';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="enroll" className="py-24 bg-gradient-to-b from-cosmos-800 to-cosmos-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
              <div className="mb-4 bg-cosmos-900 w-12 h-12 rounded-lg flex items-center justify-center border border-slate-700">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Offer Card */}
        <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl shadow-black/50">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            <div className="p-10 flex flex-col justify-center">
              <span className="inline-block text-gold-400 font-bold tracking-wider text-sm mb-2">OFERTA ESPECIAL</span>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Comece sua expansão de consciência hoje</h2>
              <ul className="space-y-4 mb-8">
                {['Acesso vitalício ao conteúdo', 'Suporte direto na plataforma', 'Atualizações futuras inclusas', 'Comunidade exclusiva de alunos'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-science-500 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 flex items-start space-x-3">
                <ShieldCheck className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-sm">Garantia Incondicional de 7 Dias</h4>
                  <p className="text-slate-400 text-xs mt-1">Se não gostar, devolvemos 100% do seu investimento. Sem perguntas.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-10 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-slate-700 relative overflow-hidden">
               <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-gold-500/20 blur-[50px] rounded-full"></div>
              
              <p className="text-slate-400 text-sm line-through mb-2">De R$ 498,00 por</p>
              <div className="text-5xl font-bold text-white mb-2">R$ 298<span className="text-xl text-slate-400 font-normal">,00</span></div>
              <p className="text-science-500 font-medium mb-8">ou 12x de R$ 30,82</p>
              
              <Button id="checkout-button" fullWidth className="text-lg py-5 shadow-gold-500/20" onClick={() => window.open('https://pay.hotmart.com/P81943941Q?off=wricgrqu&sck=BTN1&utm_source=landingpage&utm_medium=button&utm_campaign=mediunidade', '_blank')}>
                QUERO ME INSCREVER AGORA
              </Button>
              <p className="mt-4 text-xs text-slate-500">Pagamento seguro via Cartão, Pix ou Boleto.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};