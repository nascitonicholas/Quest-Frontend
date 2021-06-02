import { React } from "react";
import Header from '../../shared/components/Header/header'
import Login from './Components/Login/login.js'

export default function Home() {

  localStorage.clear();

  return (
    <div className="container">
      <Header />
      <Login/>
    </div>
      
  )
}