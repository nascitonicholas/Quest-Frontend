import React from 'react';
import './boxcentral.css';
import Button from '../../../../shared/components/Button/button.js';
import BoxMensagem from '../../../../shared/components/BoxMensagem/boxMensagem.js';
import ListSalas from '../ListaSalas/listaSalas.js';

export default function BoxCentral(){

    return(
        <div className="box-central">
            <ListSalas />
            <Button link='novasala' name='Nova Sala' class='button-nova-sala'/>
        </div>
    )
}