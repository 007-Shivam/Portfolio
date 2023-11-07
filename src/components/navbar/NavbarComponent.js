import React from 'react'
import './NavbarComponent.css'
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <header>
            <input type="checkbox" name="" id="chk1" />
            <div className="logo">
                <h1>Web Master</h1>
            </div>
            <ul>
                <div className="hm"></div>
                <li className="center">
                    <Link to="/">Intro</Link>
                </li>
                <li className="center">
                    <Link to="/education">Education</Link>
                </li>
                <li className="center">
                    <Link to="/project">Projects</Link>
                </li>
                <li className="center">
                    <Link to="/experience">Experience</Link>
                </li>
                <li className="sc">
                    <Link to="https://www.linkedin.com/in/shivambhosle007/" target='_blank'><i className="fa fa-linkedin"></i></Link>
                    <Link to="https://github.com/007-Shivam" target='_blank'><i className="fa fa-github"></i></Link>
                    <Link to="https://shivambhosle.vercel.app/" target='_blank'><i className="fa fa-globe"></i></Link>
                    <Link to="https://instagram.com/shivam__2709?igshid=MmVlMjlkMTBhMg==" target='_blank'><i className="fa fa-instagram"></i></Link>
                </li>
            </ul>
            <div className="menu">
                <label htmlFor="chk1">
                    <i className="fa fa-bars"></i>
                </label>
            </div>
        </header>
    )
}