import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helper/helper";


const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    totalPrice: 0,
    checkout: false
  };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem : (state, action) => {
            if(!state.selectedItems.find((item) => item.id === action.payload.id)){
                state.selectedItems.push({...action.payload, quantity: 1 });
                state.totalPrice = sumPrice(state.selectedItems);
                state.itemsCounter = sumQuantity(state.selectedItems);
                state.checkout = false;
            }
        },
        removeItem : (state, action) => {
            const newselectedItems = state.selectedItems.filter(
                (item) => item.id !== action.payload.id
            );
            state.selectedItems = newselectedItems;
            state.totalPrice = sumPrice(state.selectedItems);
            state.itemsCounter = sumQuantity(state.selectedItems);
        },
        increase : (state, action) => {
            const increaseIndex = state.selectedItems.findIndex(
                (item) => item.id === action.payload.id
            );
            state.selectedItems[increaseIndex].quantity++;
            state.totalPrice = sumPrice(state.selectedItems);
            state.itemsCounter = sumQuantity(state.selectedItems);
        },
        decrease : (state, action) => {
            const decreaseIndex = state.selectedItems.findIndex(
                (item) => item.id === action.payload.id
            );
            state.selectedItems[decreaseIndex].quantity--;
            state.totalPrice = sumPrice(state.selectedItems);
            state.itemsCounter = sumQuantity(state.selectedItems);
        },
        checkout : (state) => {
            state.selectedItems = [];
            state.checkout = true;
            state.itemsCounter = 0;
            state.totalPrice = 0;
        }
    }
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkout } = cartSlice.actions;