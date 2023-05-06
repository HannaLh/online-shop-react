import React from 'react';
import "./Header.css";
import logoSvg from '../assets/img/logo/logo-maynooth.svg';

import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-nav'>
                    <Link to="/">
                        <img width="198" src={logoSvg} alt="logo"></img>
                    </Link>
                    <nav className='nav'>
                        <ul className='nav-list'>
                            <li className='nav-item'><a href="/#">living room</a></li>
                            <li className='nav-item'><a href="/#">bedroom</a></li>
                            <li className='nav-item'><a href="/#">kitchen &  dining</a></li>
                            <li className='nav-item'><a href="/#">contact</a></li>
                        </ul>
                    </nav>
                    <div className='header-menu__tools'>
                        <Link to="/cart">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM0 0V2H2L5.6 9.59L4.25 12.04C4.09 12.32 4 12.65 4 13C4 14.1 4.9 15 6 15H18V13H6.42C6.28 13 6.17 12.89 6.17 12.75L6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C19.96 3.34 20 3.17 20 3C20 2.45 19.55 2 19 2H4.21L3.27 0H0ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" fill="white"/>
                            </svg>
                        </Link>
                        <a href="/#">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="white"/>
                            </svg>
                        </a>
                        <a href="/#">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_7_23)">
                                <path d="M7 9H2V7H7V9ZM7 12H2V14H7V12ZM20.59 19L16.76 15.17C15.96 15.69 15.02 16 14 16C11.24 16 9 13.76 9 11C9 8.24 11.24 6 14 6C16.76 6 19 8.24 19 11C19 12.02 18.69 12.96 18.17 13.75L22 17.59L20.59 19ZM17 11C17 9.35 15.65 8 14 8C12.35 8 11 9.35 11 11C11 12.65 12.35 14 14 14C15.65 14 17 12.65 17 11ZM2 19H12V17H2V19Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_7_23">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
