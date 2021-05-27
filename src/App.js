import {useState} from 'react';
import AddUser from "./components/User/AddUser";
import UserList from './components/User/UserList';

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);

  const addUser = (uName, uAge) => {
    let newUser = {name:uName, age:uAge, id: Math.random().toString()};
    setUsers(usersList => [...usersList, newUser]);
  }

  return (
    <div>
      <AddUser addUser={addUser}/>
      <UserList users={users} />
    </div>
  );
}

export default App;
