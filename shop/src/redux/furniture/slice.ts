import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import pickBy from 'lodash/pickBy';

import {Furniture, FurnitureSliceState, SearchFurnitureParams, Status} from './types';
import {RootState} from '../store';


export const fetchFurniture = createAsyncThunk<Furniture[], SearchFurnitureParams>(
    'furniture/fetchFurnitureStatus ',
    async (params) => {
        const {sortBy, category, search, currentPage, order} = params;
        const {data} = await axios.get<Furniture[]>('https://645513ffa74f994b3351784a.mockapi.io/items', {
            params: pickBy({
                page: currentPage,
                limit: 4,
                category,
                sortBy,
                order,
                search,
            }),
        });
        return data;
    },
);

const initialState: FurnitureSliceState = {
    items: null,
    status: Status.LOADING, // loading | success | error
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
            state.status = Status.LOADING;
            state.items = [];
        })
        .addCase(fetchFurniture.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        })
        .addCase(fetchFurniture.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    },
});

export const selectFurnitureData = (state: RootState) => state.furniture;
export const {setItems} = furnitureSlice.actions;
export default furnitureSlice.reducer;

