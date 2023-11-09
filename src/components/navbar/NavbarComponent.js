import React from 'react'
import { useNavigate } from "react-router-dom";
import './NavbarComponent.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/lg.png'


export default function Navbar() {
    const navigate = useNavigate();

    const navigateToMainPage = () => {
        navigate("/");
      };

    return (
        <header className='nav_header'>
            <div className="nv_logo" onClick={navigateToMainPage} style={{ cursor: 'pointer' }}>
                <img className="logo_class" src={logo} alt="logo" />
            </div>
            <input type="checkbox" id="nav_check" hidden />
                <nav>
                    <div className="nv_logo">
                        <img className="logo_class" src={logo} alt="logo" />
                    </div>
                    <ul>
                        <li>
                            <Link to="/" className="active">Intro</Link>
                        </li>
                        <li>
                            <Link to="/education">Education</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/experience">Experience</Link>
                        </li>
                    </ul>
                </nav>
                <label for="nav_check" className="hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </label>
        </header>
    )
}