import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../shared/components/Header/header.js';
import Footer from '../../shared/components/Footer/footer.js';
import './resposta.css';

export default function Resposta() {
  const perguntaEscolhida = localStorage.getItem('perguntaEscolhida');
  const alternativas = localStorage.getItem('alternativasDisponiveis');

  return (
    <div>
      <Header />
      <h1>{perguntaEscolhida.toUpperCase()}</h1>
      <div className="quadrado-container">
          <ul>
            {alternativas.map(alternativa => (
              <li key={alternativa}>
                <div>
                  <button type="button"></button>
                </div>
                <p>{alternativa}</p>
              </li>
            ))}
          </ul>
        </div>
      <Footer />
    </div>
  );
    
};