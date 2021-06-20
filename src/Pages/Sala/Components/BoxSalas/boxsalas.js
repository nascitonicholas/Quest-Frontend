import React from 'react';
import './boxsalas.css';
import Button from '../../../../shared/components/Button/button.js';
import Login from '../Login/login';
import Containersala from '../Container/containersala'
import Containernovasala from '../Container/containernovasala'
import Listadesalas from '../ListaSalas/listadesala'

export default function BoxSalas(){

    return(
        
        <div className="box-salas">
            <Containernovasala disabled="disabled"/>
            <div className="listas"><h1>Escolha outra sala</h1></div>
            <Listadesalas/>
        </div>
    )
}