import {createStore} from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';  
/*ConfigureStore like createStore creates a store but it makes merging multiple reducers into one reducer easier thereafter. */

const initialState = {counter: 0, showCounter : true};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter --;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});



const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
//returns an action object of this shape:
//{ type: 'some auto-generated unique identifier }


export default store;


