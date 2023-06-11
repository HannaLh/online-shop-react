import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getTotalPrice} from './utils/getTotalPrice';

import type {CartItem, CartSliceState} from './types';
import type {RootState} from 'store';


const initialState: CartSliceState = {
    totalPrice: 0,
    items: {},
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
        },
        changeItemCount(state, {payload: {id, count}}: PayloadAction<{id: string, count: number}>) {
            const item = state.items[id];

            if (item) {
                item.count = Math.max(0, item.count + count);
                state.totalPrice = getTotalPrice(state.items);
            }
        },
        removeItem(state, {payload}: PayloadAction<string>) {
            delete state.items[payload];
            state.totalPrice = getTotalPrice(state.items);
        },
        clearItems(state) {
            state.items = {};
            state.totalPrice = 0;
        },
    },
});

export const cartSelector = (state: RootState) => state.cart;
export const cartItemByIdSelector = (state: RootState, id: string) =>
    cartSelector(state).items[id];

export const {addItem, removeItem, clearItems, changeItemCount} = cartSlice.actions;
export default cartSlice.reducer;
