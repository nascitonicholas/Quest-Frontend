import React, {useState, useEffect}  from 'react';
import Label from '../../../../shared/components/Label/label.js';
import Button from '../../../../shared/components/Button/button.js';
import './login.css'
import '../../../../shared/components/Button/button.css'
import '../../../../shared/components/Label/label.css'

import newVisitor from '../../../../shared/components/connection/socketExp.js'
import RestController from '../../../../shared/components/connection/restController.js'
import TextField from '@material-ui/core/TextField';
let jogadorID 
let jogador
let socketid
//isso
const controller = new RestController();
const criaJogadorTest = () => {
    //var jogador = "gabriel";
    //var jogadorID = 10;
   
    
    var pessoa = controller.criarJogador(socketid, jogador);
    console.log(pessoa)
    return pessoa
  }
export default  function Login () {
    const [id, setId] = useState('');

    const [value, setValue] = useState("");
    useEffect(() => {
        socketid = newVisitor()
        console.log(socketid)
        localStorage.setItem('id', socketid)
        //let player = criaJogadorTest(socketid); 
        //console.log(player)
      }, [])
   
    const handleChange = e => {
        console.log(`digitado ${e.target.value}`);
        setValue(e.target.value)
        jogador = e.target.value
        //jogadorID = userID
    };

        return (
            <div className="form-entrada">
                <h1 className='apelido'>Seu Apelido</h1>
                
                <div>
            <form className="Label-NovaJoador" noValidate autoComplete="off">
                <TextField value={value} onChange={handleChange} id="standard-basic" label="Nickname" variant="outlined" />
            </form>
            </div>
                <div>
                <a onClick={criaJogadorTest} href='/sala' className={'button'}>{'Confirmar'}</a>
            </div>
               
            </div>
        )
}
//<Label/>
// <Button link='/sala' name='Confirmar' class='button'/>