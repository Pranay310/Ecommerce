import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: [],
    products: [],
    filteredProducts: [],
}

const cartProducts = createSlice({
    name: "cartProducts",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload);
        },
        storeProducts: (state, action) => {
            state.allProducts = action.payload;
            state.filteredProducts = action.payload;
        },
        searchedProducts: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.filteredProducts = state.allProducts.filter(item =>
                item.title.toLowerCase().includes(searchTerm)
            );
        }
    }
});

export const { addToCart, storeProducts, searchedProducts } = cartProducts.actions;
export default cartProducts.reducer;
