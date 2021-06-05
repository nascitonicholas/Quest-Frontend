import React from 'react';
import './boxsalas.css';
import Button from '../../../../shared/components/Button/button.js';
import Login from '../Login/login';
import Containersala from '../Container/containersala'
import Containernovasala from '../Container/containernovasala'

export default function BoxSalas(){

    return(
        <div className="box-salas">
            <Containernovasala/>
            <Containersala/>
        </div>
    )
}