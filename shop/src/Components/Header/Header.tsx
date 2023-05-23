import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import "./Header.css";
import logoSvg from '../assets/img/logo/logo-maynooth.svg';
import Search from '../Search/index';
import { selectCart } from '../../redux/slices/cartSlice';

export default function Header() {
    const { items, totalPrice } = useSelector(selectCart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-nav'>
                    <Link to="/">
                        <img width="198" src={logoSvg} alt="logo"></img>
                    </Link>
                    <nav className='nav'>
                        <ul className='nav-list'>
                            <li className='nav-item'><a href="/">living room</a></li>
                            <li className='nav-item'><a href="/">bedroom</a></li>
                            <li className='nav-item'><a href="/">kitchen &  dining</a></li>
                            <li className='nav-item'><a href="/">contact</a></li>
                        </ul>
                    </nav>
                    <div className='header-menu__tools'>
                        <Link to="/cart">
                            <span>{totalCount} items</span>
                            <span>{totalPrice}$</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM0 0V2H2L5.6 9.59L4.25 12.04C4.09 12.32 4 12.65 4 13C4 14.1 4.9 15 6 15H18V13H6.42C6.28 13 6.17 12.89 6.17 12.75L6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C19.96 3.34 20 3.17 20 3C20 2.45 19.55 2 19 2H4.21L3.27 0H0ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" fill="white"/>
                            </svg>
                        </Link>
                        <a href="/">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="white"/>
                            </svg>
                        </a>
                        <Search />
                    </div>
                </div>
            </div>
        </header>
    )
}
