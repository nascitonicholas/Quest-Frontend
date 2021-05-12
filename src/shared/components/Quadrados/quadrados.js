import React from 'react';
import './quadrados.css'

export default function CriaQuadrados({itens, page}) {

  const buttonColor = ['#FF0000','#6A5ACD','#FFD700','#00BFFF'];

  switch (page) {
    case 'Categorias':
      return(
        <div className="quadrado-container">
          <ul>
            {itens.map(item => (
              <li>
                <button style={{background: `buttonColor[0]` }} onClick={handle}></button>
                <p>{item}</p>
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
}

function handle() {

}