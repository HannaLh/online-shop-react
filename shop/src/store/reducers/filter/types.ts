export enum SortPropertyType {
    RATING_DESC = 'rating',
    RATING_ASC = '-rating',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
}

export interface FilterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: SortPropertyType;
}
