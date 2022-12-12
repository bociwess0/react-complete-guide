import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  //never[] - only an empty array
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => { //udating the previous state
      return prevTodos.concat(newTodo); //array with elemnts of prevTodos and newTodo
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo = {addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
