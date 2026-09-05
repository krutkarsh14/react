import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showtbn,setshowbtn] = useState(false)
  const [first, setfirst] = useState(1)
  const [second, setsecond] = useState(2)
  const [color, setcolor] = useState("#ef4444")
  const randomcolor = ()=>{
    return "#"+ Math.floor(Math.random() * 532552255);
  }


  // css iin backround in button lans lawa 
   const btnStyle = {

    backgroundColor: "#4F46E5",
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* { showtbn?<button>it will when when return false in usestate</button>:"kuchh ni dikhega"} */}
      { showtbn && <button>it will show only when second button is clicked</button>}
      <div className="card">
        <button onClick={() => setshowbtn((!showtbn))}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={()=>setfirst(first+1)}>click me {first}</button>
      <br></br>
      <button style={btnStyle} onClick={()=>setfirst(first+1)}>click me again {first}</button>
      <button>click me</button>
    </>

  )
}

export default App
