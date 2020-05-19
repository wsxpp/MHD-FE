import React from 'react';
import './App.css';
import LeftMenu from '../menu';
import Topline from '../topline';
import Layout from '../layout';

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <div className='right'>
        <Topline />
        <Layout />
      </div>
    </div>
  );
}

export default App;
