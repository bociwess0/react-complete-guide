import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
//ConfigureStore like createStore creates a store
//but it makes merging multiple reducers
//into one reducer easier thereafter.

const initialState = {counter : 0, showCounter: true}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++; //its allowed here
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter += action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    }
  }
});


const store = configureStore({
  reducer: counterSlice.reducer
  /*Reducer singular and not reducers plural
  because still, no matter if we use createStore
  or configureStore, Redux wants one main reducer function,
  which is responsible for the global state.*/ 
});

export const counterActions = counterSlice.actions;

export default store;