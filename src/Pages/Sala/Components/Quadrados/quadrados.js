import React from 'react';
import { useHistory } from 'react-router-dom';
import './quadrados.css';
import Buttoninit from '../../../../shared/components/Button/button.js';

export default function CriaQuadrados({itens, page}) {
  const history = useHistory();
  
  async function handleCategoriaEscolhida(item) {
    localStorage.setItem('categoriaEscolhida', item);
    history.push('/sala');
  }

  switch (page) {
    case 'Sala':
      return(
        <div className="quadrado-containerSala">
          <div className='containersala'>
            <h2>Sala XPTO</h2>
            
            <p>Quando estiver pronto, Clique em iniciar</p>
          
            {itens.map(item => (
              <li key={item}>
                <div>
                  <button onClick={() => handleCategoriaEscolhida(item)} type="button"></button>
                </div>
                <p>{item}</p>
              </li>
            ))}
          
          <Buttoninit link='categoria' name='Iniciar' class='buttoninit'/>
          </div>
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