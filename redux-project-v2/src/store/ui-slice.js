import { createSlice } from "@reduxjs/toolkit";

const initialToggleState = {
    isShown: false
}

const toggleCartSlice = createSlice({
    name: 'toggleCart',
    initialState: initialToggleState,
    reducers: {
        toggleCart(state) {
            state.isShown = !state.isShown;
        }
    }
});

export const toggleCartACtions = toggleCartSlice.actions;

export default toggleCartSlice.reducer;