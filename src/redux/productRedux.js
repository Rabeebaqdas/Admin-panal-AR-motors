import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        error: false
    },
    reducers: {
        getProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductSuccess: (state, action) => {
            state.isFetching = true;
            state.products = action.payload;
        },
        getProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteProductSuccess: (state, action) => {
            state.isFetching = true;
            state.products.splice(state.products.findIndex(item => item._id === action.payload), 1);
        },
        deleteProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        updateProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateProductSuccess: (state, action) => {
            state.isFetching = true;
            state.products.push(action.payload);
        },
        updateProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        addProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addProductSuccess: (state, action) => {
            state.isFetching = true;
            state.products[state.products.findIndex((item) => item._id === action.payload)] = action.payload.product;
        },
        addProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }


    }
})

export const { getProductStart, getProductSuccess, getProductFailure, deleteProductStart, deleteProductSuccess,
    deleteProductFailure, updateProductStart, updateProductSuccess, updateProductFailure, addProductStart,
    addProductSuccess, addProductFailure } = productSlice.actions;
export default productSlice.reducer;
