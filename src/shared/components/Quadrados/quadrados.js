import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './quadrados.css';

export default function CriaQuadrados({itens, page}) {
  const history = useHistory();
  
  async function handleCategoriaEscolhida(item) {
    localStorage.setItem('categoriaEscolhida', item.categoria);
    localStorage.setItem('perguntaEscolhida', item.pergunta);
    localStorage.setItem('alternativasDisponiveis', item.respostas);
    localStorage.setItem('alternativasCerta', item.respostaCe);
    history.push('/aposta');
  }

  useEffect(() => {

  }, []);

  switch (page) {
    case 'Categorias':
      return(
        <div className="quadrado-container">
          <ul>
            {itens.map(item => (
              <li key={item.categoria}>
                <div>
                  <button onClick={() => handleCategoriaEscolhida(item)} type="button"></button>
                </div>
                <p>{item.categoria}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return(
        <div className="quadrado-container">
          {itens.map(item => (
            <div className="item-container">
              <div>
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
      );
  };
};