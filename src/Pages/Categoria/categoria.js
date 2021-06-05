import React from 'react';
import Header from '../../shared/components/Header/header.js';
import Quadrados from '../../shared/components/Quadrados/quadrados.js';
import Footer from '../../shared/components/Footer/footer.js';

export default function Categoria() {
  const categoriasPerguntasRespostas = localStorage.getItem('categoriasPerguntaRodada') 
      || [
          {
           'categoria' : 'Tecnologia',
           'pergunta'  : 'O que é tecnologia?',
           'respostas' : ['Tecnologia A', 'Tecnologia B', 'Tecnologia C', 'Tecnologia D']
          },
          {
            'categoria' : 'História',
            'pergunta'  : 'O que é historia?',
            'respostas' : ['Historia A', 'Historia B', 'Historia C', 'Historia D']
          },
          {
          'categoria' : 'Matematica',
          'pergunta'  : 'O que é matematica',
          'respostas' : ['Matematica A', 'Matematica B', 'Matematica C', 'Matematica D']
          },
          {
          'categoria' : 'Infraestrutura',
          'pergunta'  : 'O que é Infraestrutura?',
          'respostas' : ['Infraestrutura A', 'Infraestrutura B', 'Infraestrutura C', 'Infraestrutura D']
          }
         ];
  
  return(
    <div>
      <Header />
      <Quadrados itens={categoriasPerguntasRespostas} page='Categorias' />
      <Footer />
    </div>
  );
};