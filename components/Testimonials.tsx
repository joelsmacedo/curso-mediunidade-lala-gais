import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    author: "@Psis_na_vida",
    content: "Nossa, aprendendo tanto com essas aulas...sinto a emoção, o amor envolvido nesse trabalho. Gratidão!"
  },
  {
    author: "@silvanaseabra9592",
    content: "Adoro as piadas 😂, fazem a gnt rir pela alegria q ele transmite... me sinto grata e feliz por estar descobrindo meu caminho para o acordar. Grata por esses excelentes conteúdos"
  },
  {
    author: "@MariaAmparoDaSilva",
    content: "Amu suas aulas meu mestre gratidão por tudo meu irmão"
  },
  {
    author: "@RenatoSeasbraAssis",
    content: "Professor Laercio. Muito obrigado por essa riquíssima aula sobre mediunidade. Me ajudou muito na minha visão do que fazer para despertar os meus dons do espírito :)"
  },
  {
    author: "@ro21336",
    content: "Fiquei muito feliz e motivada a continuar rumo ao chamado Espiritual que já está latente em mim! Gratidão Mestre, por me ou melhor nós ajudar nessa jornada! Gratidão sempre! Muito Amor e muita Luz! Namastê! 🙏❤️💫😊"
  },
  {
    author: "@mafizuqui",
    content: "Só GRATIDÃO pelas aulas valiosas, ainda bem que tem muita gente acordando dessa matrix, dessa escravidão de muito tempo."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-cosmos-900 relative border-t border-slate-800/50">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            O que dizem os alunos na jornada
          </h2>
          <p className="text-slate-400">
            Centenas de vidas já foram tocadas e transformadas pela lucidez desses ensinamentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-2xl flex flex-col justify-between hover:bg-slate-800/50 hover:border-gold-500/30 transition-all duration-300 shadow-xl shadow-black/20">
              <div>
                <Quote className="w-8 h-8 text-gold-500/30 mb-4" />
                <p className="text-slate-300 italic mb-6 leading-relaxed">
                  "{testi.content}"
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-slate-700/50 pt-4 mt-auto">
                <span className="font-semibold text-gold-400 text-sm">{testi.author}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold-500 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
