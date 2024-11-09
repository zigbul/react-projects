import { useReducer } from 'react';
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

const mainStyles = {
  paddingTop: '100px',
  fontFamily: 'Sour Gummy, sans-serif',
  fontWeight: 400,
  fontStyle: 'normal',
};

const App = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <div style={mainStyles}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button name="Increment" clickHandler={() => dispatch({ type: INCREMENT })} />
        <Button name="Decrement" clickHandler={() => dispatch({ type: DECREMENT })} />
        <Button
          name="Increment By Amount"
          clickHandler={() => dispatch({ type: INCREMENT_BY_AMOUNT, payload: 100 })}
        />
        <Button
          name="Decrement by Amount"
          clickHandler={() => dispatch({ type: DECREMENT_BY_AMOUNT, payload: 200 })}
        />
      </div>
      <Counter value={state.count} />
    </div>
  );
};

export default App;
