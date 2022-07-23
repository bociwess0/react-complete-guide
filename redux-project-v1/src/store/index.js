import {createStore} from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';  
/*ConfigureStore like createStore creates a store but it makes merging multiple reducers into one reducer easier thereafter. */

const initialCounterState = {counter: 0, showCounter : true,};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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

const initialAuthState = {
    isAuthentificated: false
}

const authSlice = createSlice({
    name: 'authentification',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthentificated = true;
        },
        logout(state) {
            state.isAuthentificated = false;
        }
    }

});



const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer }
});

export const counterActions = counterSlice.actions;
//returns an action object of this shape:
//{ type: 'some auto-generated unique identifier', payload }
export const authActions = authSlice.actions;


export default store;


