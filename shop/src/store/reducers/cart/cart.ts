import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getTotalPrice} from '../../../utils/getTotalPrice';

import type {CartItem, CartSliceState} from './types';
import type {RootState} from 'store';


const initialState: CartSliceState = {
    totalPrice: 0,
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            state.items.push({
                ...action.payload,
                count: 1,
            });
            state.totalPrice = getTotalPrice(state.items);
        },
        plusItem(state, action: PayloadAction<string>) {
            const item = state.items.find((obj) => obj.id === action.payload);

            if (item) {
                item.count++;
                state.totalPrice = getTotalPrice(state.items);
            }
        },
        minusItem(state, action: PayloadAction<string>) {
            const findItem = state.items.find((obj) => obj.id === action.payload);

            if (findItem && findItem.count > 1) {
                findItem.count--;
                state.totalPrice = getTotalPrice(state.items);
            }
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter((obj) => obj.id !== action.payload);
            state.totalPrice = getTotalPrice(state.items);
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const cartSelector = (state: RootState) => state.cart;
export const cartItemByIdSelector = (id: string) => (state: RootState) =>
    cartSelector(state).items.find((obj) => obj.id === id);

export const {addItem, removeItem, clearItems, minusItem, plusItem} = cartSlice.actions;
export default cartSlice.reducer;
