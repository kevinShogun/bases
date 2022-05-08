import { useEffect, useRef, useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {
  const { elementToAnimate, counter, handleClick } = useCounter({
    maxCount: 10,
  });

  return (
    <div ref={elementToAnimate}>
      <h1>Counter Hook: </h1>
      <h2>{counter}</h2>
      <button className="" onClick={handleClick}>
        + 1
      </button>
    </div>
  );
};
