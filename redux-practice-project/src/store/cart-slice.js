import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemToCart(state, action) {
            state.totalQuantity++;
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id == newItem.id);
            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price;
            }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;