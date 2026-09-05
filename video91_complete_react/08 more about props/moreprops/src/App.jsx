import User from "./User";
import Wrapper from "./Wrapper";
function App() {
  

  return (
    <>
    <h1>Props in react js</h1>
    {/* <User name="Utkarsh"/>
    <User name = "Ravan"/>
     */}
     <Wrapper color= "blue">
       <h1>Hi everyone</h1>
     </Wrapper>
     <Wrapper>
       <h1>Hi Utkarsh</h1>
     </Wrapper>
     <Wrapper>
       <h1>Hi Master</h1>
       <h2 style={{color: "red"}}>Please login</h2> // yaha alag se bhi color de sakte hai
     </Wrapper>


    
    </>
  )
}

export default App;
