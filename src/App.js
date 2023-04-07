import './App.css';
import Todo from './Todo';
const DUMMY_TODOS = ['Learn React', 'Practice React', 'Profit!'];

function App() {
  //const todos = DUMMY_TODOS;
  return (
    <ul>
      {DUMMY_TODOS.map((todoItem) => (
        <Todo text={todoItem} />
      ))}
    </ul>
  );
}

export default App;
