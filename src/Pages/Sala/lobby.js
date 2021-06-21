import { React } from "react";
import Header from '../../shared/components/Header/header';
import Apresentacao from '../../shared/components/Apresentacao/apresentacao.js';
import Footer from '../../shared/components/Footer/footer';
import Containersala from './Components/Container/containersala'
import './lobby.css'

export default function SalaExistente() {

    return (
      <div className="boxSala">
        <Header />
        <Containersala/>
        <Footer />
      </div>
  
    )
  }