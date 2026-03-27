import React, { useState } from 'react';
import { COURSE_MODULES } from '../constants';
import { Plus, Minus, BookOpen } from 'lucide-react';

export const Syllabus: React.FC = () => {
  const [openModule, setOpenModule] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <section id="syllabus" className="py-24 bg-cosmos-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Conteúdo Programático
          </h2>
          <p className="text-slate-400 text-lg">
            Um currículo estruturado para levar você da teoria à prática mediúnica.
          </p>
        </div>

        <div className="space-y-4">
          {COURSE_MODULES.map((module) => (
            <div 
              key={module.id} 
              className={`border rounded-xl transition-all duration-300 ${openModule === module.id ? 'bg-slate-800/50 border-gold-500/50 shadow-lg shadow-gold-500/5' : 'bg-slate-900 border-slate-800 hover:border-slate-700'}`}
            >
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold-500/20 rounded-xl"
                aria-expanded={openModule === module.id}
              >
                <div className="flex items-center space-x-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openModule === module.id ? 'bg-gold-500 text-cosmos-900' : 'bg-slate-800 text-slate-400'}`}>
                    <span className="font-bold text-sm">{module.id}</span>
                  </div>
                  <h3 className={`text-lg md:text-xl font-medium ${openModule === module.id ? 'text-white' : 'text-slate-300'}`}>
                    {module.title}
                  </h3>
                </div>
                {openModule === module.id ? 
                  <Minus className="w-5 h-5 text-gold-400 flex-shrink-0 ml-4" /> : 
                  <Plus className="w-5 h-5 text-slate-500 flex-shrink-0 ml-4" />
                }
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openModule === module.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 pl-20 pr-6 text-slate-400 leading-relaxed border-t border-dashed border-slate-700/50 mt-2">
                  {module.description}
                  <div className="mt-3 flex items-center text-sm text-science-500">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>Aula teórica e exercício prático</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};