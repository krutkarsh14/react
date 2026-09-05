import { useState } from 'react'
import User from './User'


function App() {
  const [display,setDisplay] = useState(true)

  return (
    <>
     <h1>Toggle in react js </h1>


     // ye if else condition ke liye tha
     <button onClick={()=>setDisplay(!display)}>Toggle</button>
     {
      display? <User />:null
     }


     // ab multiple condition ke liye sikhage toggle karna

    








    </>
  )
}

export default App
