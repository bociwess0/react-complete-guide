import { createSlice } from '@reduxjs/toolkit';

const quoteSlice = createSlice({
    name: 'quotes',
    initialState: {
        quotes: [],
        status: '',
        changed: false,
    }, 
    reducers: {
        replaceQuotes(state, action) {
            state.quotes = action.payload.quotes;
        },
        setStatus(state, action) {
            state.status = action.payload.status;
        },
        addQuoteItem(state, action) {
            const newQuote = action.payload;
            state.quotes.push({
                id: newQuote.id,
                author: newQuote.author,
                description: newQuote.description
            })
            state.changed = true;
        }
    }

});

export const quoteActions = quoteSlice.actions;

export default quoteSlice;