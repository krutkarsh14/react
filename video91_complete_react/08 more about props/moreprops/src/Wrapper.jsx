function Wrapper ({children,color="blue"}){ // yaha default color blue dega 
    return (
        <div style={{color:"green", border:"2px solid green", width:"400px", margin:"10px"}} >
            {children}

        </div>
    )
}
export default Wrapper;