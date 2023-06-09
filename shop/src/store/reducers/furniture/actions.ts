import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import pickBy from 'lodash/pickBy';

import {FURNITURE_URL} from '../../../constants';

import type {Furniture, SearchFurnitureParams} from './types';

export const fetchFurniture = createAsyncThunk<Furniture[], SearchFurnitureParams>(
    'furniture/fetchFurnitureStatus ',
    async ({sortBy, category, search, currentPage, order}) => {
        const {data} = await axios.get<Furniture[]>(`${FURNITURE_URL}/items`, {
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
