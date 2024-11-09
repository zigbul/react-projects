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

const styles = {
  fontFamily: 'Sour Gummy, sans-serif',
  fontWeight: 400,
  fontStyle: 'normal',
};

const App = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <div style={styles}>
      <Counter value={state.count} />
    </div>
  );
};

export default App;
