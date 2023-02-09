import './App.css';
import React, { useState } from 'react';
import CountrySearch from '../CountrySearch/CountrySearch';
import Navbar from "../Navigation/Navbar.js";
import lunchLearnImage from "../assets/LunchnLearn.png";


function App() {
  const [countryName, setCountryName] = useState("");

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img width="300" alt="Lunch and Learn logo" src={lunchLearnImage}/>
        <p>Find Recipes by Country</p>
          <CountrySearch setCountryName={setCountryName}/>
      </header>
    </div>
  );
}

export default App;
