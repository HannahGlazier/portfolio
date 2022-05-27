import React from 'react'
import './index.scss';
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm Hannah
                    <br /> 
                    Software Engineer
                </h1>
                <h2> Fullstack Developer / Experienced in React - Rails Stack</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home