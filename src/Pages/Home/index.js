import { React } from "react";
import Header from '../../shared/components/header'
import Login from './Components/Login'

export default function Home() {

  return (
    <div className="container">
      <Header />
      <Login/>
    </div>
      
  )
}