import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getTotalPrice} from './utils/getTotalPrice';
import {Storage} from 'utils/storage';
import {CART_ITEMS_KEY} from '../../../constants';
import {saveCartToStorage} from './utils/saveCartToStorage';

import type {CartItem, CartSliceState} from './types';
import type {RootState} from 'store';

const storage = Storage.get()[CART_ITEMS_KEY] || {};

const initialState: CartSliceState = {
    totalPrice: storage.totalPrice || 0,
    items: storage.items || {},
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, {payload}: PayloadAction<CartItem>) {
            const id = payload.id;

            state.items[id] = state.items[id] || payload;
            state.items[id].count++;

            state.totalPrice = getTotalPrice(state.items);
            saveCartToStorage(state.items, state.totalPrice);
        },
        changeItemCount(state, {payload: {id, count}}: PayloadAction<{id: string, count: number}>) {
            const item = state.items[id];

            if (item) {
                item.count = Math.max(0, item.count + count);
                state.totalPrice = getTotalPrice(state.items);
                saveCartToStorage(state.items, state.totalPrice);
            }
        },
        removeItem(state, {payload}: PayloadAction<string>) {
            delete state.items[payload];
            state.totalPrice = getTotalPrice(state.items);
            saveCartToStorage(state.items, state.totalPrice);
        },
        clearItems(state) {
            state.items = {};
            state.totalPrice = 0;
            saveCartToStorage(state.items, state.totalPrice);
        },
    },
});

export const cartSelector = (state: RootState) => state.cart;
export const cartItemByIdSelector = (state: RootState, id: string) =>
    cartSelector(state).items[id];

export const {addItem, removeItem, clearItems, changeItemCount} = cartSlice.actions;
export default cartSlice.reducer;
