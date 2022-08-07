import { useState } from "react";

function Atm() {
  const [avail, setAvail] = useState(1000); // availabe balance
  const [con, setCon] = useState(true);
  const [message, setMessage] = useState("Welcome to SBI");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
    setCon(false);
    setMessage("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setCon(false);
    setMessage("");
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
    setCon(false);
    setMessage("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCon(false);
    const forNumbers = /^[0-9]+$/;
    const forName = /^[a-zA-Z ]{2,30}$/;
    if (
      forName.test(name) &&
      forNumbers.test(phone) &&
      phone.length === 10 &&
      forNumbers.test(amount)
    ) {
      const val = parseInt(amount, 10);
      if (val <= avail) {
        setAvail(avail - val);
        setCon(true);
        setMessage("Sucessfully Withdrawn.");
        setAmount("");
      } else {
        setCon(true);
        setMessage("Insufficient Balance");
        setAmount("");
      }
    } else {
      setCon(true);
      setMessage("Enter valid details.");
    }
  };

  const resetAll = () => {
    setCon(true);
    setMessage("Welcome to SBI");
    setPhone("");
    setAmount("");
    setName("");
    setAvail(1000);
  };

  return (
    <div className="App">
      <div className="bal">Availavle Balance: {avail}</div>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name:- </label>
        <input
          type="text"
          id="username"
          name="username"
          value={name}
          onChange={handleName}
          maxLength="15"
        />
        <br />
        <br />
        <label htmlFor="mobile">Mobile:- </label>
        <input
          type="text"
          id="mobile"
          name="username"
          value={phone}
          onChange={handlePhone}
          maxLength="10"
        />
        <br />
        <br />
        <label htmlFor="amount">Amount:- </label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={handleAmount}
          maxLength="4"
        />
        <br />
        <br />
        <input type="submit" value="Withdraw" />
      </form>
      <br />
      <button onClick={resetAll}>Reset</button>
      <br />
      <br />
      {con && <div className="msg">{message}</div>}
    </div>
  );
}

export default Atm;
