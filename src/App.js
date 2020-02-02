import React from 'react';
import './App.css';
import Spin from './Component/Spin';
import Header from './Component/Header';
import Hero from './Component/Hero';

function App() {
  return (
    <div className="App">
      <Spin/>
      <Header/>
      <Hero/>
    </div>
  );
}

export default App;
