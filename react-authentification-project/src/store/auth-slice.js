import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: 'authentification',
    initialState: {
        token: '',
        isLoggedIn: false
    },
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.token = action.payload;
        },
        logout(state, action) {
            state.isLoggedIn = false;
            state.token = null;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;