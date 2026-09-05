

// import { Footer } from "./Usercomponet"
import Login,{Profile,Footer,name} from "./Usercomponet"
function App() {

  return (
    <>
    <h2>first compoments</h2>
    <Fruits></Fruits>
    <Color></Color>
    <Login></Login>
    <Profile></Profile>
    <Footer></Footer>
    </>
  )
}
function Fruits() {
  return(
    <h2>Apple</h2>
  )
}
function Color (){
  return (
    <h2>red Color</h2>
  )
}


export default App
