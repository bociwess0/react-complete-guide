import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";


const store = configureStore({
    reducer: {authReducer: authSlice.reducer}
})

export default store;