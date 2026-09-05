import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>{count}</h1>
     <button onClick={()=>setCount(count+1)}>counter</button>
     {
      count==0?(<h1>mai kam karunga 0 pe</h1>):
      count==10?(<h1>mai kam karunga 10 pe</h1>)
      
      :null
     }
    </>
  )
}

export default App
