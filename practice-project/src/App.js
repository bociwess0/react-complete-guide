import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/Form';
import NewUsers from './components/NewUsers';


function App() {
  return <div className='container'>
        <Form />
        <NewUsers />
  </div>
  
}

export default App;
