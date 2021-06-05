import React from 'react';
import './containersala.css'
import Buttoninit from '../../../../shared/components/Button/button.js';
import ListaSalas from '../ListaSalas/listaSalas'
import Quadrados from "../Quadrados/quadrados.js"

export default function containersala(){
    
    return(
        <div className='containersala'>
            <h2>Sala XPTO</h2>
            
            <g>Quando estiver pronto, Clique em iniciar</g>
            <Quadrados/>
            <Buttoninit link='categoria' name='Iniciar' class='buttoninit'/>
        </div>
    )
}