import { React,useEffect } from "react";
import Header from '../../shared/components/Header/header'
import Footer from '../../shared/components/Footer/footer'
import BoxCentral from './Components/BoxCentral/BoxCentral'
import newVisitor from '../../shared/components/connection/socketExp.js'
import RestController from '../../shared/components/connection/restController.js'

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

  useEffect(() => {
    let socketid = newVisitor()
    console.log(socketid)
    //let player = criaJogadorTest(socketid); 
    //console.log(player)
  }, [])

  return (
   <div className="container" >
      <Header/>
      <BoxCentral/>
      <Footer/>
    </div>
      
  )
}