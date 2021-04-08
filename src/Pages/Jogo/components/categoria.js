import React from 'react';
import CriaCategorias from '../../../shared/components/quadrados';

export default function Categoria() {
  const [categorias] = localStorage.getItem('categoriasPerguntaRodada') || ['Tecnologia','Português'];

  return(<CriaCategorias itens={categorias} page={'categorias'} />);
};