import React from 'react';
import './container.css'
import Button from '../../../../shared/components/Button/button.js';
import ListaSalas from '../ListaSalas/listaSalas'

export default function container(){
    
    return(
        <div className='container'>
            <h1>Entre em uma Sala</h1>
            <ListaSalas/>
            <p>Se Desejar crie uma Nova Sala</p>
            <Button link='novasala' name='Nova Sala' class='button'/>
        </div>
    )
}