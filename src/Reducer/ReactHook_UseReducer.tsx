import React, { useReducer } from 'react';

// const initialState = 0;

// const reducer = (state: any, action: any) => {
//   switch (action) {
//     case 'increment': return state + 1;
//     case 'decrement': return state - 1;
//     case 'reset': return 0;
//     default: throw new Error('Unexpected action');
//   }
// };

const initialState = {
  count: 0,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 };
    default:
      throw new Error('Unexpected action');
  }
};

function ReactHook_UseReducer(props: any) {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Number: {count.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>

      {/* <button onClick={() => dispatch('increment')}>+1</button>
      <button onClick={() => dispatch('decrement')}>-1</button>
      <button onClick={() => dispatch('reset')}>reset</button> */}
    </div>
  );
}

export default ReactHook_UseReducer;