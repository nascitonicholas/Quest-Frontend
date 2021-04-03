import React from 'react';
import '../style.css'
import Label from './Label'
import Button from './Button'

export default  function Login () {

        return (
            <div className="login">
                <h1>Insira o seu apelido</h1>
                <Label/>
                <Button link='/sala' name='Entrar' class='button-iniciar'/>
            </div>
        )
}