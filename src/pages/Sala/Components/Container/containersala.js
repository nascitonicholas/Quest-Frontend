import React from 'react';
import './container.css'
import Buttoninit from '../../../../shared/components/Button/buttoninit.js';
import ListaSalas from '../ListaSalas/listaSalas'

export default function containersala(){
    
    return(
        <div className='containersala'>
            <h1>Sala XPTO</h1>
            
            <p>Quando estiver pronto, Clique em iniciar</p>
            <Buttoninit link='categoria' name='Iniciar' class='buttoninit'/>
        </div>
    )
}