import React, { useRef } from 'react';

function ReactHook_UseRef(props: any) {
  const count = useRef(0);

  return (
    <div>
      <p>Count: {count.current}</p>
      <button onClick={() => count.current++}>Increment</button>
    </div>
  );
}

export default ReactHook_UseRef;