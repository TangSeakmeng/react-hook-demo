import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';

function ReactHook_UseMemo2(props: any) {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // const doubleNumber = slowFunction(number);

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number]);

  // const themeStyles = {
  //   backgroundColor: dark ? 'black' : 'white',
  //   color: dark ? 'white' : 'black'
  // }

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark]);

  useEffect(() => {
    console.log('theme changed')
  }, [themeStyles]);

  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

export default ReactHook_UseMemo2;

function slowFunction(num: any) {
  console.log('calling slow function')
  for (let i = 0; i <= 1000000000; i++) { }
  return num * 2;
}