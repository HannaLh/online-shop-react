import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {fetchFurniture} from './actions';

import {Furniture, FurnitureSliceState} from './types';
import {RootState} from 'store';


const initialState: FurnitureSliceState = {
    items: null,
    loading: false,
    error: null,
};

const furnitureSlice = createSlice({
    name: 'furniture',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Furniture[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchFurniture.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchFurniture.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        })
        .addCase(fetchFurniture.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    },
});

export const furnitureDataSelector = (state: RootState) => state.furniture;
export const {setItems} = furnitureSlice.actions;
export default furnitureSlice.reducer;
