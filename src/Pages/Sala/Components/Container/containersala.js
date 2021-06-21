import React from 'react';
import './containersala.css'
import Buttoninit from '../../../../shared/components/Button/button.js';
import ListaSalas from '../ListaSalas/listaSalas'
import Quadrados from "../Quadrados/quadrados.js"

let idRoom
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
    idRoom = localStorage.getItem('idRoom')
    console.log(idRoom)
    let i = Math.floor(Math.random() * (5 - 1)) + 1;
    return(
        <div className='containersala'>
            <div className="Titulo"><h2>Sala {arraySalas[i].nome}</h2></div>
            
            <div className="Texto"><g>Quando estiver pronto, clique em iniciar</g></div>
            <Quadrados/>
            <div className="Voltar"><Buttoninit link='sala' name='Voltar' class='buttoninit'/></div>
            <div className="Iniciar"><Buttoninit link='categoria' name='Iniciar' class='buttoninit'/></div>
        </div>
    )
}