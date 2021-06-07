import { React } from "react";
import Header from '../../shared/components/Header/header'
import Footer from '../../shared/components/Footer/footer'
import BoxCentral from './components/BoxCentral/BoxCentral'

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