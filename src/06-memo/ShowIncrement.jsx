import React from "react";

const ShowIncrement = React.memo(({ increment }) => {
  console.log("i return again again !!! :C");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      increment
    </button>
  );
});

export default ShowIncrement;
