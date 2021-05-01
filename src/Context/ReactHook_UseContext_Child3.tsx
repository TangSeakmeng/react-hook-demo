import React from 'react'; 
import { useMovie, useMovieUpdate } from './MovieContext';

function ReactHook_UseContext_Child3(props: any) {
  const context: any = useMovie();
  const updateContext = useMovieUpdate();

  return (
    <div>
      <button onClick={updateContext}>Update Movie</button>
      <h1>{ `${context.episode}: ${context.title}` }</h1>
    </div>
  );
}

export default ReactHook_UseContext_Child3;
