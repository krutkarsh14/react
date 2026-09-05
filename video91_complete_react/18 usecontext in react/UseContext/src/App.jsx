import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

// step-1 create usercontext like below
const UserContext = createContext();

//step-2 jis bhi child ko provide karna chahte ho usko usko provider sewrap karo
// step-3 pass value
//step-4 consumer ke andar ja ke consume kar lo

function App() {
  const [user, setuser] = useState({ name: "Anup kr" });
  return (
    <>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };
