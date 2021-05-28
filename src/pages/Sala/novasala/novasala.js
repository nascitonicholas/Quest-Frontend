import { React } from "react";
import Header from '../../../shared/components/Header/header';
import Footer from '../../../shared/components/Footer/footer';
import Apresentacao from '../../../shared/components/Apresentacao/Apresentacao.js';
import BoxCentralNovaSala from '../Components/BoxCentral/BoxCentralNovaSala'



export default function Novasala() {

  return (
    <div className="container">
      <Header />

    
      <div className="container2">
      
      <BoxCentralNovaSala/>
      
    </div>
      <Footer />
    </div>

  )
};