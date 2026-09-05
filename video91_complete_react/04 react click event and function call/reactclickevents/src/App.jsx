

function App() {
  function callfun(){
    alert("function called")
  }
  // ab arrow function ke dwara dekhenge 
  const fruit = ()=>{
    alert("Mai apple hu")
  }
  function alertmessage (){
    alert("i am alert message")
  }


  return (
    <>
    <h1>Event and function call</h1>
    <button onClick={fruit}>click Me</button>
    <button onClick={alertmessage}>alert message</button>

     
    </>
  )
}

export default App
