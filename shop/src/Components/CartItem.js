import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';

export default function CartItem({ id, title, price, count, imageUrl }) {
    const dispatch = useDispatch();
    const onClickPlus = () => {
        dispatch(
            addItem({
                id,
            })
        )
    }

    const onClickMinus = () => {
        dispatch(
            minusItem(id)
        )
    }

    const onClickRemove = () => {
        if (window.confirm('Are you sure you want to remove this item?')) {
            dispatch(removeItem(id));
        }
    }

    return (
        <div className="Cart-Item">
                    <div className="image-box">
                        <img className='cart-item-image' src={imageUrl} alt="cart item" width="190" height="200"></img>
                    </div>
                    <div className="about">
                        <h1 className="title">{title}</h1>
                    </div>
                    <div className="counter">
                        <button onClick={onClickPlus} className="btn">+</button>
                        <div className="count">{count}</div>
                        <button onClick={onClickMinus} className="btn">-</button>
                    </div>
                    <div className="prices">
                        <div className="amount">${price * count}</div>
                        <button onClick={onClickRemove}className="remove"><u>Remove</u></button>
                    </div>
                </div>
    )
}
