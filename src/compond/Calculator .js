import { useState } from "react";
import "./index.css";
function App() {
  const [ans, setAns] = useState("");
  const clickFunction = (event) => {
    setAns(ans.concat(event.target.value));
  };
  const result = () => {
    setAns(eval(ans).toString());
  };
  const clear = () => {
    setAns("");
  };
  return (
    <>
      <div className="calc">
        <input type="text" className="display" placeholder="0" value={ans} />
        <input
          type="button"
          value="9"
          className="btn"
          onClick={clickFunction}
        />
        <input
          type="button"
          value="8"
          className="btn"
          onClick={clickFunction}
        />
        <input
          type="button"
          value="7"
          className="btn"
          onClick={clickFunction}
        />
        <input
          type="button"
          value="-"
          className="btn1"
          onClick={clickFunction}
        />
        <input
          type="button"
          value="6"
          className="btn"
          onClick={clickFunction}
        />
        <input
          type="button"
          value="5"
          className="btn"
          onClick={clickFunction}
        />
        <input
          type="button"
          value="4"
          className="btn"
          onClick={clickFunction}
        />
        <input
          type="button"
          value="+"
          className="btn1"
          onClick={clickFunction}
        />
        <input
          type="button"
          value="3"
          className="btn"
          onClick={clickFunction}
        />
        <input
          type="button"
          value="2"
          className="btn"
          onClick={clickFunction}
        />
        <input
          type="button"
          value="1"
          className="btn"
          onClick={clickFunction}
        />
        <input
          type="button"
          value="*"
          className="btn1"
          onClick={clickFunction}
        />
        <input
          type="button"
          value="0"
          className="btn"
          onClick={clickFunction}
        />
        <input
          type="button"
          value="."
          className="btn2"
          onClick={clickFunction}
        />

        <input
          type="button"
          value="/"
          className="btn1"
          onClick={clickFunction}
        />
        <input type="button" value="=" className="btn3" onClick={result} />
        <input type="button" value="clear" className="btn1" onClick={clear} />
      </div>
    </>
  );
}

export default App;
