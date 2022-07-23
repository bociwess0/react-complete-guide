import { createSlice } from "@reduxjs/toolkit";

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

export const counterActions = counterSlice.actions;
//returns an action object of this shape:
//{ type: 'some auto-generated unique identifier', payload }

export default counterSlice.reducer;