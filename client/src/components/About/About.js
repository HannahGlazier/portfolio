import React, { useState, useEffect } from 'react'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { DiJsBadge, DiRuby, DiCss3Full, DiReact, DiHtml5, DiGitBranch} from "react-icons/di";
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
                <p>Experienced in JavaScript, React, Ruby, Ruby on Rails, HTML, CSS, Material UI, Semantic UI, Git, VC, React Signature Canvas, Authorization </p>
                <p>I am a developer who recently made the transition to tech from the nonprofit world. My background is in international affairs, refugee resettlement, and public benefits. This experience led me to develop a love for navigating and developing complex systems, especially with respect to increasing efficiency and user experience. My path to coding and development was not a direct one, but I quickly fell in love with the unique balance of the technical and the creative and the idea of an industry that encourages constant and continued learning. I am eager build and learn more. </p>
                <p>I would love to chat about future opportunities and collaborations!</p>
                <a className="flat-button" href="https://drive.google.com/file/d/1rDDDQ_hi8jHrHrdHSrwJD-EaGDhvlH4-/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <DiGitBranch />
                    </div>
                    <div className="face2">
                        <DiRuby />
                    </div>
                    <div className="face3">
                        <DiCss3Full />
                    </div>
                    <div className="face4">
                        <DiReact />
                    </div>
                    <div className="face5">
                        <DiHtml5 />
                    </div>
                    <div className="face6">
                        <DiJsBadge />
                    </div>
                </div>
            </div>
            <Loader type="line-scale" />
        </div>
    )
}

export default About