import React from 'react'
import './HeroComponent.css'
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';
import { Typewriter } from "react-simple-typewriter";


import Me from '../../../assets/me.png';
import Mascot from '../../../assets/mascot.gif';
import New from '../../../assets/green_circles.png'

export default function Hero() {
    return (
        <div className=''>
            <div className="hero-container">
                <div className="abt-me">
                    <p className="hello">Hello, I'm</p>
                    <p className="bld">Shivam Bhosle.</p>
                    <p className="my-des">I am a passionate&nbsp;
                    <span className='font-extrabold'>
                    <Typewriter
                            words={[
                                "Android Developer",
                                "Frontend Developer",
                                "Software Developer",
                                "UI/UX Designer",
                            ]}
                            loop={0}
                            typeSpeed={60}
                            deleteSpeed={40}
                            delaySpeed={2000}
                        /> 
                    </span>
                    &nbsp;based in India.<br />Welcome to my Portfolio </p>
                    <Flip top >
                        <div className="mt-5 mb-4 socialIcons">
                            <a className="likd" href="https://www.linkedin.com/in/shivambhosle007/" target='_blank' rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                            <a className="git" href="https://github.com/007-Shivam" target='_blank' rel="noreferrer"><i className="fa fa-github"></i></a>
                            <a className="glb" href="mailto:shivambhosle270903@gmail.com"><i className="fa fa-envelope"></i></a>
                            <a className="inst" href="https://instagram.com/shivam__2709?igshid=MmVlMjlkMTBhMg==" target='_blank' rel="noreferrer"><i className="fa fa-instagram"></i></a>
                        </div>
                    </Flip>

                    <img className="and-gif" src={Mascot} alt="Small GIF" />

                </div>
                <div className="me-container">
                    <Bounce>
                        <img className="green-circles" src={New} alt="bg" />
                    </Bounce>
                    <Bounce>
                        <img className="me" src={Me} alt="pro" />
                    </Bounce>
                </div>
            </div>
        </div>

    );
}
