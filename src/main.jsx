import React from "react";
import ReactDOM from "react-dom/client";
import FormWithCustomHook from "./02-useEffect/FormWithCustomHook";
// import Counter from "./01-useState/Counter";
// import CounterWithCustomHook from "./01-useState/CounterWithCustomHook";
// import SimpleForm from "./02-useEffect/SimpleForm";
// import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormWithCustomHook />
  </React.StrictMode>
);
