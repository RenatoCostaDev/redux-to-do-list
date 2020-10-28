import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import ToDoInput from './components/TodoInput'
import ToDoList from './components/TodoList'

function App() {
  return (
    <div className="App m-5">
      <ToDoInput />
      <ToDoList />
    </div>
  );
}

export default App;
