import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {Search} from '../Search/search';
import {selectCart} from '../../redux/cart/slice';

import './Header.scss';

import logoSvg from '../assets/img/logo/logo-maynooth.svg';
import cartSvg from '../assets/img/icons/cart.svg';

export const Header = () => {
    const {items} = useSelector(selectCart);
    const totalCount = items.reduce((sum, {count}) => sum + count, 0);

    return (
        <header className="header">
            <div className="main-container header__nav-items">
                <Link to="/">
                    <img width="198" src={logoSvg} alt="logo"></img>
                </Link>
                <nav className="header__main-links">
                    <a className="header__main-link" href="/">living room</a>
                    <a className="header__main-link" href="/">bedroom</a>
                    <a className="header__main-link" href="/">kitchen &  dining</a>
                    <a className="header__main-link" href="/">contact</a>
                </nav>
                <div className="header__action-panel">
                    <Link to="/cart" className="header__cart-link">
                        <span className="header__total-items-count">{totalCount}</span>
                        <img src={cartSvg} alt="Cart icon"/>
                    </Link>
                    <Search/>
                </div>
            </div>
        </header>
    );
};
