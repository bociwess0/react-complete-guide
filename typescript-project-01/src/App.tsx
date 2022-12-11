import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Todos items={['Learn React', 'Learn Typescript']} />
      <NewTodo />
    </div>
  );
}

export default App;
