import React from 'react';
import {Link} from 'react-router-dom';

import {useAppSelector, useAppDispatch} from 'store';
import {CartItem} from './cart-item/cart-item';
import {CartEmpty} from './cart-empty/cart-empty';
import {clearItems, cartSelector} from 'store/reducers/cart/cart';
import {getTotalItemsCount} from 'utils/getTotalItemsCount';

import './cart.scss';

export const Cart = () => {
    const dispatch = useAppDispatch();
    const {totalPrice, items} = useAppSelector(cartSelector);
    const totalCount = getTotalItemsCount(items);

    const onClickClear = () => {
        if (window.confirm('Do you want clear the cart?')) {
            dispatch(clearItems());
        }
    };

    const cartItems = Object.values(items);

    if (!cartItems.length) {
        return <CartEmpty />;
    }

    return (
        <div className="cart-container">
            <div className="cart-container__header">
                <h3 className="cart-container__cart-title">Shopping Cart</h3>
                <button onClick={onClickClear} className="cart-container__remove-all-btn">Remove all</button>
            </div>
            <div>
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <hr className="cart-container__horizontal-line"/>
            <div className="cart-container__checkout">
                <div className="cart-container__total-price">
                    Subtotal ({totalCount} items): ${totalPrice}
                </div>
                <button className="cart-container__checkout-btn">Checkout</button>
                <Link to="/">
                    <button className="cart-container__checkout-btn">Go back to the main page</button>
                </Link>
            </div>
        </div>
    );
};
