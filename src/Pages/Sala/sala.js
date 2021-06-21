import { React, useEffect } from "react";
import Header from '../../shared/components/Header/header';
import Apresentacao from '../../shared/components/Apresentacao/apresentacao.js';
import Footer from '../../shared/components/Footer/footer';
import BoxSalas from './Components/BoxSalas/boxsalas.js'
//import RestController from '../../shared/components/connection/restController.js'

//const controller = new RestController();
export default function Sala() {
  //localStorage.clear();
  /*useEffect(() => {
    var salaRequest = {
      roomName: "sala 323", 
      playerId: "10",
      maxPlayers: "3"
  }   
    const salaResponse = controller.criarSala(salaRequest)
    //console.log(salaResponse)
  }, [])*/
  return (
    <div className="container">
      <Header />
      <Apresentacao mensagem='Bem Vindo ao APP' />
      <BoxSalas/>
      <Footer />
    </div>

  )
}