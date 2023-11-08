import React from 'react'
import './HeroComponent.css'
import Circle from '../../assets/bg.png';
import Me from '../../assets/me.png';
import Mascot from '../../assets/final.gif';
import New from '../../assets/new_bg.png'



export default function Hero() {
    return (
        <div className="hero-container">
            <div className="abt-me">
                <p className="hello">Hello, I'm</p>
                <p className="bld">Shivam Bhosle.</p>
                <p className="my-des">I am a passionate Android Developer based in India.<br />Welcome to my Portfolio </p>
                <div className="socialIcons">
                    <a className="likd" href="https://www.linkedin.com/in/shivambhosle007/" target='_blank'><i className="fa fa-linkedin"></i></a>
                    <a className="git" href="https://github.com/007-Shivam" target='_blank'><i className="fa fa-github"></i></a>
                    <a className="glb" href="https://shivambhosle.vercel.app/"><i className="fa fa-globe"></i></a>
                    <a className="inst" href="https://instagram.com/shivam__2709?igshid=MmVlMjlkMTBhMg==" target='_blank'><i className="fa fa-instagram"></i></a>
                </div>

                <img className="and-gif" src={Mascot} alt="Small GIF" />
            </div>
            <div className="me-container">
                <img className="green-circles" src={New} alt="bg" />
                <img className="me" src={Me} alt="pro" />
            </div>
        </div>  
    );
}
