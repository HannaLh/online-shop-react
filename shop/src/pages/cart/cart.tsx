import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {CartItem} from './cart-item/cart-item';
import {CartEmpty} from './cart-empty/cart-empty';
import {clearItems, cartSelector} from 'store/cart/slice';

import './cart.scss';

export const Cart = () => {
    const dispatch = useDispatch();
    const {totalPrice, items} = useSelector(cartSelector);
    const totalCount = (items || null).reduce((sum: number, item: any) => sum + item.count, 0);

    const onClickClear = () => {
        if (window.confirm('Do you want clear the cart?')) {
            dispatch(clearItems());
        }
    };

    if (!totalPrice) {
        return <CartEmpty />;
    }

    return (
        <div className="cart-container">
            <div className="cart-container__header">
                <h3 className="cart-container__cart-title">Shopping Cart</h3>
                <button onClick={onClickClear} className="cart-container__remove-all-btn">Remove all</button>
            </div>
            <div>
                {items.map((item: any) => (
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
