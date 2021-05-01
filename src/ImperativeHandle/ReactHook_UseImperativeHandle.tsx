import React, { useEffect, useRef } from 'react';
import CoolButton from './CoolButton';

function ReactHook_UseImperativeHandle(props: any) {
  const btnCoolButtonRef = useRef<any>(null);

  useEffect(() => {
    if (btnCoolButtonRef.current) {
      btnCoolButtonRef.current.innerText = 'Click Me!';
    }
  }, [])

  const btnCoolButtonClicked = () => {
    alert('btnCoolButton is clicked!');
  }

  return (
    <div>
      <CoolButton ref={btnCoolButtonRef} btnCoolButtonClicked={btnCoolButtonClicked}/>
    </div>
  );
}

export default ReactHook_UseImperativeHandle;