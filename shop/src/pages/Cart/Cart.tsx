import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {CartItem} from './CartItem/CartItem';
import {CartEmpty} from './CartEmpty/CartEmpty';
import {clearItems, selectCart} from '../../redux/cart/slice';

import './Cart.scss';

export const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const {totalPrice, items} = useSelector(selectCart);
    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

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
                <h3 className="cart-container__heading">Shopping Cart</h3>
                <button onClick={onClickClear} className="cart-container__action">Remove all</button>
            </div>
            <div className='cart-container__items'>
                {items.map((item: any) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <hr/>
            <div className="cart-container__checkout">
                <div className="cart-container__total">
                    <div className="cart-container__subtotal">
                        Subtotal ({totalCount} items): ${totalPrice}
                    </div>
                </div>
                <button className="cart-container__button">Checkout</button>
                <Link to="/"><button className="cart-container__button">Go back to the main page</button></Link>
            </div>
        </div>
    );
};
