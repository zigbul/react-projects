import { useReducer } from 'react';
import {
  countReducer,
  initialState,
  INCREMENT,
  DECREMENT,
  INCREMENT_BY_AMOUNT,
  DECREMENT_BY_AMOUNT,
} from '../reducers/countReducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div></div>;
};

export default App;
