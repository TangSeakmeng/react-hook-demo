/* global document */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './styles/app.scss';

import ReactHook_UseState from './State/ReactHook_UseState';
import ReactHook_UseEffect from './Effect/ReactHook_UseEffect';
import ReactHook_UseContext from './Context/ReactHook_UseContext';
import ReactHook_UseContext2 from './Context/ReactHook_UseContext2';
import ReactHook_UseContext3 from './Context/ReactHook_UseContext3';
import ReactHook_UseReducer from './Reducer/ReactHook_UseReducer';
import ReactHook_UseRef from './Ref/ReactHook_UseRef';
import ReactHook_UseRef2 from './Ref/ReactHook_UseRef2';
import ReactHook_UseRef3 from './Ref/ReactHook_UseRef3';
import ReactHook_UseRef4 from './Ref/ReactHook_UseRef4';
import ReactHook_UseMemo from './Memo/ReactHook_UseMemo';
import ReactHook_UseMemo2 from './Memo/ReactHook_UseMemo2';
import ReactHook_UseCallback from './Callback/ReactHook_UseCallback';
import ReactHook_UseImperativeHandle from './ImperativeHandle/ReactHook_UseImperativeHandle';
import ReactHook_UseLayoutEffect from './LayoutEffect/ReactHook_UseLayoutEffect';
import ReactHook_UseDebugValue from './DebugValue/ReactHook_UseDebugValue';

ReactDOM.render(
  <React.StrictMode>
    <ReactHook_UseDebugValue />
  </React.StrictMode>,
  document.getElementById('root'),
);
