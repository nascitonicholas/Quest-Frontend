import React from 'react';
import './listaSalas.css'

export default function listaSalas(){

    const salasDisponiveis = localStorage.getItem('salasDisponiveis') 
      || [
          {
           'nomeSala' : 'Sala A',
           'quantidadeJogadores'  : '2'
          },
          {
            'nomeSala' : 'Sala B',
            'quantidadeJogadores'  : '4'
           },
           {
            'nomeSala' : 'Sala C',
            'quantidadeJogadores'  : '4'
           },
           {
            'nomeSala' : 'Sala D',
            'quantidadeJogadores'  : '4'
           },
           {
            'nomeSala' : 'Sala E',
            'quantidadeJogadores'  : '4'
           },
           {
            'nomeSala' : 'Sala F',
            'quantidadeJogadores'  : '4'
           },
           {
            'nomeSala' : 'Sala G',
            'quantidadeJogadores'  : '4'
           },
           {
            'nomeSala' : 'Sala H',
            'quantidadeJogadores'  : '4'
           },
           {
            'nomeSala' : 'Sala I',
            'quantidadeJogadores'  : '4'
           },
           {
            'nomeSala' : 'Sala J',
            'quantidadeJogadores'  : '4'
           },
           {
            'nomeSala' : 'Sala K',
            'quantidadeJogadores'  : '4'
           },
           {
            'nomeSala' : 'Sala L',
            'quantidadeJogadores'  : '4'
           }

         ];
  
  const salas = getSalasDisponiveis(salasDisponiveis);

    return(
        <div>
            <div className="box">
                {
                    salas.map(sala => (
                        <div className='item-box'>
                            <p>{sala}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

function getSalasDisponiveis(arraySalasAbertas){
    var resultado = [];
    for(var i in arraySalasAbertas){
        resultado.push(arraySalasAbertas[i].nomeSala);
    }

    return resultado;
}
