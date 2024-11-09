const TodoList = ({ todos }) => {
  return (
    <ul>
      <h2>Todos List:</h2>
      {todos.map(({ todo, id }) => {
        return <li key={id}>{todo}</li>;
      })}
    </ul>
  );
};

export default TodoList;
