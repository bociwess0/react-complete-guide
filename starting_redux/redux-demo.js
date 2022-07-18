const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    return {
        counter: state.counter + 1
    };
}; //creating a reducer

const store = redux.createStore(counterReducer); //creating a store


const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber); // executes whenever the data has changed

store.dispatch({ type: 'increment'});
