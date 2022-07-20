import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'; //that allows us to then automatically select a part of our state managed by the store.

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  /*When you use use selector, React Redux will automatically set up a subscription
  to the Redux store for this component.
  So your component will be updated and will receive the latest counter automatically
  whenever that data changes in the Redux store. */

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  }

  const increaseHandler = () => {
    dispatch({type: "increase", amount: 5})
  }

  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter }</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
