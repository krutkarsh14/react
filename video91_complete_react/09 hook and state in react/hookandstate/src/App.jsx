import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>this is count {count}</h1>
    <button onClick={()=>{setCount(count+1)}}>update count</button>
     
    </>
  )
}

export default App
