import { React,useEffect } from "react";
import Header from '../../shared/components/Header/header'
import Footer from '../../shared/components/Footer/footer'
import BoxCentral from './Components/BoxCentral/BoxCentral'
import newVisitor from '../../shared/components/connection/socketExp.js'
import RestController from '../../shared/components/connection/restController.js'
import Login from './Components/Login/login.js';

const controller = new RestController();

//const controller = new (require('../../shared/components/connection/restController.js'))();


function criaJogadorTest(jogadorID){
  var jogador = "gabriel";
  //var jogadorID = 10;
 
  
  var pessoa = controller.criarJogador(jogadorID, jogador);
  return pessoa
}

export default function Home() {

  //localStorage.clear();

  

  return (
   <div className="container" >
      <Header/>
      <BoxCentral/>
      
      <Footer/>
    </div>
      
  )
}
//<BoxCentral/>