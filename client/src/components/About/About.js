import React, { useState, useEffect } from 'react'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

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
                <p>TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST</p>
                <p>TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST</p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner"></div>
            </div>
        </div>
    )
}

export default About