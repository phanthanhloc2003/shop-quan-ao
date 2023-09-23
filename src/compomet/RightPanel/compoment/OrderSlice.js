import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "purchase",
    initialState: {
        showPurchase: null,
        purchaseList: [],
    },
    reducers: {
        purchasedListings(state, action){
            const product = action.payload
            

        }
    }    
    


})