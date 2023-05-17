import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchFurniture = createAsyncThunk(
    'furniture/fetchFurnitureStatus ',
    async (params) => {
        const {sortBy, category, search, currentPage} = params;
        const {data} = await axios.get(
                    `https://645513ffa74f994b3351784a.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=asc&search=${search}`
                );
        return data;
    }
)

const initialState = {
    items: [],
    status: 'loading',
}

const furnitureSlice = createSlice({
    name: 'furniture',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchFurniture.pending, (state) => {
            state.status = "loading"
            state.items = []
        })
        .addCase(fetchFurniture.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = "success"
        })
        .addCase(fetchFurniture.rejected, (state) => {
            state.status = "error"
            state.items = []
        })
    },
})

export const {setItems} = furnitureSlice.actions;
export default furnitureSlice.reducer;

