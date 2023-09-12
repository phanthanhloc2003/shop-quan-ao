import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        selectedProduct: null,
        searchItem: null,
    },

    reducers: {
        addSearchID(state, action) {
            const searchID = action.payload;
            state.searchItem = searchID;

        },


    },
});

const { actions, reducer } = searchSlice;

export const { addSearchID, setSearchResult } = actions;
export default reducer;
