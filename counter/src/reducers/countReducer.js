export const initialState = { count: 0 };

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const INCREMENT_BY_AMOUNT = 'incrementByAmount';
export const DECREMENT_BY_AMOUNT = 'decrementByAmount';

export const countReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INCREMENT_BY_AMOUNT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT_BY_AMOUNT:
      return { ...state, count: state.count - action.pauload };
    default:
      return state;
  }
};
