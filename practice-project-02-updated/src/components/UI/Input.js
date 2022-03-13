import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  //since our custom Componente <Input> does not provide the ref prop, we're using React.forwardRef to allow that
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
