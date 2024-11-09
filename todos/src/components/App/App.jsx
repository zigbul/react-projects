import { useState } from 'react';
import './App.css';
import generateId from '../../utils/generateId.js';
import TodoList from '../TodoList/TodoList';
import Input from '../Input/Input';

const App = () => {
  const [todos, setTodos] = useState([{ todo: 'make a game', id: 1 }]);

  const addTodo = (e) => {
    e.preventDefault();

    const todo = new FormData(e.target).get('todo');

    if (todo) {
      setTodos([...todos, { todo, id: generateId() }]);
      e.target.reset();
    }
  };

  return (
    <div className="container">
      {todos.length === 0 ? <h2>There is nothing to do...</h2> : <TodoList todos={todos} />}
      <Input submit={addTodo} />
    </div>
  );
};

export default App;
App;
