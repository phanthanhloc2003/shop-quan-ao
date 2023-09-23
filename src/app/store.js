import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Auth/compoment/userSlice";
import cartReducer from "../layout/Cart/cartSlice";
import searchReducer from "../compomet/Header/compoment/searchSlice";
import historyReducer from "../layout/account/accountSlice"

const rootReducer = {
    user: userReducer,
    cart: cartReducer,
    search: searchReducer,
    history: historyReducer

};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
