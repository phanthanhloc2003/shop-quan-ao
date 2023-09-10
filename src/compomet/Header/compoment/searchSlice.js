import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        selectedProduct: null,
        searchItem: [],
    },

    reducers: {
        addSearchID(state, action) {
            const searchID = action.payload;
            state.searchItem.push(searchID);
        },

        setSearchResult(state, action) {
            const productId = action.payload;

            const foundProduct = state.searchItem.find(
                (product) => product.id === productId.id
            );

            if (foundProduct) {
                state.selectedProduct = foundProduct;
            }
        },
    },
});

const { actions, reducer } = searchSlice;

export const { addSearchID, setSearchResult } = actions;
export default reducer;
