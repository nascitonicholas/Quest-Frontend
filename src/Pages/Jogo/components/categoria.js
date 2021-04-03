import React from 'react';

export default function Categoria() {
  const [categorias] = localStorage.getItem('categoriasPerguntaRodada');

  return(
    <div>
      {
        categorias.map(categoria => (
          <div className="categoria" >
            <p>{categoria}</p>
          </div>
        ))
      }
    </div>
  );
};