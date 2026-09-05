import { useEffect, useState } from "react";
import Datafeacher from "./Datafeacher";
function App() {
//   const [count, setCount] = useState(0);
//   const [total,settotal] = useState(1)
  // 1.sideEfect function hai 
  // 2. leanup function hai
  // 3.commma seperated dependency list hoti hai 
  // function clickhandle (){
  //   setCount(count+1)
  // }

  // function totalupdate (){
  //   settotal(total +1);

  // }


  // variation 1- run on every rander 
  // useEffect(() => {
  //   alert("i will run on each rander")
  // })


  // variation 2- run on only first rander
  // useEffect(() => {
  // alert("i will run only first rander.")
  // }, [])


  // variation-3 ye jab count update hota hai tab chlta hai 
  // useEffect(()=>{
  //   alert("this is run when count will be updated")

  // },[count])


  // variation 4 it will run in multiple dependency
  // useEffect(() => {
  //   alert("mai run karunga when count/total update hoga ")
  
    
  // }, [count,total])

  // variation 5 isbar lets add a cleaup function
  // useEffect(() => {
  //   alert("when count is updated")
  
  //   return () => {
  //     alert("when count is unmount from UI")
  //   }
  // }, [count])
  
  

  
  
  

  return (
    <>
    <Datafeacher/>
   {/* <button onClick={clickhandle}>click me </button>
   <br />
   count is: {count}
   <br />
   <button onClick={totalupdate}>click me </button>
   <br />
   totalup date: {total} */}

    </>
  );
}

export default App;
