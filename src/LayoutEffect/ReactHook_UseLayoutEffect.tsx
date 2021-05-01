import React, { useLayoutEffect } from 'react';
import { useRef } from 'react';

function ReactHook_UseLayoutEffect(props: any) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // run after render but before painting to the screen
  useLayoutEffect(() => {
    const btn = buttonRef.current?.getBoundingClientRect();
    console.log(btn)
  })

  return (
    <div>
      <button ref={buttonRef}></button>
    </div>
  );
}

export default ReactHook_UseLayoutEffect;