import React from 'react';
import Header from '../../shared/components/Header/header.js';
import Quadrados from '../../shared/components/Quadrados/quadrados.js';
import Footer from '../../shared/components/Footer/footer.js';
import  './resultado.css'

let mensagem;
let texto;

mensagem = Math.floor(Math.random() * (5 - 1)) + 1;

export function Mensagem(mensagem1) {
  switch (mensagem1) {
    case 1:
      texto = "Burro"
      console.log("Burro")
      return texto;
    case 2: 
      texto = "Jumento"
      console.log("Jumento")
      return texto;
    case 3:
      texto = "Paspalho" 
    console.log("Paspalho")
    return texto;
    case 4:
      texto = "Inápto"
      console.log("Inápto") 
      return texto;
    case 5:
      texto = "Jegue"
      console.log("Jegue")
      return texto; 
  }
}



export default function Resposta(resposta) {
  var texto1 = Mensagem(mensagem);
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
        <h1>Correta</h1> 
        <p>Parabéns, voce acertou!</p>
        <meta http-equiv="refresh" content="5;url=../" />
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
            <h1>Errado</h1> 
            <p>Poxa, não foi dessa vez!</p>
            
          </div>
              <Footer />
            </div>
            
        );
    }
//}