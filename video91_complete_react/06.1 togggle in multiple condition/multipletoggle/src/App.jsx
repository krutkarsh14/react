import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count} </h1>
      <button onClick={() => setCount(count + 1)}>conter</button>
      {
      count == 0 ? (
        <h1>mai kam kar gya</h1>
      ) : count == 1 ? (
        <h1>mai ab 2 ke liye kam karunga </h1>
      ) : 
      count==2?<h1>mai 2 ke liye kam karunga</h1>
      :null
      }
    </>
  );
}

export default App;
