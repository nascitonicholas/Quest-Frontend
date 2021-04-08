import React from 'react';

export default function criaQuadrados(itens, page, ...props) {

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