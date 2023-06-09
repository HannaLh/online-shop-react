export type Furniture = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    rating: number;
};

export type SearchFurnitureParams = {
    sortBy: string;
    order: string;
    category: string;
    search: string;
    currentPage: string;
};

export interface FurnitureSliceState {
    items: Furniture[] | null;
    loading: boolean,
    error: boolean | null,
}
