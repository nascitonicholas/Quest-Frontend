import React, {useState} from 'react';
import './containernovasala.css'
import LabelNovaSala from '../../../../shared/components/Label/labelNomeDaSala.js';
import Button from '../../../../shared/components/Button/button.js';
import ListaSalas from '../ListaSalas/listaSalas'
import RestController from '../../../../shared/components/connection/restController.js'
import TextField from '@material-ui/core/TextField';
import '../../../../shared/components/Button/button.css'
import '../../../../shared/components/Label/label.css'
import { SettingsOverscanOutlined } from '@material-ui/icons';


const controller = new RestController();
let nomeSalaOut
let nomeSalaIn
let idtest
let salaResponse
const createRoomButton = () =>  {
    
    var salaRequest = {
        roomName: nomeSalaOut, 
        playerId: idtest,
        maxPlayers: "3"
    }  
    salaResponse = controller.criarSala(salaRequest)
    localStorage.setItem('idRoom', salaResponse)
    //console.log(salaResponse)
  }

export default function containernovasala(){
    const [idRoom, setIdRoom] = useState('');
    idtest = localStorage.getItem('id')
    console.log(idtest)
    const [value, setValue] = useState("");
   
    const handleChange = e => {
        console.log(`digitado ${e.target.value}`);
        setValue(e.target.value)
        nomeSalaOut = e.target.value
    };
    return(
        <div>
            <br/>
            <h1>Crie Uma Nova Sala</h1>
            <div>
            <form className="Label-NovaSala" noValidate autoComplete="off">
                <TextField value={value} onChange={handleChange} id="standard-basic" label="Nome da Sala" variant="outlined" />
            </form>
            </div>
            <div>
                <a onClick={createRoomButton} className={'button'}>{'Criar'}</a>
            </div>
            
        </div>
    )
}
//<LabelNovaSala/>
//<Button  acao={createRoomButton()} name='Criar' class='button'/>