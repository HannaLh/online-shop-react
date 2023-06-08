import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducers';

export const store = configureStore({
    reducer,
    devTools: {
        name: 'Maynooth Store',
    },
});

export type RootState = ReturnType<typeof reducer>;
export type Dispatch = typeof store.dispatch;
