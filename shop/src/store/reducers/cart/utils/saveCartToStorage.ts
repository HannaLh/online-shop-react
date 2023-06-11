import {CartItems} from '../types';
import {Storage} from 'utils/storage';
import {CART_ITEMS_KEY} from '../../../../constants';

export const saveCartToStorage = (items: CartItems, totalPrice: number) => {
    Storage.removeKey(CART_ITEMS_KEY);
    Storage.set(CART_ITEMS_KEY, {items, totalPrice});
};
