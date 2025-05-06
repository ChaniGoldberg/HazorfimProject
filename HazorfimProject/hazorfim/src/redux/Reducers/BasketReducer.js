import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_COUNT_PRODUCT, GET_ALL_BASKET_PRODUCTS } from "../ActionsTypes";
export const initialState = {
    products: [],
    count: [],
    price: [],
    totalPrice: [],
};
const findIndex = (product, products) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === product.name) {
            return i; // Return the index if found
        }
    }
    return -1; // Return -1 if not found
};
export const BasketReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_PRODUCT:
        //     const index = findIndex(action.payload.product, state.products); // Get the index with the correct products array
        //     if(index==-1)
        //     {return
        //     {
        //         ...state,
        //         count:state.count[index]= action.payload.count,
        //         totalPrice: state.totalPrice[index]=action.payload.product.price * action.payload.count // Assuming count is the new count for the product
        //     }};
        //     else{
        //     return {
        //         ...state,
        //         products: state.products.concat(action.payload.product),
        //         count: state.count.concat(action.payload.count),
        //         price: state.price.concat(action.payload.product.price),
        //         totalPrice: state.totalPrice.concat(action.payload.product.price * (index !== -1 ? state.count[index] : 0)), // Check if index is valid
        //     }};
        case ADD_PRODUCT:
            const index = findIndex(action.payload.product, state.products); // Get the index with the correct products array
            if (index === -1) {
                return {
                    ...state,
                    products: [...state.products, action.payload.product], // Ensure the products remain unchanged
                    count: [...state.count, action.payload.count], // Append new count to the array
                    price: [...state.price, action.payload.product.price], // Append price of the new product
                    totalPrice: [...state.totalPrice, action.payload.product.price * action.payload.count] // Append new total price
                };
            } else {
                return {
                    ...state,
                    // Use the index to increment the count and calculate the new total price for existing product
                    count: state.count.map((c, i) => i === index ? c + action.payload.count : c),
                    totalPrice: state.totalPrice.map((tp, i) => i === index ? action.payload.product.price * (state.count[index]) : tp),
                };
            }
        case DELETE_PRODUCT:
            const x = findIndex(action.payload, state.products);

            if (x === -1) {
                return state; // If the product is not found, return the current state
            }

            return {
                ...state,
                products: state.products.filter((_, index) => index !== x),
                price: state.price.filter((_, index) => index !== x),
                count: state.count.filter((_, index) => index !== x),
                totalPrice: state.totalPrice.filter((_, index) => index !== x),
            };
        case UPDATE_COUNT_PRODUCT:
            const i = findIndex(action.payload.product, state.products);
            const newCount= Number(action.payload.count)
            return {
                ...state,
                products: state.products, // Assuming you want to keep this unchanged
                price: state.price, // Assuming you want to keep this unchanged
                count: state.count.map((c, index) => index === i ? newCount : c), // Update specific index
                totalPrice: state.totalPrice.map((tp, index) => index === i ? (action.payload.product.price * newCount) : tp) // Update specific index
            };            
        case GET_ALL_BASKET_PRODUCTS:
            const getAllProducts = action.payload.products;
            return state.products;
        default:
            return state;
    }
}
