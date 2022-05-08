import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}

type CounterAction = 
   | {type: 'increaseBy', payload: {value: number}}
   | {type: 'reset'};


const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'reset':
      return{
        counter: 0,
        changes: 0,
        previous: 0,
      }
      case 'increaseBy': 
      return {
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1
      }
  
    default:
      return state;
  }
}

export const CounterReducerComponent = () => {


  const [{counter, previous, changes}, dispatch] = useReducer(counterReducer, INITAL_STATE)

  const handleReset = () => {
    dispatch( {type: 'reset'} )
  };

  const increaseBy = (value: number) => {
    dispatch({type: "increaseBy", payload: {value}})
  }

  return (
    <>
      <h1>Counter Reducer Component: {counter} </h1>

    <h4>Changes: {changes}</h4>
    <h4>previous: {previous}</h4>

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
