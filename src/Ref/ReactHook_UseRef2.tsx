import React, { useState, useEffect, useRef } from 'react';

function ReactHook_UseRef2(props: any) {
  const [name, setName] = useState('');
  // const [renderCount, setRenderCount] = useState(0);

  // useEffect(() => {
  //   setRenderCount(renderCount => renderCount + 1)
  // }, [name]);

  const renderCount = useRef(1);
   useEffect(() => {
    renderCount.current = renderCount.current + 1
  });

  return (
    <div>
      <p>Name: { name }</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>I rendered { renderCount.current } times.</div>
    </div>
  );
}

export default ReactHook_UseRef2;