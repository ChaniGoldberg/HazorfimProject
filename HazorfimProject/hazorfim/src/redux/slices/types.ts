export interface AddProductPayload {
    product: {
        name: string;
        price: number;
    };
    count: number;
}