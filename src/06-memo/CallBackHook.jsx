import React, { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  return (
    <>
      <h1>UseCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};

export default CallBackHook;
