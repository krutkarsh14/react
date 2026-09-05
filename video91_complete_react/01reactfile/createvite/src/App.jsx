import { use, useState } from "react";
import Header from "./Header";
import User from "./user.";
function Apple() {
  const [counter,setcounter]=useState(0)
  return (
    <div>
       <Header></Header>
      <h1>Hello react</h1>
      <h1> Hello React 19</h1>
      <User></User>
      <button onClick={()=>setcounter(counter+1)}>increase counter val:{counter} </button>
     
    </div>
  );
}
export default Apple;
