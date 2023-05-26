import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/cart/slice';
import { CartItem as CartItemType } from '../redux/cart/types';

type CartItemProps = {
    id: string;
    title: string;
    price: number;
    count: number;
    imageUrl: string;
};

export const CartItem: React.FC<CartItemProps> = ({ id, title, price, count, imageUrl, }) => {
    const dispatch = useDispatch();
    const onClickPlus = () => {
        dispatch(
            addItem({
                id,
            }as CartItemType),
        )
    }

    const onClickMinus = () => {
        dispatch(minusItem(id))
    }

    const onClickRemove = () => {
        if (window.confirm('Are you sure you want to remove this item?')) {
            dispatch(removeItem(id));
        }
    }

    return (
        <div className="cart-item">
            <div className="image-box">
                <img className='cart-item-image' src={imageUrl} alt="cart item" width="190" height="200"></img>
            </div>
            <div className="about">
                <h1 className="title">{title}</h1>
            </div>
            <div className="counter">
                <button onClick={onClickPlus} className="btn">+</button>
                <div className="count">{count}</div>
                <button disabled={count === 1} onClick={onClickMinus} className="btn">-</button>
            </div>
            <div className="prices">
                <div className="amount">${price * count}</div>
                <button onClick={onClickRemove}className="remove"><u>Remove</u></button>
            </div>
        </div>
    )
}
