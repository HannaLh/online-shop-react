export type Furniture = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    rating: number;
};

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

export type SearchFurnitureParams = {
    sortBy: string;
    order: string;
    category: string;
    search: string;
    currentPage: string;
};

export interface FurnitureSliceState {
    items: Furniture[];
    status: Status;
}
