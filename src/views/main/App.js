import React from 'react';
import './App.css';
import LeftMenu from '../menu';
import Topline from '../topline';
import { handleRoute } from '../../route'
function App(props) {
  return (
    <div className="App">
      <LeftMenu />
      <div className='right'>
        <Topline />
        <div className="layout">
          {props.childRoutes.map(el => handleRoute(el))}
        </div>
      </div>
    </div>
  );
}

export default App;
