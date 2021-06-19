import { React,useEffect } from "react";
import Header from '../../shared/components/Header/header'
import Footer from '../../shared/components/Footer/footer'
import BoxCentral from './Components/BoxCentral/BoxCentral'
import newVisitor from '../../shared/components/connection/socketExp.js'

export default function Home() {

  localStorage.clear();

  useEffect(() => {
    newVisitor() 
  }, [])

  return (
   <div className="container" >
      <Header />
      <BoxCentral/>
      <Footer/>
    </div>
      
  )
}