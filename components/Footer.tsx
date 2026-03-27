import React, { useState } from 'react';
import { Atom } from 'lucide-react';
import { Modal } from './Modal';
import { PrivacyPolicy } from './PrivacyPolicy';
import { TermsOfUse } from './TermsOfUse';

export const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer className="bg-cosmos-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 w-full">
        <div className="flex items-center space-x-2">
          <Atom className="w-6 h-6 text-slate-500" />
          <span className="text-lg font-serif font-bold text-slate-400 tracking-wide">
            Prof. Laércio Fonseca
          </span>
        </div>
        <div className="text-slate-500 text-sm text-center order-last lg:order-none">
          <p>&copy; {new Date().getFullYear()} Espaço Caminho Da Luz. Todos os direitos reservados.</p>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 text-xs text-slate-600">
          <button onClick={() => setIsTermsOpen(true)} className="hover:text-slate-400 transition-colors">Termos de Uso</button>
          <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-slate-400 transition-colors">Política de Privacidade</button>
          <span className="text-slate-500">Criado por Afiliado Oficial</span>
        </div>
      </div>

      <Modal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} title="Termos de Uso">
        <TermsOfUse />
      </Modal>
      
      <Modal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} title="Política de Privacidade">
        <PrivacyPolicy />
      </Modal>
    </footer>
  );
};