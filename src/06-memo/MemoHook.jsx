import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("here we go!");
  }
  return `${iterationNumber} iterations`;
};

const MemoHook = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>MemoHook</h1>
      <hr />
      <h4>{memorizedValue}</h4>
      <p>
        Counter: <small>{counter}</small>
      </p>
      <button onClick={() => increment()} className="btn btn-primary">
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default MemoHook;
