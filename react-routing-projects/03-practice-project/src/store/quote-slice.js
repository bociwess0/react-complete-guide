import { createSlice } from '@reduxjs/toolkit';

const quoteSlice = createSlice({
    name: 'quotes',
    initialState: {
        quotes: [],
        changed: false
    }, 
    reducers: {
        addQuoteItem(state, action) {
            
        }
    }

});

export const quoteActions = quoteSlice.actions;

export default quoteSlice;