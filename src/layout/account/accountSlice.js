import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'history',
    initialState: {
        showMiniCart: false,
        receivedItems: null,
    },


    reducers: {
        showMiniCart(state) {
            state.showMiniCart = true;
        },
        hideMiniCart(state) {
            state.showMiniCart = false;
        },
        receiveProduct(state, action) {

            const receivedItem = action.payload;

            state.receivedItems = receivedItem;


        },

    }
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, receiveProduct } = actions;
export default reducer; 