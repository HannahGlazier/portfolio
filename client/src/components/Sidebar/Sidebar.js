import React from 'react'
import './index.scss'
import { Link, NavLink } from "react-router-dom"
import Logo from "./Logo.png"

import { FaHome, FaUser, FaEnvelope, FaLinkedin, FaGithub, FaDev, FaProjectDiagram } from 'react-icons/fa';


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
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="project-link" 
            to="/projects"
            color="#4d4de"
            >
                {FaProjectDiagram}
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target="blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/hannah-glazier-3a214a231/"
                    aria-label="LinkedIn"
                ><FaLinkedin color="#4d4d4e"/></a>
            </li>
            <li>
                <a
                    target="blank"
                    rel="noreferrer"
                    href="https://github.com/HannahGlazier"
                    aria-label="GitHub"
                ><FaGithub color="#4d4d4e"/></a>
            </li>
            <li>
                <a
                    target="blank"
                    rel="noreferrer"
                    href="https://dev.to/hannahglazier"
                    aria-label="Dev Blog"
                ><FaDev color="#4d4d4e"/></a>
            </li>
        </ul>
    </div>
)
}

export default Sidebar