import { useEffect, useRef, useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {
  const { elementToAnimate, counter, handleClick } = useCounter({
    maxCount: 10,
  });

  return (
    <>  
      <h1 >Counter Hook: </h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <button className="" onClick={handleClick}>
        + 1
      </button>
    </>
  );
};
