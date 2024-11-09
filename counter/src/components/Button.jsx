const Button = ({ name, clickHandler }) => {
  return <button onClick={clickHandler}>{name}</button>;
};

export default Button;
