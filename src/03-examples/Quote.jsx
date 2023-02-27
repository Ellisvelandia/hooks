import React from "react";

const Quote = ({ quote, character }) => {
  return (
    <blockquote className="blockquote text-right">
      <p className="my-1">{quote}</p>
      <footer className="blockquote-footer">{character}</footer>
    </blockquote>
  );
};

export default Quote;
