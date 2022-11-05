import { createSlice } from '@reduxjs/toolkit';

const quoteSlice = createSlice({
    name: 'quotes',
    initialState: {
        quotes: [],
        status: '',
        changed: false
    }, 
    reducers: {
        replaceQuotes(state, action) {
            state.quotes = action.payload.quotes;
            state.status = action.payload.status;
        },
        addQuoteItem(state, action) {
            
        }
    }

});

export const quoteActions = quoteSlice.actions;

export default quoteSlice;