import React from "react";
import logo from "../logo.png";
// REACT FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">

        <a className="navbar-brand" href="nowhere"><img className="logo" src={logo} alt="logo.."/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
        aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon" style={{color: "white"}}></span> */}
            <FontAwesomeIcon icon={faBars} style={{color: "white"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="nowhre">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="nowhere">About me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="nowhere">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="nowhere">How work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="nowhere">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="nowhere">Contacts</a>
                </li>

            </ul>
        </div>
    </div>
    </nav>
  )
};

export default Navbar;
