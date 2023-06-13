import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Card.scss'; 
import {CartItem} from '../../../redux/cart/types';

import {addItem, selectCartItemById} from '../../../redux/cart/slice';

type FurnitureBlockProps = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    rating: number;
};

export const Card:React.FC<FurnitureBlockProps> = ({id, title, price, imageUrl}) => {
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
    };

    return (
        <div className='card'>
            <div className='card__inner'>
                <img src={imageUrl} alt='Furniture' width="309" height="309"></img>
                <div className='card__price'>
                    <h3>{title}</h3>
                    <span>{price} $</span>
                </div>
                <div className='card__button-wrap'>
                    <button onClick={onClickAddProd} className='card__button'>+ Add to Bag
                        {addedCount > 0 && <i className='card__button-counter'>{addedCount}</i>}
                    </button>
                </div>
            </div>
        </div>
    );
};


