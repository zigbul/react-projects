const styles = {
  margin: '0 10px',
  padding: '5px',
  borderRadius: '10px',
  border: '2px solid gray',
  fontFamily: 'Sour Gummy, sans-serif',
};

const Button = ({ name, clickHandler }) => {
  return (
    <button style={styles} onClick={clickHandler}>
      {name}
    </button>
  );
};

export default Button;
