import React from "react";
import Todo from "./compond/Todo";
import Counter from "./compond/Counter";
import Counterdec from "./compond/Counterdec";
import Atm from "./compond/Atm";

function App() {
  return (
    <>
      <h3 style={{ color: "red" }}>TODO List </h3>
      <Todo />
      <hr />
      <h3 style={{ color: "red" }}>Counter App </h3>
      <Counter />
      <hr />

      <h3 style={{ color: "red" }}>Count-Down Counter </h3>
      <Counterdec />
      <hr />

      <h3 style={{ color: "red" }}>Atm Display</h3>
      <Atm />
    </>
  );
}

export default App;
