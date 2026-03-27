import React from 'react';
import { Book, Globe, Star } from 'lucide-react';

export const Instructor: React.FC = () => {
  return (
    <section className="py-24 bg-cosmos-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gold-500 rounded-2xl transform rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
               {/* Using a placeholder that looks dignified and appropriate for a professor */}
              <img 
                src="https://lh3.googleusercontent.com/u/0/d/160TpSrZJDF5wu1NW_s2EuOU-2HjV-moH" 
                alt="Professor Laércio Benedito Fonseca" 
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                <p className="text-gold-400 font-semibold tracking-wider text-sm mb-1">SEU MENTOR</p>
                <h3 className="text-2xl font-bold text-white">Prof. Laércio B. Fonseca</h3>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              A Ponte entre a <br/>
              <span className="text-science-500">Física Quântica</span> e o Espírito
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <p>
                Muitos falam sobre mediunidade, mas poucos possuem a base científica para explicar os fenômenos além do misticismo.
              </p>
              <p>
                <strong>Laércio Benedito Fonseca</strong> é Físico formado pela <span className="text-white">Unicamp (1980)</span>, com especialização em Astrofísica e Cosmologia. Ao longo de mais de 50 anos, ele dedicou sua vida a unir os conceitos rigorosos da ciência acadêmica com as verdades milenares da espiritualidade oriental e ufológica.
              </p>
              <p>
                Fundador do <em>Espaço Caminho Da Luz</em> e autor de 9 obras literárias, o Professor Laércio traz uma abordagem racional, desmistificada e segura para o desenvolvimento de suas capacidades.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-3 bg-cosmos-900/50 p-4 rounded-lg border border-slate-700">
                <Book className="text-science-500 w-6 h-6" />
                <span className="text-sm font-medium text-slate-200">Autor de "Física Quântica e Espiritualidade"</span>
              </div>
              <div className="flex items-center space-x-3 bg-cosmos-900/50 p-4 rounded-lg border border-slate-700">
                <Globe className="text-science-500 w-6 h-6" />
                <span className="text-sm font-medium text-slate-200">+1500 Palestras Realizadas</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 text-center border-t border-slate-800 pt-8 opacity-80">
              <div>
                <p className="text-2xl font-bold text-white">+50 Anos</p>
                <p className="text-sm text-slate-400">De Pesquisas e Experiências</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">+9 Livros</p>
                <p className="text-sm text-slate-400">Publicados</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">12 Cursos</p>
                <p className="text-sm text-slate-400">de Alimentação à Física Quântica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};