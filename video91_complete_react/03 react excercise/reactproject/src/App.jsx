import Image from "./Image";
function App() {
  const name = "Anup kumar";
  function Apple() {
    return "mai mango hu";
  }
  let x = 10;
  let y = 20;
  let userobj = {
    name: "Anup kumar",
    email: "karsh045pk@gmail.com",
    age: 22
  }


  return (
    <>
      <h1>Utkash Todo Apps</h1>
      <Image></Image>
      <h1>{name}</h1>
      <h1>{Apple}</h1>
      <h1>{x+y}</h1>
     <h3>{userobj.name}</h3>
     <h3>{userobj.age}</h3>
     <h3>{userobj.email}</h3>
     
    </>
  );
}

export default App;
