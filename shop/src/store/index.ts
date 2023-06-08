import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import filter from 'store/filter/slice';
import cart from 'store/cart/slice';
import furniture from 'store/furniture/slice';

const reducer = combineReducers({
    filter,
    cart,
    furniture,
});

export const store = configureStore({
    reducer,
    devTools: {
        name: 'Maynooth Store',
    },
});

export type RootState = ReturnType<typeof reducer>;
export type Dispatch = typeof store.dispatch;
