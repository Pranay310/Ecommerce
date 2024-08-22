import { configureStore } from "@reduxjs/toolkit";
import cartProducts from '../slices/cartSlice'

const store = configureStore({
    reducer: cartProducts,
})

export default store;