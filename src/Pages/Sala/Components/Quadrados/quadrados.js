import React from 'react';
import { useHistory } from 'react-router-dom';
import './quadrados.css';
import Buttoninit from '../../../../shared/components/Button/button.js';

export default function CriaQuadrados({itens, page}) {
  const history = useHistory();
  itens = [
    {
    name:"Roberto",
    icone: "https://www.amcharts.com/lib/images/faces/C01.png"  
  }, 
  {
    name:"Gabriel",
    icone: "https://www.amcharts.com/lib/images/faces/C02.png" 
  },
  {
    name:"Kaique",
    icone: "https://www.amcharts.com/lib/images/faces/C04.png" 
  }, 
  {
    name:"Carlos",
    icone: "https://www.amcharts.com/lib/images/faces/C03.png" 
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
                
                
                  <img src={item.icone} alt=""/>
                                
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