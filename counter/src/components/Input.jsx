const styles = {
  marginTop: '50px',
  fontFamily: 'Sour Gummy, sans-serif',
  fontSize: '36px',
};

const Input = ({ inputRef }) => {
  return <input style={styles} ref={inputRef} type="number" placeholder="Type value..." />;
};

export default Input;
