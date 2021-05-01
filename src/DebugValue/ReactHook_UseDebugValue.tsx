import React, { useDebugValue, useEffect } from 'react';
import { useState } from 'react';

function useDisplayName() {
  const [displayName, setDisplayName] = useState('Hello! Im Anonymous.');

  useEffect(() => {
    setTimeout(() => {
      const data = 'Hello! Im Belin.';
      setDisplayName(data);
    }, 2000);
  }, [displayName]);

  useDebugValue(displayName ?? 'Loading...');

  return displayName;
}

function ReactHook_UseDebugValue(props: any) {
  const displayName = useDisplayName();

  return (
    <div>
      <button>{ displayName }</button>
    </div>
  );
}

export default ReactHook_UseDebugValue;