import React, { useState } from "react";

function Counter() {
  const [count1, setData] = useState(0);
  function incre() {
    setData(count1 + 1);
  }
  function reset() {
    setData(0);
  }
  function decre() {
    setData(count1 - 1);
  }
  return (
    <>
      <h4>count={count1}</h4>
      <button onClick={reset} disabled={count1 === 0}>
        reset the count
      </button>
      <button onClick={incre} disabled={count1 === 10}>
        increment the Count
      </button>
      <button onClick={decre} disabled={count1 === 0}>
        decrement the count
      </button>
    </>
  );
}

export default Counter;
