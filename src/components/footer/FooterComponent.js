import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import './FooterComponent.css'

export default function FooterComponent() {
  return (
    <div className="mainFooter">
      <footer>
        <div className="footerContainer">
          <div className="socialIcons">
            <a className="likd" href=""><i className="fa fa-linkedin"></i></a>
            <a className="git" href=""><i className="fa fa-github"></i></a>
            <a className="glb" href=""><i className="fa fa-globe"></i></a>
            <a className="inst" href=""><i className="fa fa-instagram"></i></a>
          </div>

          <div className="footerBottom">
            <p>Copyright &copy;2023 Designed by <span className="designer">Shivam Bhosle</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}