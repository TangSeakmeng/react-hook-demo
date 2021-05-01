import React, { useContext } from 'react';
import { StateContext } from './ReactHook_UseContext';

function ReactHook_UseContext_Child1(props: any) {
  const data = useContext(StateContext);

  return (
    <div>
      <h1>{ data.movie }</h1>
      <ul>
        {
          data.movies.map((item, index) => {
            return (
              <li key={index}>{ item }</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default ReactHook_UseContext_Child1;