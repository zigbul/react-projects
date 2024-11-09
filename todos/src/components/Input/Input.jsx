const Input = ({ submit }) => {
  return (
    <form onSubmit={(e) => submit(e)}>
      <input type="text" placeholder="Type new todo" name="todo" />
      <button type="submit">Add</button>
    </form>
  );
};

export default Input;
