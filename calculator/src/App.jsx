import { useState } from 'react';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const clear = () => setInputValue('');
  const display = (value) => setInputValue(inputValue + value);
  const calculate = () => setInputValue(eval(inputValue));

  return (
    <div className="container">
      <form className="calculator">
        <input type="text" className="value" value={inputValue} />

        <span onClick={() => display('1')}>1</span>
        <span onClick={() => display('2')}>2</span>
        <span onClick={() => display('3')}>3</span>
        <span className="operator" onClick={() => display('+')}>
          +
        </span>

        <span onClick={() => display('4')}>4</span>
        <span onClick={() => display('5')}>5</span>
        <span onClick={() => display('6')}>6</span>
        <span className="operator" onClick={() => display('-')}>
          -
        </span>

        <span onClick={() => display('7')}>7</span>
        <span onClick={() => display('8')}>8</span>
        <span onClick={() => display('9')}>9</span>
        <span className="operator" onClick={() => display('*')}>
          *
        </span>

        <span className="clear" onClick={() => clear()}>
          C
        </span>
        <span onClick={() => display('0')}>0</span>
        <span className="operator" onClick={() => display('.')}>
          .
        </span>
        <span className="operator" onClick={() => display('/')}>
          /
        </span>

        <span className="equal" onClick={() => calculate()}>
          =
        </span>
      </form>
    </div>
  );
};

export default App;
