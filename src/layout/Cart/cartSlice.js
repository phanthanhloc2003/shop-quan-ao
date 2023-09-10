import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: [],
    },


    reducers: {
        showMiniCart(state) {
            state.showMiniCart = true;
        },
        hideMiniCart(state) {
            state.showMiniCart = false;
        },
        addToCart(state, action) {

            const newItem = action.payload;
            const index = state.cartItems.findIndex((x) => x.id === newItem.id);

            if (index >= 0) {
                state.cartItems[index].quantity += newItem.quantity;
            } else {
                state.cartItems.push(newItem);
            }
        },
        setQuantity(state, action) {
            const { id, quantity } = action.payload; // Thay state.payload thành action.payload
            const index = state.cartItems.findIndex((x) => x.id === id);
            if (index > 0) {
                state.cartItems[index].quantity = quantity;
            }
        },
        removeFromCart(state, action) {
            const idNeedToRemove = action.payload; //{ id: id }
            state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove.id);
            console.log("Removed item with ID:", idNeedToRemove.id);
        }
    }
});

const { actions, reducer } = cartSlice; // Đổi từ reducers thành reducer
export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart } = actions;
export default reducer; // Đổi từ reducers thành reducer
