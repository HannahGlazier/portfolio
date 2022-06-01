import React, { useEffect, useState, useRef } from 'react'
import './index.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import emailjs from '@emailjs/browser'

function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
        .sendForm(
            'gmail',
            'template_j0wc5ys',
            form.current,
            '108HyNx1NmOuOztU8'
        )
        .then(
            () => {
            alert('Message successfully sent!')
            window.location.reload(false)
            },
            () => {
            alert('Failed to send the message, please try again')
            }
        )
    }

    return (
        <div>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>Currently seeking full-stack, front end, and backend opportunities. Please feel free to contact me here: </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required></input>
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required></input>
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject"/> 
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND"></input> 
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
}

export default Contact