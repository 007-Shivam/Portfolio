import React from 'react'
import './FooterComponent.css'

export default function Footer() {
  return (
    <div className="mainFooter">
      <footer>
        <div className="footerContainer">
          <div className="socialIcons">
            <a className="likd" href="https://www.linkedin.com/in/shivambhosle007/" target='_blank' rel="noreferrer"><i className="fa fa-linkedin"></i></a>
            <a className="git" href="https://github.com/007-Shivam" target='_blank' rel="noreferrer"><i className="fa fa-github"></i></a>
            <a className="glb" href="https://shivambhosle.vercel.app/" rel="noreferrer"><i className="fa fa-globe"></i></a>
            <a className="inst" href="https://instagram.com/shivam__2709?igshid=MmVlMjlkMTBhMg==" target='_blank' rel="noreferrer"><i className="fa fa-instagram"></i></a>
          </div>

          <div className="footerBottom">
            <p>Copyright &copy;2023 Designed by <span className="my-name">Shivam Bhosle</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}