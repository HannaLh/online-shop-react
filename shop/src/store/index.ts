import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';
import {reducer} from './reducers';

import type {TypedUseSelectorHook} from 'react-redux';

export const store = configureStore({
    reducer,
    devTools: {
        name: 'Maynooth Store',
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

