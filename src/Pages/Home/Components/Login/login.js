import React, {useState, useEffect}  from 'react';
import Label from '../../../../shared/components/Label/label.js';
import Button from '../../../../shared/components/Button/button.js';
import './login.css'

import newVisitor from '../../../../shared/components/connection/socketExp.js'
let socketid
//isso
    var pessoa = controller.criarJogador(socketid, jogador);
    console.log(pessoa)
export default  function Login () {
    const [id, setId] = useState('');

    useEffect(() => {
        socketid = newVisitor()
        console.log(socketid)
        localStorage.setItem('id', socketid)
        //let player = criaJogadorTest(socketid); 
        //console.log(player)
      }, [])
        //jogadorID = userID

        return (
            <div className="form-entrada">
                <h1 className='apelido'>Seu Apelido</h1>
                <Label/>
                <Button link='/sala' name='Confirmar' class='button'/>
                <a onClick={criaJogadorTest} href='/sala' className={'button'}>{'Confirmar'}</a>
            </div>
        )
}