import React from 'react';

export default function criaQuadrados( {itens, page }) {

  return(
    <div>
      {
        itens.map(iten => (
          <div>
            <div/>
            <div>
              <p>{iten}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};