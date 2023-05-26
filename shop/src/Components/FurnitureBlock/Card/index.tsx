import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./Card.css"; 
import { CartItem } from '../../../redux/cart/types';

import { addItem, selectCartItemById } from '../../../redux/cart/slice';

type FurnitureBlockProps = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    rating: number;
};

export const Card:React.FC<FurnitureBlockProps> = ({ id, title, price, imageUrl }) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItemById(id));
    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAddProd = () => {
        const item: CartItem = {
            id,
            title,
            price,
            imageUrl,
            count: 0,
        };
        dispatch(addItem(item));
    }

    return (
        <div className='card'>
            <div className='card-inner'>
                <img src={imageUrl} alt='Furniture' width="309" height="309"></img>
                <div className='card-price'>
                    <h3>{title}</h3>
                    <span>{price} $</span>
                </div>
                <div className='cart-button-wrap'>
                    <button onClick={onClickAddProd} className='cart-button'>+ Add to Bag
                        {addedCount > 0 && <i className='cart-button__counter'>{addedCount}</i>}
                    </button>
                </div>
            </div>
        </div>
    )
}