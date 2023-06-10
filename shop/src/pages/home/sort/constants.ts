import {SortPropertyType} from 'store/reducers/filter/types';

export const SORT_NAMES: {[key in SortPropertyType]: string} = {
    [SortPropertyType.RATING_DESC]: 'Popularity: High to Low',
    [SortPropertyType.RATING_ASC]: 'Popularity: Low to High',
    [SortPropertyType.PRICE_DESC]: 'Price: High to Low',
    [SortPropertyType.PRICE_ASC]: 'Price: Low to High',
};

export const SORT_NAMES_ARRAY = Object.entries(SORT_NAMES) as [SortPropertyType, string][];
