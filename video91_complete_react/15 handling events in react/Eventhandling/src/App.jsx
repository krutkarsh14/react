import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [name,setname ] = useState("Anup")

  const clickevent = ()=>{
    alert ("Hey i am clicked")
    // alert ("i am click again")
  }
   
  const mousehover = ()=>{
    alert("Hey i am mouse hover")
  }

  // yese input handle kiya jata hai react  me practice kar ke hi aayega 
  const handlechanged = (e)=>{
    setname(e.target.value)
  }
  

  return (
    <>
      <button onClick={clickevent}>click me </button>
      {/* <div className="container" onMouseOver={mousehover}>
        mouse hover
      </div> */}
      <input type="text" value={name} onChange={handlechanged} />
    </>
  )
}

export default App
