import { useState } from "react";

type CounterState = {
  initValue: number;
};

export const Counter = ({ initValue }: CounterState) => {
  const [counter, setCounter] = useState(initValue);

  const handleClick = () => {
    setCounter((c) => c + 1);
  };
  return (
    <>
      <h1>Counter: {counter} </h1>

      <button className="" onClick={handleClick}>
        + 1
      </button>
    </>
  );
};
