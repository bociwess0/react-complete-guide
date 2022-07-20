import classes from './Counter.module.css';
import { useSelector, connect } from 'react-redux'; //that allows us to then automatically select a part of our state managed by the store.

const Counter = () => {
  const counter = useSelector(state => state.counter);
/*When you use use selector, React Redux will automatically set up a subscription
to the Redux store for this component.
So your component will be updated and will receive the latest counter automatically
whenever that data changes in the Redux store. */

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter }</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
