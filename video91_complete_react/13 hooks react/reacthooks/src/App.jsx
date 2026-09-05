import { useState } from "react";
import "./App.css";

function App() {
  const [first, setfirst] = useState(1);
  // let counter = 15;

  return (
    <>
      <h1>chai aur code </h1>
      <button onClick={() => setfirst(first + 1)}>click me {first} </button>
      <button onClick={() => setfirst(first + 1)}>click me {first} </button>
      <button onClick={() => setfirst(first + 1)}>click me {first} </button>
      <button onClick={() => setfirst(first + 1)}>click me {first}</button>
      <button onClick={() => setfirst(first + 1)}>click me {first}</button>
      <button onClick={() => setfirst(first + 1)}>click me {first}</button>
      <button onClick={() => setfirst(first - 1)}>
        click me {first} {first}{" "}
      </button>
    </>
  );
}

export default App;
