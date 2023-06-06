import React from 'react';
import {Link} from 'react-router-dom';

import './Footer.scss';

import facebookLogo from '../assets/img/icons/facebook.svg';
import footerLogo from '../assets/img/logo/maynooth-logo.svg';
import instaLogo from '../assets/img/icons/insta.svg';
import twitterLogo from '../assets/img/icons/twitter.svg';
import googleLogo from '../assets/img/icons/google.svg';


export const Footer = () => (
    <footer className="footer">
        <div className="main-container">
            <div className="footer__links-container">
                <div className="footer__links">
                    <Link className="footer__link" to="/">Living Room</Link>
                    <Link className="footer__link" to="/">Bedroom</Link>
                    <Link className="footer__link" to="/">Kitchen & Dining</Link>
                </div>
                <img src={footerLogo} alt="logo" className="footer__logo"></img>
                <div className="footer__links">
                    <Link className="footer__link" to="/">About</Link>
                    <Link className="footer__link" to="/">Blog</Link>
                    <Link className="footer__link" to="/">Support</Link>
                </div>
            </div>
            <div className="footer__social-icons">
                <Link to='/' className="footer__social-icon">
                    <img src={facebookLogo} alt="logo facebook" className="facebook-logo"></img>
                </Link>
                <Link to='/' className="footer__social-icon">
                    <img src={googleLogo} alt="logo google" className="google-logo"></img>
                </Link>
                <Link to='/' className="footer__social-icon">
                    <img src={instaLogo} alt="logo instagram" className="insta-logo"></img>
                </Link>
                <Link to='/' className="footer__social-icon">
                    <img src={twitterLogo} alt="logo twitter" className="twitter-logo"></img>
                </Link>
            </div>
            <div className="footer__copyright">
                <p>© 2010 — {new Date().getFullYear()}</p>
                <p>Privacy — Terms</p>
            </div>
        </div>
    </footer>
);
