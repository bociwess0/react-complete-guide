import {createSlice} from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: { cartVisible: false},
    reducers: {
        toggle(state) {
            state.cartVisible = !state.cartVisible;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;