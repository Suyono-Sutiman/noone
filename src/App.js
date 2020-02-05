import React from 'react';
import './App.css';
import Spin from './Component/Spin';
import Header from './Component/Header';
import Hero from './Component/Hero';
import Solution from './Component/Solution';


function App() {
  return (
    <div className="App">
      <Spin/>
      <Header/>
      <div className='palax-bg'>
      <Hero/>
      <Solution/>
      </div>
    </div>
  );
}

export default App;
