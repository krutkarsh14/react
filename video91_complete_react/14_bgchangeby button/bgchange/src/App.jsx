import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState("#47acceff");

  return (
    <>
      <div style={{ backgroundColor: color, height: "100vh", padding: "20px" }}>
        <h1 onClick={()=>setcolor("yellow")}>Background change of body by click button</h1>
        <div className="buttons">
          <button onClick={() => setcolor("red")}>red</button>

          <button onClick={()=>setcolor("green")}>green</button>

          <button onClick={()=>setcolor("orange")}>orange</button>

          <button onClick={()=>setcolor("purple")}>purple</button>

          <button onClick={()=>setcolor("blue")}>blue</button>
        </div>
      </div>
    </>
  );
}

export default App;
