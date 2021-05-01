import React, { useState } from 'react';

const ReactHook_UseState = () => {
  const [state, setstate] = useState(0);

  const btnIncrease = () => {
    setstate(state + 1);
  }

  return (
    <div>
      <p>Number: {state}</p>
      <button onClick={() => btnIncrease()}>Increase</button>
    </div>
  )
 }

export default ReactHook_UseState;
