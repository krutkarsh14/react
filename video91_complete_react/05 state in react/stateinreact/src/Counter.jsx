import { useState } from "react";
function Changecolor (){
    const [color,setcolor] = useState("red")
    const [count,setcount] = useState(0)

    const Colorhandle =()=>{
        setcolor("green")
    }




    return (
        <div>
            <h1>update counter</h1>
            <h1>{color}</h1>
            <button onClick={Colorhandle}>Change the color</button>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}>count button </button>
        </div>
    )
}
export default Changecolor