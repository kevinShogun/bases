import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initValue={15} />

      <CounterBy />

      <CounterEffect />
      <CounterHook/>
    </>
  );
}

export default App;
