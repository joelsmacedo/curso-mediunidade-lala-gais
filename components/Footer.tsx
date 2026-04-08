import React, { useState } from 'react';
import { Atom } from 'lucide-react';
import { Modal } from './Modal';
import { PrivacyPolicy } from './PrivacyPolicy';
import { TermsOfUse } from './TermsOfUse';

export const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isAffiliateOpen, setIsAffiliateOpen] = useState(false);

  return (
    <footer className="bg-cosmos-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 w-full">
        <div className="flex items-center space-x-2">
          <Atom className="w-6 h-6 text-slate-500" />
          <span className="text-lg font-serif font-bold text-slate-400 tracking-wide">
            Espaço Caminho Da Luz
          </span>
        </div>
        <div className="text-slate-500 text-sm text-center order-last lg:order-none">
          <p>&copy; {new Date().getFullYear()} Buscai & Achareis. Todos os direitos reservados.</p>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 text-xs text-slate-600">
          <button onClick={() => setIsTermsOpen(true)} className="hover:text-slate-400 transition-colors">Termos de Uso</button>
          <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-slate-400 transition-colors">Política de Privacidade</button>
          <button onClick={() => setIsAffiliateOpen(true)} className="hover:text-slate-400 transition-colors">Criado por Afiliado Oficial</button>
        </div>
      </div>

      <Modal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} title="Termos de Uso">
        <TermsOfUse />
      </Modal>
      
      <Modal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} title="Política de Privacidade">
        <PrivacyPolicy />
      </Modal>

      <Modal isOpen={isAffiliateOpen} onClose={() => setIsAffiliateOpen(false)} title="Aviso de Afiliado">
        <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
          <p className="text-slate-400 font-semibold text-base">Informações sobre o programa de afiliados</p>
          <p>
            Este site participa de programas de afiliados e pode receber comissões por indicações
            realizadas através dos links aqui presentes, sem custo adicional ao usuário.
          </p>
          <p>
            Recomendamos apenas produtos que consideramos relevantes, mas a decisão de compra é
            de total responsabilidade do usuário.
          </p>
        </div>
      </Modal>
    </footer>
  );
};