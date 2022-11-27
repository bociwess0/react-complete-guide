import { createSlice } from '@reduxjs/toolkit';

let loginToken = localStorage.getItem('token');

const authSlice = createSlice({
    name: 'authentification',
    initialState: {
        token: loginToken,
        isLoggedIn: !!loginToken
    },
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.token = action.payload;
            localStorage.setItem('token', state.token);
        },
        logout(state, action) {
            state.isLoggedIn = false;
            state.token = null;
            localStorage.removeItem('token');
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;