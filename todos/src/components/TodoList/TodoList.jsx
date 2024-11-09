import './TodoList.css';

const TodoList = ({ todos, remove }) => {
  return (
    <ul className="todo-list">
      <h2 className="todo-list__title">Todos List:</h2>
      {todos.map(({ todo, id }) => {
        return (
          <li className="todo-list__item" key={id}>
            <button className="todo-list__remove-button" onClick={() => remove(id)}>
              X
            </button>
            {todo}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
