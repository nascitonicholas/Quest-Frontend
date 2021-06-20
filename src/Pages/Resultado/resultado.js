import React from 'react';
import Header from '../../shared/components/Header/header.js';
import Quadrados from '../../shared/components/Quadrados/quadrados.js';
import Footer from '../../shared/components/Footer/footer.js';
import  './resultado.css'

let mensagem;
let texto;
let texto1;
mensagem = Math.floor(Math.random() * (4 - 0)) + 1;


export function Mensagem(mensagem1) {
  switch (mensagem1) {
    case 1:
      texto1 = "Inteligentão"
      texto = "Burrinho"
      console.log("Burro")
      return texto;
    case 2: 
      texto1 = "Estrelinha"
      texto = "Cavalo"
      console.log("Cavalo")
      return texto;
    case 3:
      texto1 = "Einstein"
      texto = "Carinha" 
    console.log("Carinha")
    return texto;
    case 4:
      texto1 = "Gênio"
      texto = "Principiante"
      console.log("Inápto") 
      return texto;
  }
}

let animationserror = ['https://media.tenor.com/images/97aa24fd6e35b6d4a57ce7904df935d6/tenor.gif',
  'https://media.tenor.com/images/97aa24fd6e35b6d4a57ce7904df935d6/tenor.gif',
  'https://i.pinimg.com/originals/a1/e3/07/a1e3078599477aaddb482094f0e041e5.gif',
  'https://image.ibb.co/epha5A/giphy.gif',
  'https://64.media.tumblr.com/01bd408b5f2ca257abfb60d577b3b53c/tumblr_niljolaQ5M1r45g3go1_500.gif'
];

let animations = ['https://c.tenor.com/Ey9cCuYLQJcAAAAM/whatever-hands.gif',
  'https://c.tenor.com/Ey9cCuYLQJcAAAAM/whatever-hands.gif',
  'https://media.tenor.com/images/2dba4566c17db5ddc67d0ebfeb277962/tenor.gif',
  'https://media.tenor.com/images/215bd09b68b2bd9b1d0f41eead8a667e/tenor.gif',
  'https://i.kym-cdn.com/photos/images/original/000/219/605/tumblr_lwgriw0zBa1r3cnkm.gif'
];

//linha para mudar de página
//<meta http-equiv="refresh" content="5;url=../" />

export default function Resposta(resposta) {
  Mensagem(mensagem);
  
   /* switch (resposta) {
        case 'Correto': 
    return (
    <div>
          <Header />
      <div class="card">
        <div class="circle">
          <i class="checkmark">✓</i>
        </div>
        <h1>Correto, <br></br> {texto1}</h1>
        <p>Parabéns, voce acertou!</p>
        <p>Muito inteligente!!!</p>
        <div class='gif' onload="character();">
          <div class="board">
            <img src={animations[mensagem]} />
          </div>
        </div>
        
      </div>
          <Footer />
      </div>
        
   );*/

    //case 'Errado':
        return (
          
          <div>
            
            <Header />
            <div class="carderror">
              <div class="circle">              
                <ierror class="MULTIPLICATION X">✕</ierror>
              </div>
              <h1>Erroooou, <br></br> {texto}</h1>
              <p>Infelizmente, você errou!!</p>
              <p>Precisa estudar mais, hein...</p>
              <div class='gif' onload="character();">
                <div class="board">
                  <img src={animationserror[mensagem]} />
                </div>
              </div>
            </div>
            <Footer />
          </div>
            
        );
//}





}