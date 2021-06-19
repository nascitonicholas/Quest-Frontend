import { React } from "react";
import Header from '../../shared/components/Header/header'
import Footer from '../../shared/components/Footer/footer'
import BoxCentral from './components/BoxCentral/boxCentral'
import newVisitor from '../../shared/components/connection/socketExp.js'

export default function Home() {

  localStorage.clear();
  
  return (
   <div className="container" >
      <Header />
      <BoxCentral/>
      <Footer/>
    </div>
      
  )
}