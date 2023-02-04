import './App.css';
import React, { useEffect, useState } from 'react';
import CountrySearch from './CountrySearch';
import Recipes from './Recipes';

function App() {
  const [countryName, setCountryName] = useState("");
  const [countryRecipes, setCountryRecipes] = useState([]);
  


  return (

    <div className="App">
      <header className="App-header">
      <h1>Lunch and Learn</h1>
      <p>Find Recipes by Country</p>
      <CountrySearch setCountryName={setCountryName}/>
      {/* <Recipes /> */}
      </header>
    </div>
  );
}

export default App;
