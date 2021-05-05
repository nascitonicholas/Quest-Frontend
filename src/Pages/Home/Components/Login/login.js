import React from 'react';
import Label from '../../../../shared/components/Label/label.js';
import Button from '../../../../shared/components/Button/button.js';

export default  function Login () {

        return (
            <div className="login">
                <h1>Insira o seu apelido</h1>
                <Label/>
                <Button link='/sala' name='Entrar' class='button-iniciar'/>
            </div>
        )
}