import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addItem, selectCartItemById} from '../../redux/cart/slice';

import './furniture-card.scss';

import type {CartItem} from '../../redux/cart/types';


type Props = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    rating: number;
};

export const FurnitureCard = ({id, title, price, imageUrl}: Props) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItemById(id));
    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAddProd = () => {
        // TODO Rework how to add item to bag
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
        <div className="furniture-card">
            <img src={imageUrl} alt='Furniture' width="309" height="309"></img>
            <div className="furniture-card__price-container">
                <h3 className="furniture-card__price-title">
                    {title}
                </h3>
                <span className="furniture-card__price">
                    {price} $
                </span>
            </div>
            <div className="furniture-card__add-to">
                <button onClick={onClickAddProd} className="furniture-card__add-to-btn">
                    + Add to Bag
                    {addedCount > 0 && <div className="furniture-card__add-to-count">{addedCount}</div>}
                </button>
            </div>
        </div>
    );
};
