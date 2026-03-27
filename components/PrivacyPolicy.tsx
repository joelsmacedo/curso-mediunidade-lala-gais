import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="space-y-4 leading-relaxed text-sm sm:text-base">
      <p>A sua privacidade é importante para nós. Esta política descreve como as informações são coletadas, usadas e protegidas neste site.</p>
      
      <h3 className="text-lg font-bold text-slate-200 mt-6">Coleta de informações</h3>
      <p>Este site pode coletar informações automaticamente por meio de cookies, pixels e tecnologias semelhantes, incluindo dados como endereço IP, tipo de navegador, páginas acessadas e tempo de navegação.</p>

      <h3 className="text-lg font-bold text-slate-200 mt-6">Uso das informações</h3>
      <p>As informações coletadas são utilizadas para:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Melhorar a experiência do usuário</li>
        <li>Analisar o desempenho da página</li>
        <li>Exibir anúncios mais relevantes</li>
      </ul>

      <h3 className="text-lg font-bold text-slate-200 mt-6">Cookies e tecnologias de rastreamento</h3>
      <p>Utilizamos cookies e ferramentas como pixel de rastreamento para fins de análise e marketing. O usuário pode desativar os cookies nas configurações do seu navegador.</p>

      <h3 className="text-lg font-bold text-slate-200 mt-6">Compartilhamento de dados</h3>
      <p>Não vendemos informações pessoais. Dados podem ser compartilhados com plataformas de terceiros para fins de análise e publicidade.</p>

      <h3 className="text-lg font-bold text-slate-200 mt-6">Links externos</h3>
      <p>Este site pode conter links para páginas externas. Não somos responsáveis pelas políticas de privacidade de outros sites.</p>

      <h3 className="text-lg font-bold text-slate-200 mt-6">Consentimento</h3>
      <p>Ao utilizar este site, você concorda com esta política de privacidade.</p>

      <h3 className="text-lg font-bold text-slate-200 mt-6">Alterações</h3>
      <p>Esta política pode ser atualizada a qualquer momento, sem aviso prévio.</p>
    </div>
  );
};
