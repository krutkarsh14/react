import { useState } from "react";
import Changecolor from "./Counter";

function App() {
  const [fruit, setfruit] = useState("apple");

  const hanslefruit = () => {
    setfruit("banana");
  };

  return (
    <>
      <h1>State in react js </h1>
      <h1>{fruit}</h1>
      <button onClick={hanslefruit}>Change fruit name</button>
      <Changecolor />
    </>
  );
}

export default App;
