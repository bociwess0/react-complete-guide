import { createSlice } from '@reduxjs/toolkit';

const initialUpdateCartState = { itemsNumber: 2 }

const updateCartSlice = createSlice({
    name: 'updateCart',
    initialState: initialUpdateCartState,
    reducers: {
        addToCart(state) {
            state.itemsNumber++;
        },
        removeFromCart(state) {
            state.itemsNumber--;
        }
    }
});

export const updateCartActions = updateCartSlice.actions; 

export const itemsNumber = initialUpdateCartState.itemsNumber;

export default updateCartSlice.reducer;