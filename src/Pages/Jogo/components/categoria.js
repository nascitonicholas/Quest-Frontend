import React from 'react';

export default function Categoria() {
  /*const [categorias] = localStorage.getItem('categoriasPerguntaRodada');*
  /*Somente teste para não dar erro de null*/
  const categorias = ['Tecnologia','Português']

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