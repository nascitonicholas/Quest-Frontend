import React from 'react';
import Label from '../../../../shared/components/Label/label.js';
import Button from '../../../../shared/components/Button/button.js';
import './login.css'

export default  function Login () {

        return (
            <div className="login">
                <h1>Seu Apelido</h1>
                <Label/>
                <Button link='/sala' name='Confirmar' class='button'/>
            </div>
        )
}