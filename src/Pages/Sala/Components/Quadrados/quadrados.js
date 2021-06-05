import React from 'react';
import { useHistory } from 'react-router-dom';
import './quadrados.css';
import Buttoninit from '../../../../shared/components/Button/button.js';

export default function CriaQuadrados({itens, page}) {
  const history = useHistory();
  itens = [
    {
    name:"Roberto" 
  }, 
  {
    name:"Gabriel" 
  },
  {
    name:"Kaique" 
  }, 
  {
    name:"Carlos" 
  }
  ]
  async function handleCategoriaEscolhida(item) {
    localStorage.setItem('categoriaEscolhida', item);
    history.push('/sala');
  }

 // switch (page) {
   // case 'Sala':
      return(
        <div className="quadrado-containerSala">
          <ul>
            {itens.map(item => (
              <li key={item.name}>
                
                
                  <img src="user.jpg" alt=""/>
                                
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
          
          
        
      );
   /* default:
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
      );*/
 // };
};