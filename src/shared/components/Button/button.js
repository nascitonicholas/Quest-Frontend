import React from 'react';
import './button.css'
import RestController from '../connection/restController.js'

const controller = new RestController();
function createRoomButton() {
    var salaRequest = {
      roomName: "sala A", 
      playerId: "10",
      maxPlayers: "3"
  }   
    const salaResponse = controller.criarSala(salaRequest)
    //console.log(salaResponse)
  }


export default function Button (propos)  {
        return (
            <div>
                <a onClick={propos.acao} href={propos.link} className={propos.class}>{propos.name}</a>
            </div>
           
        );
}