import React from 'react';
import {Link} from 'react-router-dom';

import {useAppSelector} from 'store';
import {Search} from '../search/search';
import {cartSelector} from 'store/reducers/cart/cart';

import './header.scss';

import logoSvg from 'assets/img/logo/logo-maynooth.svg';
import cartSvg from 'assets/img/icons/cart.svg';

export const Header = () => {
    const {items} = useAppSelector(cartSelector);
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
                    <Search/>
                    <Link to="/cart" className="header__cart-link">
                        <span className="header__total-items-count">{totalCount}</span>
                        <img src={cartSvg} alt="Cart icon"/>
                    </Link>
                </div>
            </div>
        </header>
    );
};
