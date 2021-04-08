import React, { useState } from 'react';
import Header from '../../shared/components/header';
import Footer from '../../shared/components/footer';
import CategoriaPergunta from './components/categoria';
import ApostarPergunta from './components/aposta';
import ResponderPergunta from './components/resposta';
import ResultadoPergunta from './components/resultado';

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
