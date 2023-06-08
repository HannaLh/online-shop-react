import type {CartItem} from 'store/cart/types';

export const getTotalPrice = (items: CartItem[]) => (
    items.reduce((sum, {price, count}) => price * count + sum, 0)
);
