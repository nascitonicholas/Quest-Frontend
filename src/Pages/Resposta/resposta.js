import React, { useEffect } from 'react';
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
        <button className="blocos-container" type="button" >{alternativas[0]}</button>
        <button className="blocos-container" type="button" >{alternativas[1]}</button>
        <button className="blocos-container" type="button" >{alternativas[2]}</button>
        <button className="blocos-container" type="button" >{alternativas[3]}</button>
      </div>
      <Footer />
    </div>
  );
    
};