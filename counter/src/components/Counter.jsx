const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  translate: '-50% -50%',
  fontSize: '70px',
};

const Counter = ({ value }) => {
  return <div style={styles}>Count: {value}</div>;
};

export default Counter;
