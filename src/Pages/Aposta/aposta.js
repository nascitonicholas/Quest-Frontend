import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../shared/components/Header/header.js';
import Timer from '../../shared/components/Cronometro/timer.jsx';
import Footer from '../../shared/components/Footer/footer.js';
import './aposta.css';

export default function Aposta() {

  useEffect(() => {

  }, []);

  const perguntaEscolhida = localStorage.getItem('perguntaEscolhida');
  const jogador = localStorage.getItem('jogador') || 'Jogador1';
  const jogadorVez = localStorage.getItem('jogadorDaVez') || 'jogador1';
  const [buttonFichasHabilitado, setButtonFichasHabilitado] = useState(false);
  const [buttonAcertarHabilitado, setButtonAcertarHabilitado] = useState((jogadorVez === jogador ? true : false));
  //const alternativasDisponiveis = localStorage.getItem('alternativasDisponiveis');
  //const alternativas = alternativasDisponiveis.split(',');
  const fichas = [1, 2, 3, 5];
  const history = useHistory();
  var cronometro = 0;

  const apostaIntervalo = setInterval(() => {
    cronometro = cronometro + 1;
    console.log(cronometro);
    if(cronometro === 30){
      if(localStorage.getItem('valorApostado') === 'null'){
        defineAposta(fichas[getRandomInt(0,5)]);
      }
      if(localStorage.getItem('flagAcertar') ==='null'){
        defineCondicaoAposta(getRandomInt(0,2) === 0? true:false);
      }
      if(localStorage.getItem('valorApostado') !== 'null' && localStorage.getItem('flagAcertar') !== 'null'){
        redirecionaTelaRespostas();
      }
    }
  }, 1000);

  function redirecionaTelaRespostas() {
    clearInterval(apostaIntervalo);
    history.push('/resposta');
  }

  async function defineAposta(valorAposta) {
    setButtonFichasHabilitado(true);
    localStorage.setItem('valorApostado', valorAposta);
    //history.push('/resposta')
  }
  async function defineCondicaoAposta(flagAcertar) {
    setButtonAcertarHabilitado(true);
    localStorage.setItem('flagAcertar', flagAcertar);
  }

  async function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <div>
      <Header />
      <h1>Pergunta para o Jogador da vez: {perguntaEscolhida.toUpperCase()}</h1>
      <div className="cronometro">
        <Timer />
      </div>
      <h2>Apostar:</h2>
      <div className="divAcertar">
        <button className="btnFlagAcertar" disabled={buttonAcertarHabilitado} onClick={() => defineCondicaoAposta(true)} type="button" >ACERTAR</button>
        <button className="btnFlagAcertar" disabled={buttonAcertarHabilitado} onClick={() => defineCondicaoAposta(false)} type="button" >ERRAR</button>
      </div>
      <div className="divFichas">
        <button className="btnAposta" disabled={buttonFichasHabilitado} onClick={() => defineAposta(fichas[0])} type="button" >{fichas[0]}</button>
        <button className="btnAposta" disabled={buttonFichasHabilitado} onClick={() => defineAposta(fichas[1])} type="button" >{fichas[1]}</button>
        <button className="btnAposta" disabled={buttonFichasHabilitado} onClick={() => defineAposta(fichas[2])} type="button" >{fichas[2]}</button>
        <button className="btnAposta" disabled={buttonFichasHabilitado} onClick={() => defineAposta(fichas[3])} type="button" >{fichas[3]}</button>
      </div>
      <Footer />
    </div>
  );
    
};