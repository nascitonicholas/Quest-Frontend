import { React } from "react";
import Header from '../../shared/components/Header/header';
import Apresentacao from '../../shared/components/Apresentacao/Apresentacao.js';
import Footer from '../../shared/components/Footer/footer';


export default function Sala() {

  return (
    <div className="container">
      <Header />
      <Apresentacao mensagem='Bem Vindo ao APP' />
      <Footer />
    </div>

  )
}