import React from 'react';
import '../style.css'
import Button from '../../Home/Components/Button'
import BoxMensagem from '../Components/BoxMensagem'
import ListSalas from '../Components/ListSalas'

export default function BoxCentral(){

    return(
        <div className="box-central">
            <BoxMensagem class='box-mensagem' mensagem='Salas Disponíveis'/>
            <ListSalas/ >
            <Button link='novasala' name='Nova Sala' class='button-nova-sala'/>
        </div>
    )
}