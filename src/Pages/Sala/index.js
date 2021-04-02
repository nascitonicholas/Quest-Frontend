import { React } from "react";
import Header from '../Home/Components/Header'
import Apresentacao from '../Home/Components/Apresentacao'
import BoxCentral from '../Sala/Components/BoxCentral'


export default function Home() {

  return (
    <div className="container">
      <Header />
      <Apresentacao mensagem='Seja Bem Vindo Wellington'/>
      <BoxCentral/>
    </div>
      
  )
}