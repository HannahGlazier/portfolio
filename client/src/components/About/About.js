import React, { useState, useEffect } from 'react'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faJs,
    faCss3,
    faRuby,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

function About() {
const [letterClass, setLetterClass] = useState('text-animate')

useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
}, [])

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Experienced in JavaScript, React, Ruby, Ruby on Rails, HTML, CSS, Material UI, Semantic UI, Git, Version Control, React Signature Canvas, Authorization </p>
                <p>I am a developer who recently made the transition to tech from the nonprofit world. My background is in international affairs, refugee resettlement, and public benefits. This experience led me to develop a love for navigating and developing complex systems, especially in respect to increasing efficiency and user experience. My path to coding and development was not a direct one, but I quickly fell in love with the unique balance of the technical and the creative and the idea of an industry that encourages constant and continued learning. I am eager to get started and build and learn more. </p>
                <p>I would love to chat about future opportunities and collaborations!</p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        {/* <FontAwesomeIcon icon={faJs} color="#DD0031" /> */}
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon  icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        {/* <FontAwesomeIcon icon={faRuby} color="#EC4D28" /> */}
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
}

export default About