import { useState } from "react"


function App() {
 const [val,setval] = useState("Utkarsh kumar ")

  return (
    <>
      <h1>Get input field value</h1>
    <input style={{color:"orange"}} value={(val)} type="text" onChange={(event)=>setval(event.target.value)} placeholder="Enter user name" />
    <h1>{val}</h1>
    <button onClick={()=>setval("")}>Clear value</button>
    </>
  )
}

export default App
