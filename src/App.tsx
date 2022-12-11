import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Support from './components/support/Support';
import "@fontsource/inter";
import "@fontsource/roboto"
import PopularHotels from './components/popularHotels/PopularHotels';
import {data} from './store/data'

function App() {
  return (
    <div className="App">
      <Header />
      <Support />
      <PopularHotels hotels={data}/>
    </div>
  );
}

export default App;
