import React from 'react';
import './containernovasala.css'
import LabelNovaSala from '../../../../shared/components/Label/labelNomeDaSala.js';
import Button from '../../../../shared/components/Button/button.js';
import ListaSalas from '../ListaSalas/listaSalas'

export default function containernovasala(){
    
    return(
        <div>
            <br/>
            <h1>Crie Uma Nova Sala</h1>
            <LabelNovaSala/>
            <Button link='sala' name='Criar' class='button'/>
        </div>
    )
}