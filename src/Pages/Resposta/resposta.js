import React from 'react';
import Header from '../../shared/components/Header/header.js';
import Footer from '../../shared/components/Footer/footer.js';
import Timer from '../../shared/components/Cronometro/timer.jsx';
import './resposta.css';

export default function Resposta() {
  const perguntaEscolhida = localStorage.getItem('perguntaEscolhida');
  const alternativas = localStorage.getItem('alternativasDisponiveis').split(',');

  return (
    <div>
      <Header />
      <h1>{perguntaEscolhida.toUpperCase()}</h1>
      <div className="cronometro">
        <Timer />
      </div>
      <div className="alternativas-container">
        <div className="blocos-container">
         <p>{alternativas[0]}</p>
         <p>{alternativas[1]}</p>
        </div>
        <div className="blocos-container">
         <p>{alternativas[2]}</p>
         <p>{alternativas[3]}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
    
};