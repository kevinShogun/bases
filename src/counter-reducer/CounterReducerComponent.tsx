import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import { doIncreaseBy, doReset } from "./actions/actions";

const INITAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerComponent = () => {
  const [CounterState, dispatch] = useReducer(counterReducer, INITAL_STATE);

  const handleReset = () => {
    dispatch(doReset());
  };

  const increaseBy = (value: number) => {
    dispatch(doIncreaseBy(value));
  };

  return (
    <>
      <h1>Counter Reducer Component segmentado: {} </h1>
      <pre>{JSON.stringify(CounterState, null, 3)}</pre>

      <button className="" onClick={() => increaseBy(1)}>
        + 1
      </button>

      <button className="" onClick={() => increaseBy(5)}>
        + 5
      </button>

      <button className="" onClick={() => increaseBy(10)}>
        + 10
      </button>

      <button className="" onClick={handleReset}>
        reset
      </button>
    </>
  );
};
