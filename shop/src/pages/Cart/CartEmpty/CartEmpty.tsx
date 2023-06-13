import React from 'react';
import {Link} from 'react-router-dom';

import cartEmptyImg from '../../../assets/img/icons/empty-cart.png';

import './CartEmpty.scss';

export const CartEmpty: React.FC = () => {
    return (
        <div className="cart cart-empty">
                <img src={cartEmptyImg} alt="Empty cart" width="40" height="40"/>
                <h2>
                    Your cart is empty
                </h2>
                <Link to="/" className="cart-empty__button-base cart-empty__button-back">
                    <button>Back to shopping</button>
                </Link>
        </div>
    );
};
