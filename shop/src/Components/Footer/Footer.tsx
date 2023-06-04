import React from 'react';
import {Link} from 'react-router-dom';

import './Footer.css';

import facebookLogo from '../assets/img/icons/facebook.svg';
import footerLogo from '../assets/img/logo/maynooth-logo.svg';
import instaLogo from '../assets/img/icons/insta.svg';
import twitterLogo from '../assets/img/icons/twitter.svg';
import googleLogo from '../assets/img/icons/google.svg';


export const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <div className='main-container'>
                <div className='nav-wrap'>
                    <nav className='nav-footer-left nav-footer-style'>
                        <ul className='nav-list-footer'>
                            <li><Link to="/">Living Room</Link></li>
                            <li><Link to="/">Bedroom</Link></li>
                            <li><Link to="/">Kitchen & Dining</Link></li>
                        </ul>
                    </nav>
                    <img src={footerLogo} alt="logo" className='nav-footer-logo'></img>
                    <nav className='nav-footer-right nav-footer-style'>
                        <ul className='nav-list-footer'>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Blog</Link></li>
                            <li><Link to="/">Support</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className='footer-networks-logo'>
                    <Link to='/' className='social-icon'>
                        <img src={facebookLogo} alt="logo facebook" className='facebook-logo'></img>
                    </Link>
                    <Link to='/' className='social-icon'>
                        <img src={googleLogo} alt="logo google" className='google-logo'></img>
                    </Link>
                    <Link to='/' className='social-icon'>
                        <img src={instaLogo} alt="logo instagram" className='insta-logo'></img>
                    </Link>
                    <Link to='/' className='social-icon'>
                        <img src={twitterLogo} alt="logo twitter" className='twitter-logo'></img>
                    </Link>
                </div>
                <div className='footer-copyright'>
                    <p>© 2010 — 2020</p>
                    <p>Privacy — Terms</p>
                </div>
            </div>
        </footer>
    );
};
