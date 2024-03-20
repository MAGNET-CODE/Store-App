import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/product/productSlice";

const store = configureStore({
    reducer: {
        product: productReducer,
    }
});

export default store;