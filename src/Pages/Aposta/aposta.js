import React, { useEffect, useState } from 'react';
import Header from '../../shared/components/Header/header.js';
import Footer from '../../shared/components/Footer/footer.js';

export default function Jogo() {
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
          'pergunta'  : 'O que é Infraestrutura?',
          'respostas' : ['Infraestrutura A', 'Infraestrutura B', 'Infraestrutura C', 'Infraestrutura D']
          }
         ];
  const categoriaEscolhida = localStorage.getItem('categoriaEscolhida') || 'Infraestrutura';
  const [perguntaEscolhida, setPerguntaEscolhida] = useState();
  
  useEffect(() => {
    for(var i in categoriasPerguntasRespostas){
      if (categoriasPerguntasRespostas[i].categoria === categoriaEscolhida) {
        setPerguntaEscolhida(categoriasPerguntasRespostas[i].pergunta);
      }
    }
  }, [perguntaEscolhida]);

  function getPergunta(arrayCategoriasPerguntasRespostas, categoriaEscolhida) {
    
  }

  return (
    <div>
      <Header />
      <h1>{perguntaEscolhida}</h1>
      <Footer />
    </div>
  );
    
};