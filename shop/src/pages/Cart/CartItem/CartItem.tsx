import React from 'react';
import {useDispatch} from 'react-redux';

import {addItem, minusItem, removeItem} from '../../../redux/cart/slice';
import {CartItem as CartItemType} from '../../../redux/cart/types';

import './CartItem.scss';

type CartItemProps = {
    id: string;
    title: string;
    price: number;
    count: number;
    imageUrl: string;
};

export const CartItem: React.FC<CartItemProps> = ({id, title, price, count, imageUrl}) => {
    const dispatch = useDispatch();
    const onClickPlus = () => {
        dispatch(
            addItem({
                id,
            }as CartItemType),
        );
    };

    const onClickMinus = () => {
        dispatch(minusItem(id));
    };

    const onClickRemove = () => {
        if (window.confirm('Are you sure you want to remove this item?')) {
            dispatch(removeItem(id));
        }
    };

    return (
        <div className="cart-item">
            <div className="cart-item__image-box">
                <img className='cart-item__image' src={imageUrl} alt="cart item" width="190" height="200"></img>
            </div>
            <div className="cart-item__product-column">
                <div className="cart-item__about">
                    <h1 className="cart-item__title">{title}</h1>
                </div>
                <div className="cart-item__counter">
                    <button onClick={onClickPlus} className="cart-item__btn">+</button>
                    <div className="cart-item__count">{count}</div>
                    <button disabled={count === 1} onClick={onClickMinus} className="cart-item__btn">-</button>
                </div>
                <div className="cart-item__prices">
                    <div className="cart-item__amount">${price * count}</div>
                    <button onClick={onClickRemove} className="cart-item__remove"><u>Remove</u></button>
                </div>
            </div>
        </div>
    );
};
