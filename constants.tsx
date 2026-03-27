import React from 'react';
import { BookOpen, Award, Clock, Smartphone, Brain, Zap, ShieldCheck, Globe } from 'lucide-react';
import { Module, Feature } from './types';

export const COURSE_MODULES: Module[] = [
  { id: 1, title: "Aula 01: O que é um Médium?", description: "Definições científicas e espirituais sobre o canal mediúnico." },
  { id: 2, title: "Aula 02: A relação dos 7 Chacras e da Mediunidade", description: "Anatomia energética e como os centros de força influenciam a percepção." },
  { id: 3, title: "Aula 03: Qual a relação da alimentação com a Mediunidade", description: "Biofísica da alimentação e sutileza energética." },
  { id: 4, title: "Aula 04: A importância do trabalho corporal", description: "O corpo físico como instrumento de recepção de frequências." },
  { id: 5, title: "Aula 05: O Desenvolvimento da Psicografia", description: "Técnicas práticas para a escrita mediúnica." },
  { id: 6, title: "Aula 06: A Aura Humana", description: "Compreendendo o campo eletromagnético biológico." },
  { id: 7, title: "Aula 07: Como funciona a Mediunidade de Cura", description: "Mecanismos de transferência de energia vital." },
  { id: 8, title: "Aula 08: Incorporações Mediúnicas", description: "Fenomenologia do transe e acoplamento áurico." },
  { id: 9, title: "Aula 09: A relação da mediunidade com os Seres Extraterrestres", description: "Exopolítica e contatos telepáticos." },
  { id: 10, title: "Aula 10: Mediunidade, transcendência e iluminação espiritual", description: "O objetivo final do desenvolvimento das capacidades." }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    icon: <Award className="w-6 h-6 text-gold-400" />,
    title: "Certificado Incluso",
    description: "Ao concluir a jornada, receba um certificado de participação reconhecido pelo Espaço Caminho Da Luz."
  },
  {
    id: 2,
    icon: <Clock className="w-6 h-6 text-gold-400" />,
    title: "16 Horas de Conteúdo",
    description: "Material denso e aprofundado, distribuído em 10 aulas fundamentais."
  },
  {
    id: 3,
    icon: <Smartphone className="w-6 h-6 text-gold-400" />,
    title: "Acesso Multiplataforma",
    description: "Assista no celular, tablet ou computador, no seu próprio ritmo."
  },
  {
    id: 4,
    icon: <ShieldCheck className="w-6 h-6 text-gold-400" />,
    title: "Garantia de 7 Dias",
    description: "Risco zero. Se o conteúdo não expandir sua consciência, devolvemos seu investimento."
  }
];