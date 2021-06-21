import React from 'react';
import './boxsalas.css';
import Buttoninit from '../../../../shared/components/Button/button.js';
import Login from '../Login/login';
import Containersala from '../Container/containersala'
import Containernovasala from '../Container/containernovasala'
import Listadesalas from '../ListaSalas/listadesala'

export default function BoxSalas(){
    
    return(
        
        <div className="box-salas">
            <Containernovasala/>
            <div className="listas"><h1>Escolha outra sala</h1></div>
            <Listadesalas/>
            <div className="Selecionar"><Buttoninit link='lobby' name='Selecionar' class='buttoninit'/></div>
        </div>
    )
}
