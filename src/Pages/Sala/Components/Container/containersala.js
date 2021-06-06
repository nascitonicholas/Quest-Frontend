import React from 'react';
import './containersala.css'
import Buttoninit from '../../../../shared/components/Button/button.js';
import ListaSalas from '../ListaSalas/listaSalas'
import Quadrados from "../Quadrados/quadrados.js"


let arraySalas = [{
    nome: "XPTO"
},
{
    nome: "topper"
},
{
    nome: "zika memo"
},
{
    nome: "guapos"
},{
    nome: "Arrebenta folgado"
}]

export default function containersala(sala){
    let i = Math.floor(Math.random() * (5 - 1)) + 1;
    return(
        <div className='containersala'>
            <h2>Sala {arraySalas[i].nome}</h2>
            
            <g>Quando estiver pronto, Clique em iniciar</g>
            <Quadrados/>
            <Buttoninit link='categoria' name='Iniciar' class='buttoninit'/>
        </div>
    )
}