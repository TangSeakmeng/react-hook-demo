import React, { Component } from 'react';
import { StateContext } from './ReactHook_UseContext2';

export class ReactHook_UseContext_Child3 extends Component {
  constructor(props: any) {
    super(props);
  }
  
  render() {
    return (
      <StateContext.Consumer>
        {
          (data: any) => {
            return <div>{ `${data.movie.episode}: ${data.movie.title}` }</div>
          }
        }
      </StateContext.Consumer>
    )
  }
}

export default ReactHook_UseContext_Child3;

