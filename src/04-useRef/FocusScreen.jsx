import React, { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    // document.querySelector("input").select();
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        className="form-control"
      />
      <button className="btn btn-primary my-2" onClick={onClick}>
        Set focus
      </button>
    </>
  );
};

export default FocusScreen;