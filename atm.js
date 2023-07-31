import { useState } from "react";
import "./styles.css";
export default function Form() {
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");
  const [option, setOption] = useState("");
  const deposit = () => {
    const newBalance = parseInt(balance) + parseInt(amount);
    setBalance(newBalance);
    alert("DEPOSIT SUCCESSFUL");
  };
  const withdraw = () => {
    if (parseInt(amount) > parseInt(balance)) {
      alert("INSUFFICIENT BALANCE");
    } else {
      const newBalance = parseInt(balance) - parseInt(amount);
      setBalance(newBalance);
      alert("WITHDRAWAL SUCCESSFUL");
    }
  };
  const Main = () => {
    if (!balance) {
      alert("No balance in account");
      return;
    }
    if (option === "DEPOSIT") {
      deposit();
    } else if (option === "WITHDRAWL") {
      withdraw();
    } else {
      alert("INVALID DETAILS");
    }
  };
  return (
    <div className="App">
      <>
        <h1>ATM</h1>
        <label>BALANCE </label>
        <input
          type="number"
          id="bal"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setOption(e.target.value)}>
          <option>DEPOSIT</option>
          <option>WITHDRAWL</option>
        </select>
        <br />
        <br />
        <label>AMOUNT </label>
        <input
          type="number"
          id="amt"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <br />
        <button onClick={Main}>PERFORM ACTION</button>
      </>
    </div>
  );
}