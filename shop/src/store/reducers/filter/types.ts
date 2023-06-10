export enum SortPropertyType {
    RATING_DESC = 'RATING_DESC',
    RATING_ASC = 'RATING_ASC',
    PRICE_DESC = 'PRICE_DESC',
    PRICE_ASC = 'PRICE_ASC',
}

export interface FilterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: SortPropertyType;
}
