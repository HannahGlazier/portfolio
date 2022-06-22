import React, { useState, useEffect } from 'react'
import './index.scss';
import { Link } from "react-router-dom"
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Loader from 'react-loaders'

function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'n', 'n', 'a', 'h']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <br />
                    <p id="H">H</p>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={13}/>

                    <br /> 
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19}/>
                </h1>
                <h2> Fullstack Developer / Experienced in the JavaScript - React.js - Rails</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Loader type="pacman" />
        </div>
    )
}

export default Home