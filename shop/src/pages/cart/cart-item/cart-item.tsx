import React from 'react';
import {useAppDispatch} from 'store';
import {changeItemCount, removeItem} from 'store/reducers/cart/cart';

import './cart-item.scss';

type Props = {
    id: string;
    title: string;
    price: number;
    count: number;
    imageUrl: string;
};

export const CartItem = ({id, title, price, count, imageUrl}: Props) => {
    const dispatch = useAppDispatch();

    const onChangeCartItemCount = (count: number) => () => {
        dispatch(changeItemCount({id, count}));
    };

    const onClickRemove = () => {
        if (window.confirm('Are you sure you want to remove this item?')) {
            dispatch(removeItem(id));
        }
    };

    return (
        <div className="cart-item">
            <div className="cart-item__image-box">
                <img src={imageUrl} alt="Cart Item" width="190" height="200"></img>
            </div>
            <div className="cart-item__title-container">
                <h1 className="cart-container__cart-title">{title}</h1>
            </div>
            <div className="cart-item__counter">
                <button
                    onClick={onChangeCartItemCount(1)}
                    className="cart-item__action-btn">
                    +
                </button>
                <div className="cart-item__items-count">{count}</div>
                <button
                    disabled={count === 1}
                    onClick={onChangeCartItemCount(-1)}
                    className="cart-item__action-btn">
                    -
                </button>
            </div>
            <div className="cart-item__prices">
                <div className="cart-item__total-price">${price * count}</div>
                <button onClick={onClickRemove} className="cart-item__remove-item">
                    <u>Remove</u>
                </button>
            </div>
        </div>
    );
};
