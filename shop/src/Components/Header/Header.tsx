import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import "./Header.css";
import Search from '../Search/index';
import { selectCart } from '../../redux/slices/cartSlice';

import logoSvg from '../assets/img/logo/logo-maynooth.svg';
import cartSvg from '../assets/img/icons/cart.svg';

export const Header: React.FC = () => {
    const { items } = useSelector(selectCart);
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
                        <Link to="/cart" className="cart-ref">
                            <span className='header-cart__count'>{totalCount}</span>
                            <img className='header-cart' src={cartSvg} alt='cart icon'></img>
                        </Link>
                        <Search />
                    </div>
                </div>
            </div>
        </header>
    )
}