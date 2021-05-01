import React, { useState, useMemo } from 'react';

function ReactHook_UseMemo(props: any) {
  const [count, setCount] = useState(60);
  const expensiveCount = useMemo(() => {
    return count ** 2;
  }, [count]);

  return (
    <div>
      
    </div>
  );
}

export default ReactHook_UseMemo;