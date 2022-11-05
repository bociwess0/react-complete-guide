import { configureStore } from '@reduxjs/toolkit';

import quoteSlice from './quote-slice';


const store = configureStore({
    reducer: { quoteReducer: quoteSlice.reducer}
})

export default store;