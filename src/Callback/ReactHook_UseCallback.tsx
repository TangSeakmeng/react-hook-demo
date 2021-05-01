import React from 'react';
import { useState, useCallback } from 'react';
import List from './List';

function ReactHook_UseCallback(props: any) {
  const [number, setNumber] = useState(60);
  const [dark, setDark] = useState(false);

  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // }

  const getItems = useCallback((incrementor) => {
    return [number, number + 1 + incrementor, number + 2 + incrementor];
  }, [number]);

  const theme = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  return (
    <div style={theme}>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  );
}

export default ReactHook_UseCallback;