import React from 'react'
import './index.scss'
import { Link, NavLink } from "react-router-dom"
import Logo from "./Logo.png"

import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';


function Sidebar() {
return (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={Logo} alt="logo"></img>
        </Link>
        <nav>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            to="/"
            color="#4d4de"
            >
                {FaHome}
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="about-link"  
            to="/about"
            color="#4d4de"
            >
                {FaUser}
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="contact-link" 
            to="/contact"
            color="#4d4de"
            >
                {FaEnvelope}
            </NavLink>
        </nav>
    </div>
)
}

export default Sidebar