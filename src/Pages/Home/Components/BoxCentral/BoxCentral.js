import React from 'react';
import './boxcentral.css';
import Button from '../../../../shared/components/Button/button.js';
import Login from '../Login/login';
import Container from '../Container/container'

export default function BoxCentral(){

    return(
        <div className="box-central">
            <Login/>
            <Container/>
        </div>
    )
}