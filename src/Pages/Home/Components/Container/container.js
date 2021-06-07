import React from 'react';
import './container.css'
import Button from '../../../../shared/components/Button/button.js';
import ListaSalas from '../ListaSalas/listaSalas'

export default function container() {

    return (
        <div className='container'>
            <h1 className="msg-selecionar-sala">Entre em uma sala</h1>
            <ListaSalas />
            <div className="box-nova-sala">
                <p className="text-nova-sala">Criar Nova Sala</p>
                <Button link='novasala' name='Nova Sala' class='button' />
            </div>
        </div>
    )
}