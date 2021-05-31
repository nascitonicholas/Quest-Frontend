import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../shared/components/Header/header.js';
import Timer from '../../shared/components/Cronometro/timer.jsx';
import Footer from '../../shared/components/Footer/footer.js';
import './aposta.css';

export default function Aposta() {
  const perguntaEscolhida = localStorage.getItem('perguntaEscolhida');
  const jogador = localStorage.getItem('jogador');
  const [buttonFichasHabilitado, setButtonFichasHabilitado] = useState(false);
  const [buttonAcertarHabilitado, setButtonAcertarHabilitado] = useState((localStorage.getItem('jogadorDaVez') === jogador ? true : false));
  const history = useHistory();
  const alternativasDisponiveis = localStorage.getItem('alternativasDisponiveis');
  const alternativas = alternativasDisponiveis.split(',');
  const fichaUm = 1;
  const fichaDois = 2;
  const fichaTres = 3;
  const fichaCinco = 5;

  async function defineAposta(valorAposta) {
    setButtonFichasHabilitado(true);
    localStorage.setItem('valorApostado', valorAposta);
    //history.push('/resposta')
  }
  async function defineCondicaoAposta(flagAcertar) {
    setButtonAcertarHabilitado(true);
    localStorage.setItem('flagAcertar', flagAcertar);
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
        <button className="btnFlagAcertar" disabled={buttonAcertarHabilitado} onClick={() => defineCondicaoAposta(true)} >ACERTAR</button>
        <button className="btnFlagAcertar" disabled={buttonAcertarHabilitado} onClick={() => defineCondicaoAposta(false)} >ERRAR</button>
      </div>
      <div className="divFichas">
        <button className="btnAposta" disabled={buttonFichasHabilitado} onClick={() => defineAposta(fichaUm)} type="button" >{fichaUm}</button>
        <button className="btnAposta" disabled={buttonFichasHabilitado} onClick={() => defineAposta(fichaDois)} type="button" >{fichaDois}</button>
        <button className="btnAposta" disabled={buttonFichasHabilitado} onClick={() => defineAposta(fichaTres)} type="button" >{fichaTres}</button>
        <button className="btnAposta" disabled={buttonFichasHabilitado} onClick={() => defineAposta(fichaCinco)} type="button" >{fichaCinco}</button>
      </div>
      <Footer />
    </div>
  );
    
};