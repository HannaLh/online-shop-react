import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import furniture from './slices/furnitureSlice';
import { useDispatch } from 'react-redux';

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