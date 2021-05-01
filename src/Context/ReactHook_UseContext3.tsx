import React from 'react';
import { MovieProvider } from './MovieContext';
import ReactHook_UseContext_Child3 from './ReactHook_UseContext_Child3';

function ReactHook_UseContext(props: any) {
  return (
    <MovieProvider>
      <ReactHook_UseContext_Child3 />
    </MovieProvider>
  );
}

export default ReactHook_UseContext;