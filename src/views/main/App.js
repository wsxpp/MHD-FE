import React from 'react';
import './App.css';
import LeftMenu from '../menu';
import Topline from '../topline';
import Layout from '../layout';

function App() {
  return (
    <div className="App">
      <Topline />
      <LeftMenu />
      <Layout />
    </div>
  );
}

export default App;
