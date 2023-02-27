import React from "react";
import { useCounter } from "../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>CounterWithCustomHook: {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +
      </button>
      <button className="btn btn-primary" onClick={decrement}>
        -
      </button>
      <button className="btn btn-primary" onClick={reset}>
        reset
      </button>
    </>
  );
};

export default CounterWithCustomHook;
