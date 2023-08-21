import { createSlice, combineReducers, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';


export const register = createAsyncThunk(
    "users/register",
    async (payload) => {
        const data = await userApi.register(payload);

        localStorage.setItem("access_token", data.jwt);
        localStorage.setItem("user", JSON.stringify(data.user));

        return data.user;
    },

)

export const login = createAsyncThunk(
    "users/login",
    async (payload) => {
        const data = await userApi.login(payload);

        localStorage.setItem("access_token", data.jwt);
        localStorage.setItem("user", JSON.stringify(data.user));

        return data.user;
    },

)

const userSlice = createSlice({
    name: "user",
    initialState: {
        current: JSON.parse(localStorage.getItem("user")) || {},
        settings: {},
    },
    reducers: {},
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        }
    },

});


const rootReducer = combineReducers({
    user: userSlice.reducer, // Lưu ý sử dụng userSlice.reducer
    // Các reducer khác nếu bạn có
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
