import './BaseForm.css';
import React, { useState } from 'react';
import CountrySearch from '../CountrySearch/CountrySearch';
import lunchLearnImage from "../assets/LunchnLearn.png";


function BaseForm({currentUser}) {
  const [countryName, setCountryName] = useState("");
  return (
    <div className="App">
        <header className="App-header">
          {currentUser.name && (<h2> Welcome, {currentUser.name}</h2>)}
          <img height="300px" alt="Lunch and Learn logo" src={lunchLearnImage}/>
          <p>Find Recipes by Country</p>
            <CountrySearch setCountryName={setCountryName}/>
        </header>
    </div>
  );
}

export default BaseForm;