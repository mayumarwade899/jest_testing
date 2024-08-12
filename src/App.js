import { useState } from "react";
import LoginForm from "./LoginForm";
import FormList from "./FormList"

function App() {
const [users, setUsers] = useState([]);

const onUserAdd = (user) => {
  setUsers([...users, user])
}

  return (
    <div>
      <LoginForm onUserAdd={onUserAdd}/>
      <hr/>
      <FormList users={users}/>
    </div>
  )
}

export default App;
