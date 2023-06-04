import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import filter from '../redux/filter/slice';
import cart from '../redux/cart/slice';
import furniture from '../redux/furniture/slice';

export const store = configureStore({
    reducer: {
        filter,
        cart,
        furniture,
    },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
