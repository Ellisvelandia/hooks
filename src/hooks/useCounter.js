import { useState } from "react";

export const useCounter = (initialValue = 5) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    if (counter < 10) {
      setCounter(counter + value);
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
