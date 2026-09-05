import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);

  const heavyWork = () => {
    console.log("Heavy work running...");
    let x = 0;
    for (let i = 0; i < 1000000000; i++) {
      x += i;
    }
    return x;
  };

  // ✔ Calculation ko memoize kar diya
  const result = useMemo(() => heavyWork(), []);

  return (
    <>
      <h2>Heavy Result: {result}</h2>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
     
    </>
  );
}

export default App;
