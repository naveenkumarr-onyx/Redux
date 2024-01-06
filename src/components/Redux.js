import React from "react";
import { useState } from "react";

function Redux() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((count) => count + 1);
  }
  function decrement() {
    setCount((count) => count - 1);
  }
  return (
    <div
      style={{
        maxWidth: "100px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h1 className=" font-extrabold">{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
export default Redux;
