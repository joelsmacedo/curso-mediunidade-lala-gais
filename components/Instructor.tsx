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
                src="https://drive.google.com/thumbnail?id=1y__IR7hzPZsfxRiuY8IKAosStWSL08vB&sz=w1000" 
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

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center border-t border-slate-800 pt-8">
              <style>{`
                @keyframes subtlePulse {
                  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(250, 204, 21, 0); }
                  50% { transform: scale(1.03); box-shadow: 0 0 20px 0 rgba(250, 204, 21, 0.15); }
                }
                .animate-subtle-pulse {
                  animation: subtlePulse 3s ease-in-out infinite;
                }
              `}</style>

              <div className="block p-4 sm:p-6 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <p className="text-2xl md:text-3xl font-bold text-white">+50 Anos</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">De Pesquisas e Experiências</p>
              </div>
              
              <a href="#" className="block p-4 sm:p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/20 hover:border-yellow-400 hover:bg-yellow-500/20 transition-all duration-300 animate-subtle-pulse cursor-pointer group" style={{animationDelay: '1s'}}>
                <p className="text-2xl md:text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors">+9 Livros</p>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">Publicados</p>
              </a>
              
              <a href="#" className="block p-4 sm:p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/20 hover:border-yellow-400 hover:bg-yellow-500/20 transition-all duration-300 animate-subtle-pulse cursor-pointer group" style={{animationDelay: '2s'}}>
                <p className="text-2xl md:text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors">12 Cursos</p>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">de Alimentação à Física Quântica</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};