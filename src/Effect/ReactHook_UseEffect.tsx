import React, { useEffect, useState } from 'react';

function ReactHook_UseEffect(props: any) {
  const [count, setCount] = useState(0);
  const [trueOrFalse, setTrueOrFalse] = useState(true);

  const btnIncrease = () => {
    setCount(count + 1);
  }

  // execute when mounted and state changes
  useEffect(() => {
    alert('execute when mounted and state changes')
  })
  
  // execute only once when component initialized
  useEffect(() => {
    alert('execute only once when component initialized')
  }, [])
  
  // execute only once when component initialized + track only state that registered and update component
  useEffect(() => {
    alert('execute only once when component initialized + track only state that registered and update component')
  }, [count])
  
  // execute only once when component destroyed
  useEffect(() => {
    return () => alert('execute only once when component destroyed');
  }) 

  return (
    <div>
      <p>Number: {count}</p>
      <button onClick={() => btnIncrease()}>Increase</button>
    </div>
  )
}

export default ReactHook_UseEffect;

// -----------------------------------------------------------------------------

// import React, { Component } from 'react'

// export default class ReactHook_UseEffect extends Component {

//   constructor(props: any) {
//     super(props);
//   }

//   componentDidMount() {
//     // initialized
//   }

//   componentDidUpdate() {
//     // state updated
//   }

//   componentWillUnmount() {
//     // destroyed
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello from Class Component!</h1>
//       </div>
//     )
//   }
// }
