import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Storage} from 'utils/storage';
import {FURNITURE_FILTERS_KEY} from '../../../constants';

import {RootState} from 'store';
import {FilterSliceState, SortPropertyType} from './types';

const storage = Storage.get()[FURNITURE_FILTERS_KEY] || {};

const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: storage.categoryId || 0,
    currentPage: storage.page || 1,
    sort: storage.sort || SortPropertyType.RATING_DESC,
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
    },
});

export const filterSelector = (state: RootState) => state.filter;

export const {setCategoryId, setSort, setCurrentPage, setSearchValue} = filterSlice.actions;

export default filterSlice.reducer;
