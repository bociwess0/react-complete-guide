import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NewUsers from './components/NewUsers/NewUsers';
import Users from './components/Users/Users';

function App() {


const[allUsers, setAllUsers ] = useState([]);


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