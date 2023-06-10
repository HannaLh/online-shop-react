import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from 'store';
import {FilterSliceState, SortPropertyType} from './types';


const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sort: SortPropertyType.RATING_DESC,
};

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setSort(state, action: PayloadAction<SortPropertyType>) {
            state.sort = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            const {currentPage, categoryId, sort} = action.payload || {};

            state.currentPage = +currentPage || 1;
            state.categoryId = +categoryId || 0;
            state.sort = sort || SortPropertyType.RATING_DESC;
        },
    },
});

export const filterSelector = (state: RootState) => state.filter;

export const {setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions;

export default filterSlice.reducer;
