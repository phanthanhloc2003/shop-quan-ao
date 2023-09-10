import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Auth/compoment/userSlice";
import cartReducer from "../layout/Cart/cartSlice";
import searchReducer from "../compomet/Header/compoment/searchSlice";

const rootReducer = {
    user: userReducer,
    cart: cartReducer,
    search: searchReducer
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
