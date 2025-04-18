import React, { useState } from 'react';

const HelloWorld = () => {
  const [message, setMessage] = useState("Hello, World!");
  // Test
  const toggleMessage = () => {
    setMessage((prevMessage) =>
      prevMessage === "Hello, World!" ? "Goodbye, World!" : "Hello, World!"
    );
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={toggleMessage}>Toggle Message</button>
    </div>
  );
};

export default HelloWorld;