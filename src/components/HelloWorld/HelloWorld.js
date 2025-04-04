import React, { useState } from 'react';

const HelloWorld = () => {
  const [message, setMessage] = useState("Hello, World!");
  const toggleMessage = () => {
    setMessage((prevMessage) =>
      prevMessage === "Hello, World!" ? "Goodbye, World!" : "Hello, World!"
    );
  };
// 123
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={toggleMessage}>Toggle Message</button>
    </div>
  );
};

export default HelloWorld;