import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';  
/*ConfigureStore like createStore creates a store but it makes merging multiple reducers into one reducer easier thereafter. */

import counterReducer from './counter';
import authReducer from './auth';


const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer }
});


export default store;


