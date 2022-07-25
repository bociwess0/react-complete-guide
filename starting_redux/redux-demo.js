const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
   if(action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
   }

   if(action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }
   return state;
}; //creating a reducer

const store = redux.createStore(counterReducer); //creating a store


const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber); // executes whenever the data has changed

store.dispatch({ type: 'increment'});
store.dispatch({ type: 'decrement'});
