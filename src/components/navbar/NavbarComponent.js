import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavbarComponent.css';

import logo from '../../assets/logo.jpg';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const closeNav = () => {
    setIsNavOpen(false); 
  };   
  
  return (
    <header className="nav_header">
      <div className="nv_logo" onClick={closeNav} style={{ cursor: 'pointer' }}>
        <Link to="/">
          <img className="logo_class" src={logo} alt="logo" />
        </Link>
      </div>
      <input type="checkbox" id="nav_check" checked={isNavOpen} onChange={() => setIsNavOpen(!isNavOpen)} hidden />
      <nav style={{ left: isNavOpen ? '0' : '-300px', transition: 'left 0.3s ease-in-out' }}>
        <div className="nv_logo">
          <Link to="/">
            <img className="logo_class" src={logo} alt="logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeNav}>
              Intro
            </Link>
          </li>
          <li>
            <Link to="/education" className={location.pathname === '/education' ? 'active' : ''} onClick={closeNav}>
              Education
            </Link>
          </li>
          <li>
            <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={closeNav}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''} onClick={closeNav}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="https://www.dropbox.com/scl/fi/wabot0mj8m5uhrjc6r2k7/Shivam-Bhosle-Resume.pdf?rlkey=a9q2n89tcs5q8fv8k2sg4sljs&dl=0"
              className={`${location.pathname === '/experience' ? 'active ' : ''}CV`} onClick={closeNav} target="_blank">
              Download CV
            </Link>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav_check" className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </header>
  );
}
