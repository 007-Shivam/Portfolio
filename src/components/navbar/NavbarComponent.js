import React from 'react'
import './NavbarComponent.css'

export default function NavbarComponent() {
    return (
        <header>
            <input type="checkbox" name="" id="chk1" />
            <div className="logo">
                <h1>Web Master</h1>
            </div>
            <ul>
                <div className="hm"></div>
                <li className="center">
                    <a href="#">Intro</a>
                </li>
                <li className="center">
                    <a href="#">Education</a>
                </li>
                <li className="center">
                    <a href="#">Projects</a>
                </li>
                <li className="center">
                    <a href="#">Experience</a>
                </li>
                <li className="sc">
                    <a href=""><i className="fa fa-linkedin"></i></a>
                    <a href=""><i className="fa fa-github"></i></a>
                    <a href=""><i className="fa fa-globe"></i></a>
                    <a href=""><i className="fa fa-instagram"></i></a>
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