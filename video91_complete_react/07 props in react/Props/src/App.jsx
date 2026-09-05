import User from "./User";
import College from "./College";
function App() {
  // pahle yaha pe user name ka obj banaya fir isko return me
  let Userobj = {
    name: "Utkarsh kumar",
    age: "21",
    email: "karsh@gamil.com",
  };



  let Userobj2 = {
    name: "Anup kumar",
    age: "241",
    email: "Maianup@gmail.com",
  };



  let usermarks ={
    Utkarsh : "90",
    Anup : "95",
  };



  let collegename = ['rcet','rit','nit','mit']

  return (
    <>
      <h1>props in reactjs</h1>
      <College names = {collegename [0]}></College>
      <College names = {collegename[1]}></College>
      <College names = {collegename[2]}></College>



      {/* <User name = "anup kumar" email="karsh@test.com" age={21}/>  */}
      <User user={Userobj} /> // yese object banake bhi pass kar sakte hai
      <User user={Userobj2}/>
      <User user = {usermarks}></User>
     
    </>
  );
}

export default App;
