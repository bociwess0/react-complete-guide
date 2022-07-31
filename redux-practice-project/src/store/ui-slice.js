import {createSlice} from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: { cartVisible: false, notification: null},
    reducers: {
        toggle(state) {
            state.cartVisible = !state.cartVisible;
        },
        showNotification(state, action) {
            state.notification = { status: action.payload.status, message: action.payload.message };
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;