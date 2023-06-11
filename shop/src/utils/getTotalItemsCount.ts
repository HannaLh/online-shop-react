import {CartItems} from 'store/reducers/cart/types';

type GetTotalItemsCount = (items: CartItems) => number;

export const getTotalItemsCount: GetTotalItemsCount = items => (
    Object.values(items)
        .reduce((sum, {count}) => sum + count, 0)
);
