import React from 'react';
import './App.css';
import Spin from './Component/Spin';
import Header from './Component/Header';
import Hero from './Component/Hero';
import Solution from './Component/Solution';
import Analytic from './Component/Analytic';
import Architecture from './Component/Architecture';
import Overview from './Component/Overview';
import Visimisi from './Component/Visimisi';
import Visi from './Component/Visi';
import Misi from './Component/Misi';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
      <Spin/>
      <Header/>
      
      <Hero/>
      <Solution/>
      <Analytic/>
      <Architecture/>
      <Overview/>
      <Visi/>
      <Visimisi/>
      <Misi/>
      <Footer/>
    </div>
  );
}

export default App;
