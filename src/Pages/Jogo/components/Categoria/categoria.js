import React from 'react';
import Quadrados from '../../../../shared/components/Quadrados/quadrados.js';

export default function Categoria() {
  const [categorias] = localStorage.getItem('categoriasPerguntaRodada') || ['Tecnologia','Português'];

  return(<Quadrados itens={categorias} page={'categorias'} />);
};