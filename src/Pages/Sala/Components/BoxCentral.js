import React from 'react';
import '../style.css'
import Button from '../../Home/Components/Button'
import BoxMensagem from './BoxMensagem'
import ListSalas from './ListSalas'

export default function BoxCentral(){

    return(
        <div className="box-central">
            <BoxMensagem class='box-mensagem' mensagem='Salas Disponíveis'/>
            <ListSalas/ >
            <Button link='novasala' name='Nova Sala' class='button-nova-sala'/>
        </div>
    )
}