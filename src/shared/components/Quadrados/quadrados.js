import React from 'react';
import './quadrados.css'

export default function CriaQuadrados({itens, page}) {

  switch (page) {
    case 'Categorias':
      return(
        <div className="quadrado-container">
          <ul>
            {itens.map(item => (
              <li>
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