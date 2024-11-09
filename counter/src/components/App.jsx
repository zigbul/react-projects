import { useReducer, useRef } from 'react';
import {
  countReducer,
  initialState,
  INCREMENT,
  DECREMENT,
  INCREMENT_BY_AMOUNT,
  DECREMENT_BY_AMOUNT,
} from '../reducers/countReducer';
import Counter from './Counter';
import Button from './Button';
import Input from './Input';

const mainStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '100px',
  fontFamily: 'Sour Gummy, sans-serif',
  fontWeight: 400,
};

const App = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);
  const inputRef = useRef({ value: '' });

  return (
    <div style={mainStyles}>
      <div>
        <Button name="Increment" clickHandler={() => dispatch({ type: INCREMENT })} />
        <Button name="Decrement" clickHandler={() => dispatch({ type: DECREMENT })} />
        <Button
          name="Increment By Amount"
          clickHandler={() =>
            dispatch({ type: INCREMENT_BY_AMOUNT, payload: +inputRef.current.value })
          }
        />
        <Button
          name="Decrement by Amount"
          clickHandler={() => {
            dispatch({ type: DECREMENT_BY_AMOUNT, payload: +inputRef.current.value });
          }}
        />
      </div>
      <Input inputRef={inputRef} />
      <Counter value={state.count} />
    </div>
  );
};

export default App;
