import React from 'react'
import { Link } from "react-router-dom"
import "./NavbarStyles.css"

const Navbar = () => {
  return (
    <center>
      <div className="Main main">
        <div className="Heading">
          <h1 className="Nav-head">Chat.ai</h1>
        </div>
        <ul className="list-items">
          <li className="ports port-home">
            <Link to="/">Home</Link>
          </li>
          <li className="ports port-About">
            <Link to="/about">About</Link>
          </li>
          <li className="ports port-Contact">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </center>
  )
}

export default Navbar
