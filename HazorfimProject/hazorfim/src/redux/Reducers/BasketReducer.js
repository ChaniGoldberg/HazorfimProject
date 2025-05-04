import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_COUNT_PRODUCT, GET_ALL_PRODUCTS } from "../ActionsTypes";
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
            return {
                ...state,
                products: state.products.splice(x, 1),
                price: state.price.splice(x, 1),
                count: state.count.splice(x, 1),
                totalPrice: state.totalPrice.splice(x, 1),
            };
        case UPDATE_COUNT_PRODUCT:
            const i = findIndex(action.payload.product, state.products);
            const updatedProducts = state.products.map(product => {

                return {
                    ...state,
                    count: state.count[i] = action.payload.count, // Update the count in the state
                    totalPrice: state.totalPrice[i] = action.payload.product.price * action.payload.count // Assuming count is the new count for the product
                };

    
            });
            return { ...state, products: updatedProducts };
        case GET_ALL_PRODUCTS:
            const getAllProducts = action.payload.products;
            return state.products;
        default:
            return state;
    }
}
