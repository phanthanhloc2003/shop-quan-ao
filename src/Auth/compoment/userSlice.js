// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

const saveUserDataToLocalStorage = (data) => {
    localStorage.setItem("access_token", data.jwt);
    localStorage.setItem("user", JSON.stringify(data.user));
};

export const register = createAsyncThunk(
    "users/register",
    async (payload) => {
        const data = await userApi.register(payload);
        saveUserDataToLocalStorage(data);
        return data.user;
    }
);

export const login = createAsyncThunk(
    "users/login",
    async (payload) => {
        const data = await userApi.login(payload);
        saveUserDataToLocalStorage(data);
        return data.user;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        current: JSON.parse(localStorage.getItem("user")) || {},
        settings: {},
    },
    reducers: {
        logout(state) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("user");
            state.current = {};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.current = action.payload;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.current = action.payload;
            });
    }
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
