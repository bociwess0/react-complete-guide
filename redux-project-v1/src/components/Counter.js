import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'; //that allows us to then automatically select a part of our state managed by the store.
import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  /*When you use use selector, React Redux will automatically set up a subscription
  to the Redux store for this component.
  So your component will be updated and will receive the latest counter automatically
  whenever that data changes in the Redux store. */
  const show = useSelector(state => state.counter.showCounter);
  const incrementHandler = () => {
    dispatch(counterActions.increment()); // {type: SOME_UNIQUE_IDENTIFIER}
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 5}
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }
  

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
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
