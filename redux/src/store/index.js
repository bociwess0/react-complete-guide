import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {counter : 0, showCounter: true}

createSlice({
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
    toogleCounter(state) {
      state.showCounter = !state.showCounter
    }
  }
});

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
    //state.coutner++ NEVER CHANGE THE EXISTING STATE, ALWAYS OVERRIDE IT!
    //becouse it can have unwanted and unexpected side effects in bigger applications
      counter: state.counter + 1,
      showCoutner: state.showCounter
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCoutner: state.showCounter
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCoutner: state.showCounter
    };
  }

  if(action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }

  return state;
};

const store = createStore(counterReducer);

export default store;