import React from 'react';
import logo from "../../Assets/logo.png";
import '../Header/Header.css'

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container d-flex justify-content-around align-items-center">
                    <a className="navbar-brand" href="# ">
                        <img src={logo} alt="FunnelStory Logo" className="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#product">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#resources">Resources</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#careers">Careers</a>
                            </li>
                        </ul>
                        <button className="btn my-2 my-lg-0" type="button">Sign Up</button>
                        <button id='reqDemo' className="btn btn-primary my-2 my-lg-0" type="button">Request Demo</button>
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;
