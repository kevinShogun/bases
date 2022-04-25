import { useState } from "react";

type Props = {
  initValue?: number;
};

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initValue = 0 }: Props) => {
  const [{ counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initValue,
    clicks: 0,
  });

  const handleClick = (props: number) => {
    setCounterState(({ clicks, counter }) => ({
      counter: counter + props,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h1>CounterBy: {counter} </h1>
      <h1>Clicks: {clicks} </h1>

      <button className="" onClick={() => handleClick(1)}>
        + 1
      </button>

      <button className="" onClick={() => handleClick(5)}>
        + 5
      </button>
    </>
  );
};
