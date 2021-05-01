import React, { useState } from 'react';
import { createContext } from 'react';
import ReactHook_UseContext_Child1 from './ReactHook_UseContext_Child1';

const initialState = {
  movie: 'Star War: Complete Series',
  movies: [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ]
};

export const StateContext = createContext(initialState);

function ReactHook_UseContext(props: any) {
  return (
    <StateContext.Provider value={initialState}>
      <ReactHook_UseContext_Child1 />
    </StateContext.Provider>
  );
}

export default ReactHook_UseContext;