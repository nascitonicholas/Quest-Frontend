import React from 'react';
import './boxcentral.css';
import Button from '../../../../shared/components/Button/button.js';
import Login from '../Login/login';
import Containersala from '../Container/containersala'

export default function BoxCentral(){

    return(
        <div className="box-central">
            
            <Containersala/>
        </div>
    )
}