import './App.css';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import { useState } from "react";

const App = () => {
  let usersArray = [{id: 1, name: 'Max', age: 22}, {id: 2, name: 'Maxine', age: 14}]

  const [allUsers, setAllUsers] = useState(usersArray)

  const addUser = user =>{
    setAllUsers(prevUsers => {
			return [...prevUsers, user]
		})
		usersArray = [...usersArray, user]
  }

  return (
    <div>
      <section id="goal-form">
      <UserForm newUser={addUser}/>
      </section>
      <section id="goals">
      <UserList users={allUsers} />
      </section>
    </div>
  );
};

export default App;
