import { React } from "react";
import Header from '../../shared/components/Header/header'
import Footer from '../../shared/components/Footer/footer'
import BoxCentral from './Components/BoxCentral/BoxCentral'

export default function Home() {

  localStorage.clear();

  return (
    <div className="container">
      <Header />
      <BoxCentral/>
      <Footer/>
    </div>
      
  )
}