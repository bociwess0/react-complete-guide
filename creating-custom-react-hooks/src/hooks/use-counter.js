import { useState, useEffect } from 'react';

const useCounter = () => { //custom hooks must always start with 'use' word
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
}; 

export default useCounter;