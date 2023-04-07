import React from 'react'
import "./HeroimgStyles2.css"
import send from "../assets/send.png"
import img from "../assets/login-background.jpg"
const Heroimg2 = () => {
  return (
    <>
    <center>
    <div className="Main">
      <center>
      <div className="hero-container">
      <input type="text" className="main-input"/>
      <a className="arrow"><img src={send} className="arrow-img"/></a>
      </div>
      </center>
    </div>
    </center>
    </>
  )
}

export default Heroimg2
