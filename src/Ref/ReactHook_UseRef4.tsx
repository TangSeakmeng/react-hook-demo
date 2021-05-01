import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

function ReactHook_UseRef4(props: any) {
  const [name, setName] = useState('');
  const prevName = useRef('');

  useEffect(() => {
    prevName.current = name;
  }, [name])

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>My name is {name} and it used to be {prevName.current}.</p>
    </div>
  );
}

export default ReactHook_UseRef4;