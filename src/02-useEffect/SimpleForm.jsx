import React, { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Hunter",
    email: "eyis619@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {}, []);

  useEffect(() => {}, [formState]);

  useEffect(() => {}, [email]);

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control"
        placeholder="eyis619@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username == "Hunter" && <Message />}
    </>
  );
};

export default SimpleForm;
