import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Para quem é este curso?',
    answer: 'Para todas as pessoas que desejam compreender a espiritualidade através de uma óptica científica, livre de misticismos. Iniciantes e estudantes avançados se beneficiarão da abordagem racional de mais de 50 anos de pesquisa do Professor Laércio.'
  },
  {
    question: 'Preciso já ter mediunidade desperta para participar?',
    answer: 'Não. O curso serve tanto para pessoas que querem desenvolver dons latentes (iniciantes) quanto para aqueles que já vivenciam fenômenos e desejam controlá-los de forma segura e lúcida.'
  },
  {
    question: 'Como funciona o acesso e por quanto tempo?',
    answer: 'O acesso ao conteúdo do curso é vitalício (para sempre). Você poderá assistir no seu tempo, quantas vezes desejar, com total suporte na plataforma.'
  },
  {
    question: 'Como faço para assistir as aulas?',
    answer: 'As aulas são 100% online e as instruções de acesso chegarão no seu e-mail assim que o pagamento for confirmado. Plataforma segura e fácil de usar no celular, tablet ou computador.'
  },
  {
    question: 'E se eu tiver dúvidas durante o curso?',
    answer: 'Você não estará sozinho. Todos os alunos possuem acesso direto à nossa comunidade exclusiva e área de membros para tirar dúvidas que surgirem ao longo da sua jornada.'
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-cosmos-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-400">
            Tire suas dúvidas finais antes de embarcar nesta jornada.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-slate-800/80 shadow-lg' : 'bg-slate-800/30 hover:bg-slate-800/50'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-white pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gold-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                <div className="px-6 pb-5 text-slate-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
