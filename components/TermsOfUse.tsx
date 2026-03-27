import React from 'react';

export const TermsOfUse: React.FC = () => {
  return (
    <div className="space-y-4 leading-relaxed text-sm sm:text-base">
      <p>Ao acessar este site, você concorda com os termos descritos abaixo.</p>

      <h3 className="text-lg font-bold text-slate-200 mt-6">Uso do site</h3>
      <p>O conteúdo deste site é informativo e pode ser alterado sem aviso prévio.</p>

      <h3 className="text-lg font-bold text-slate-200 mt-6">Responsabilidade</h3>
      <p>Não garantimos resultados específicos com o uso de qualquer produto ou serviço indicado.</p>

      <h3 className="text-lg font-bold text-slate-200 mt-6">Afiliados</h3>
      <p>Este site pode promover produtos de terceiros e não é responsável por entregas, pagamentos ou suporte relacionados a esses produtos.</p>

      <h3 className="text-lg font-bold text-slate-200 mt-6">Propriedade intelectual</h3>
      <p>Todo o conteúdo deste site é protegido e não pode ser copiado sem autorização.</p>

      <h3 className="text-lg font-bold text-slate-200 mt-6">Modificações</h3>
      <p>Os termos podem ser alterados a qualquer momento.</p>
    </div>
  );
};
