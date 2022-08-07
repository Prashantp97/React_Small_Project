import React from "react";
function Head(props) {
  const { name, id, age } = props;
  return (
    <>
      <h1>
        hiii i am {name} my id is {id} and my age is {age} is{" "}
      </h1>
    </>
  );
}
export default Head;
