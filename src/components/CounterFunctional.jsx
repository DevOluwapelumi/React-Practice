import { useState } from "react";

export default function CounterFunctional() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <button
        onClick={() => setCounter(counter + 1)}
        className="counter-button"
      >
        +
      </button>
      <span className="counter"> {counter} </span>
      <button
        onClick={() => setCounter(counter - 1)}
        className="counter-button"
      >
        -
      </button>
    </div>
  );
}
