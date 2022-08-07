import React, { useState, useEffect } from "react";
const getlocal = () => {
  let list = localStorage.getItem("TODO React");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
function Todo() {
  const [task, setTask] = useState("");
  const [data, setTodo] = useState(getlocal());
  const onchangetask = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (task === "") {
      alert("ADD value");
      return;
    }
    setTodo([...data, task]);
    setTask("");
  };
  const remove = (a) => {
    const finalTodo = data.filter((current, index) => {
      return index !== a;
    });
    setTodo(finalTodo);
  };

  useEffect(() => {
    localStorage.setItem("TODO React", JSON.stringify(data));
  }, [data]);
  return (
    <>
      <form onSubmit={addTask}>
        <label>
          Name:
          <input type="text" value={task} onChange={onchangetask} />
        </label>
        <button disabled={task === ""}>Submit</button>
      </form>

      <div>
        {data.map((val, index) => {
          return (
            <>
              <h3>
                {val} <button onClick={() => remove(index)}>X</button>
              </h3>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Todo;
