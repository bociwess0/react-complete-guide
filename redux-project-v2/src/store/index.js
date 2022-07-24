import { configureStore } from '@reduxjs/toolkit';

import toggleCartReducer from '../store/ui-slice';
import updateCartReducer from '../store/cart-slice';

const store  = configureStore({
    reducer: { toggleCart: toggleCartReducer, updateCart: updateCartReducer}
});



export default store;