import React from 'react';

import logo from '../assets/logo.svg';

import '../css/Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-6 footer-left">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <img src={logo} alt=""/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-6 align-right footer-right">
                            <div className="col-4">
                                <h4>Company</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="/">About</a>
                                    </li>
                                    <li>
                                        <a href="/about">Features</a>
                                    </li>
                                    <li>
                                        <a href="/products">Works</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Career</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <h4>Helpful Links</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="/">Customer Support</a>
                                    </li>
                                    <li>
                                        <a href="/about">Delivery Details</a>
                                    </li>
                                    <li>
                                        <a href="/products">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-bottom">
                        <p className="text-xs-center">
                        &copy;{new Date().getFullYear()}
                        Aryo Romadhon Vardhana - All Rights Reserved
                            </p>
                            <div className="sosmed">
                                <a href="https://www.facebook.com/aryo.romadhon.7" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/aryoromadhon/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-instagram"></i>
                                </a>
                                
                            </div>
                </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;
