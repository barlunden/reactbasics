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
    <div className="w-1/2 p-2 bg-emerald-100 border-2 border-emerald-700 mx-auto mt-5 rounded-xl">
      <h1 className="text-2xl p-4 font-bold text-center">The Famous Counter Component</h1>
      <div className="grid grid-cols-2 gap-4 w-4/5 mx-auto">
        <Button onClick={decrement} text="Decrement" />
        <Button onClick={increment} text="Increment" />
      </div>
      <p className="text-9xl w-fit font-semibold shadow-xl text-emerald-50 border-2 border-emerald-950 shadow-emerald-800/50 mx-auto m-8 px-8 py-4 bg-emerald-700 rounded-lg text-center">{counter}</p>
    </div>
  );
}

export default Counter;
