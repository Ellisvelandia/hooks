import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Memorize</h1>
      <hr />
      <p>
        Counter: <Small value={counter} />
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

export default Memorize;
