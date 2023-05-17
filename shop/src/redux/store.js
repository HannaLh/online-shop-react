import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice'
import furniture from './slices/furnitureSlice'

export const store = configureStore({
    reducer: {
        filter,
        cart,
        furniture,
    },
})