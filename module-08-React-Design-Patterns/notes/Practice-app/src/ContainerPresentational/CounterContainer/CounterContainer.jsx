import CountDisplay from "../CounterDisplay/CountDisplay";
import useCounter from "../../CustomHooks/useCounter";

function CounterContainer() {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div>
      <CountDisplay count={count} />
      <button onClick={increment}>Inc</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Dec</button>
    </div>
  );
}

export default CounterContainer;
