import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClicked = useCallback(() => {
    console.log("your button is clicked")
    setCount(prev => prev + 1)
  }, [])

  return (
    <>
      <button onClick={handleClicked}>Increment: {count}</button>
    </>
  )
}

export default App
