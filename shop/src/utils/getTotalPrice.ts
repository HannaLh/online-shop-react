import type {CartItem} from 'store/reducers/cart/types';

export const getTotalPrice = (items: CartItem[]) => (
    items.reduce((sum, {price, count}) => price * count + sum, 0)
);
