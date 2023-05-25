import React from 'react';
import { Link } from 'react-router-dom';
import cartEmptyImg from './assets/img/icons/empty-cart.png'

export const CartEmpty: React.FC = () => {
    return (
        <div className="cart cart-empty">
                <img src={cartEmptyImg} alt="Empty cart" width="40" height="40"/>
                <h2>
                    Your cart is empty
                </h2>
                <Link to="/" className="button--back button--base">
                    <button>Back to shopping</button>
                </Link>
        </div>
    )
}
