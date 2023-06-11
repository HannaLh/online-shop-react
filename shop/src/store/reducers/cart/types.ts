
export type CartItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    count: number;
}

export type CartItems = {[key in string]: CartItem}

export interface CartSliceState {
    totalPrice: number;
    items: CartItems;
}
