import React from "react";
import { useCounter, useFetch } from "../hooks";
import LoadingQuote from "./LoadingQuote";
import Quote from "./Quote";

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://animechan.vercel.app/api/quotes/anime?title=naruto&page=${counter}`
  );
  const { quote, character } = !!data && data[0];

  return (
    <>
      <h1>Quotes Legends</h1>
      <hr />
      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote quote={quote} character={character} />
      )}

      <button
        disabled={isLoading}
        className="btn btn-primary"
        onClick={() => increment()}
      >
        Next Quote
      </button>
    </>
  );
};

export default MultipleCustomHooks;
