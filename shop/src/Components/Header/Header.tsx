import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import './Header.css';
import Search from '../Search/Search';
import {selectCart} from '../../redux/cart/slice';

import logoSvg from '../../assets/img/logo/logo-maynooth.svg';
import cartSvg from '../../assets/img/icons/cart.svg';

export const Header: React.FC = () => {
    const {items} = useSelector(selectCart);
    const isMounted = React.useRef(false);

    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

    React.useEffect(() => {
    if (isMounted.current) {
        const json = JSON.stringify(items);
        localStorage.setItem('cart', json);
        }
        isMounted.current = true;
    }, [items]);

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
