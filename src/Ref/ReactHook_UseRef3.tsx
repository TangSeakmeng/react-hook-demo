import React, { useState, useEffect, useRef } from 'react';

function ReactHook_UseRef3(props: any) {
  const [name, setName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = 'Focused';
    }
  }

  return (
    <div>
      <p>Name: { name }</p>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={focus}>Focus</button>
    </div>
  );
}

export default ReactHook_UseRef3;

// ----------------------------------------------------------------------------------------

// interface RefObject {
//   SayHi: () => void
// }

// const Child = forwardRef((props: {name: string}, ref: Ref<RefObject>)=> {
//   const {name} = props;  
//   useImperativeHandle(ref, () => ({ SayHi }));
//   function SayHi() { console.log("Hello " + name); }

//   return <div>{name}</div>;
// });

// const Parent = () => {
//   const ref = useRef<RefObject>(null);
//   const onButtonClick = () => {
//     if (ref.current) {
//       ref.current.SayHi();
//     }
//   };
//   return (
//     <div>
//       <Child name="Adam" ref={ref}/>
//       <button onClick={onButtonClick}>Log console</button>
//     </div>
//   );
// }