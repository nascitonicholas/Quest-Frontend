import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../shared/components/Header/header.js';
import Footer from '../../shared/components/Footer/footer.js';
import Timer from '../../shared/components/Cronometro/timer.jsx';
import './resposta.css';

export default function Resposta() {

  useEffect(() => {

  }, []);

  const perguntaEscolhida = localStorage.getItem('perguntaEscolhida');
  const alternativas = localStorage.getItem('alternativasDisponiveis').split(',');
  const history = useHistory();
  var cronometro = 0;

  const apostaIntervalo = setInterval(() => {
    cronometro = cronometro + 1;
    if(cronometro === 30){
      if(localStorage.getItem('valorApostado') === 'null'){
        defineAlternativa(alternativas[getRandomInt(0, 5)]);
      }
      if(localStorage.getItem('valorApostado') !== 'null' && localStorage.getItem('flagAcertar') !== 'null'){
        redirecionaTelas();
      }
    }
  }, 1000);

  function redirecionaTelas() {
    clearInterval(apostaIntervalo);
    history.push('/resposta');
  }

  function defineAlternativa(alternativa) {
    localStorage.setItem('alternativaApostaJogador', alternativa);
  }

  async function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

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
