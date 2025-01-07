import { useState } from "react";
import Button from "./Button";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="bg-emerald-50 p-4 rounded-lg">
      <h1 className="text-2xl p-4 font-bold text-center">The Famous Counter Component</h1>
      <div className="grid grid-cols-2 gap-4 w-1/2 mx-auto">
        <Button onClick={decrement} text="Decrement" />
        <Button onClick={increment} text="Increment" />
      </div>
      <p className="text-9xl w-1/6 font-semibold shadow-xl text-emerald-50 border-2 border-emerald-950 shadow-emerald-800/50 mx-auto m-8 p-8 bg-emerald-700 rounded-full text-center">{counter}</p>
    </div>
  );
}

export default Counter;
