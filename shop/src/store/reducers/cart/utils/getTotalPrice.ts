import {CartItems} from 'store/reducers/cart/types';

type GetTotalPrice = (items: CartItems) => number;

export const getTotalPrice: GetTotalPrice = items => (
    Object.values(items)
        .reduce((sum, {price, count}) => price * count + sum, 0)
);
