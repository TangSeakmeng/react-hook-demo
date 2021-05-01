import React, { forwardRef } from 'react';
import { useRef } from 'react';

function CoolButton({ btnCoolButtonClicked }: any, ref: any) {
  return (
    <button ref={ref} onClick={btnCoolButtonClicked}>CoolButton</button>
  );
}

const forwardCoolButton = forwardRef(CoolButton)

export default forwardCoolButton;