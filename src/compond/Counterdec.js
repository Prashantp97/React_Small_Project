import React, { useEffect, useState } from "react";
function Counterdec() {
  const [secLeft, setSecCount] = useState(null);
  useEffect(() => {
    if (secLeft) {
      const inter = setInterval(() => {
        setSecCount((prevSecLeft) => prevSecLeft - 1);
      }, 1000);
      return () => {
        clearInterval(inter);
      };
    }
  }, [secLeft]);
  function handleInput(event) {
    if (event.key === "Enter") {
      setSecCount(Math.round(event.target.value));
    }
  }
  return (
    <div>
      <input onKeyDown={handleInput} placeholder="Add your no and hit enter" />
      <p>{secLeft}</p>
    </div>
  );
}

export default Counterdec;
