import React from "react";
import { Quote, LoadingQuote } from "../03-examples";
import { useCounter, useFetch } from "../hooks";

const Layout = () => {
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

export default Layout;
