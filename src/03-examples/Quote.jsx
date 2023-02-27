import React, { useLayoutEffect, useRef, useState } from "react";

const Quote = ({ quote, character }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-right" style={{ display: "flex" }}>
        <p ref={pRef} className="my-1">
          {quote}
        </p>
        <footer className="blockquote-footer">{character}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

export default Quote;
