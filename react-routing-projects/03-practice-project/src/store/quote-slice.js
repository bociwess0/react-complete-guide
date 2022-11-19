import { createSlice } from '@reduxjs/toolkit';

const quoteSlice = createSlice({
    name: 'quotes',
    initialState: {
        quotes: [],
        comments: [],
        singleQuote: {},
        status: ''
    }, 
    reducers: {
        replaceQuotes(state, action) {
            state.quotes = action.payload.quotes;
        },
        replaceComments(state, action) {
            state.comments = action.payload.comments;
        },
        setStatus(state, action) {
            state.status = action.payload.status;
        },
        addQuoteItem(state, action) {
            const newQuote = action.payload;
            state.quotes.push({
                quoteId: newQuote.quoteId,
                author: newQuote.author,
                description: newQuote.description
            })
        },
        deleteQuoteItem(state, action) {
            const deleteTarget = state.quotes.find((quote) => quote.id === action.payload.id);
            state.quotes = state.quotes.filter((quote) => quote.id !== deleteTarget.id);
        },
        updateSpecificQuote(state, action) {
            state.singleQuote = action.payload;
        },
        addCommentItem(state, action) {
            const newComment = action.payload;
            state.comments.push({
                quoteId: newComment.quoteId,
                author: newComment.author,
                text: newComment.text
            })
        },
        deleteCommentItem(state, action) {
            const deleteTarget = state.comments.find((comment) => comment.id === action.payload);
            state.comments = state.comments.filter((comment) => comment.id !== deleteTarget.id);
        }
        
    }

});

export const quoteActions = quoteSlice.actions;

export default quoteSlice;