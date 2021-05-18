import React from 'react';
import Header from '../../shared/components/Header/header.js';
import Quadrados from '../../shared/components/Quadrados/quadrados.js';
import Footer from '../../shared/components/Footer/footer.js';

export default function Categoria() {
  const categoriasPerguntasRespostas = localStorage.getItem('categoriasPerguntaRodada') 
      || [
          {
           'categoria' : 'Tecnologia',
           'Pergunta'  : 'O que é tecnologia?',
           'Respostas' : ['Tecnologia A', 'Tecnologia B', 'Tecnologia C', 'Tecnologia D']
          },
          {
            'categoria' : 'História',
            'Pergunta'  : 'O que é historia?',
            'Respostas' : ['Historia A', 'Historia B', 'Historia C', 'Historia D']
          },
          {
          'categoria' : 'Matematica',
          'Pergunta'  : 'O que é matematica',
          'Respostas' : ['Matematica A', 'Matematica B', 'Matematica C', 'Matematica D']
          },
          {
          'categoria' : 'Infraestrutura',
          'Pergunta'  : 'O que é Infraestrutura?',
          'Respostas' : ['Infraestrutura A', 'Infraestrutura B', 'Infraestrutura C', 'Infraestrutura D']
          }
         ];
  
  const categorias = getCategorias(categoriasPerguntasRespostas);
  

  return(
    <div>
      <Header />
      <Quadrados itens={categorias} page='Categorias' />
      <Footer />
    </div>
  );
};

function getCategorias(arrayCategoriasPerguntasRespostas) {
  var resultado = [];
  for(var i in arrayCategoriasPerguntasRespostas){
    resultado.push(arrayCategoriasPerguntasRespostas[i].categoria);
  }
  return resultado;
}