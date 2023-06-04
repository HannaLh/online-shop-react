import type {CartItem} from '../redux/cart/types';

export const getTotalPrice = (items: CartItem[]) => (
    items.reduce((sum, {price, count}) => price * count + sum, 0)
);
