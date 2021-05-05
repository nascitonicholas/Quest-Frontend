import React, { useState } from 'react';
import Header from '../../shared/components/Header/header.js';
import Footer from '../../shared/components/Footer/footer.js';
import CategoriaPergunta from './components/Categoria/categoria.js';
import ApostarPergunta from './components/Aposta/aposta.js';
import ResponderPergunta from './components/Resposta/resposta.js';
import ResultadoPergunta from './components/Resultado/resultado.js';

import '../../shared/css/global.css';
import './jogoPrincipalStyle.css';

export default function Jogo() {
  const [estadoJogo, setEstadoJogo] = useState('escolhendoCategoria');

  switch (estadoJogo) {
    case 'apostarPergunta':
      return (
        <div>
          <Header />
          <ApostarPergunta />
          <Footer />
        </div>
      );
    case 'responderPergunta':
      return (
        <div>
          <Header />
          <ResponderPergunta />
          <Footer />
        </div>
      );
    case 'resultadoPergunta':
      return (
        <div>
          <Header />
          <ResultadoPergunta />
          <Footer />
        </div>
      );
    default:
      return (
        <div>
          <Header />
          <CategoriaPergunta />
          <Footer />
        </div>
      );
  };
};
