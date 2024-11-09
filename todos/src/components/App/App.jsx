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

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      {todos.length === 0 ? (
        <h2>There is nothing to do...</h2>
      ) : (
        <TodoList todos={todos} remove={removeTodo} />
      )}
      <Input submit={addTodo} />
    </div>
  );
};

export default App;
App;
