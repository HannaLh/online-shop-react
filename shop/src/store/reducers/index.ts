import {combineReducers} from 'redux';

import filter from './filter/filter';
import cart from './cart/cart';
import furniture from './furniture/furniture';

export const reducer = combineReducers({
    filter,
    cart,
    furniture,
});
