import { React } from "react";
import Header from '../../shared/components/Header/header'
import Login from './components/Login/login.js'

export default function Home() {

  return (
    <div className="container">
      <Header />
      <Login/>
    </div>
      
  )
}