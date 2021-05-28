import React from 'react';
import Header from '../../shared/components/Header/header.js';
import Quadrados from '../../shared/components/Quadrados/quadrados.js';
import Footer from '../../shared/components/Footer/footer.js';
import  respostacerta from './respostacerta.js';
import  './respostacerta.css'

export default function Resposta(resposta) {
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