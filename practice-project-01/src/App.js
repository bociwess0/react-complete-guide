import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NewUsers from './components/NewUsers';
import Users from './components/Users';

const DUMMY_USERS = [
  {
      id: 1,
      username: 'Nikola',
      age: 23
  }
]

function App() {


const[allUsers, setAllUsers ] = useState(DUMMY_USERS);

const addUsersHandler = (user) => {
    setAllUsers((prevUsers) => {
    return [user, ...prevUsers];
    });
}

  return <div className='container'>
        <NewUsers onAddUser ={addUsersHandler}/>
        <Users users={allUsers}/>
  </div>
  
}

export default App;