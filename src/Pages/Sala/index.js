import { React } from "react";
import Header from '../../shared/components/header'
import Apresentacao from '../Home/Components/Apresentacao'
import BoxCentral from './Components/BoxCentral'
import Footer from '../../shared/components/footer';


export default function Sala() {

  return (
    <div className="container">
      <Header />
      <Apresentacao mensagem='Bem Vindo ao APP'/>
      <BoxCentral/>
      <Footer/>
    </div>
      
  )
}