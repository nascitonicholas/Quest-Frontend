import { React } from "react";
import Header from '../../shared/components/Header/header';
import Apresentacao from '../../shared/components/Apresentacao/apresentacao.js';
import Footer from '../../shared/components/Footer/footer';
import BoxSalas from './Components/BoxSalas/boxsalas.js'


export default function Sala() {

  return (
    <div className="container">
      <Header />
      <Apresentacao mensagem='Bem Vindo ao APP' />
      <BoxSalas/>
      <Footer />
    </div>

  )
}