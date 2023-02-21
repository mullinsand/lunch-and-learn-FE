import './BaseForm.css';
import React, { useState } from 'react';
import CountrySearch from '../CountrySearch/CountrySearch';
import lunchLearnImage from "../assets/LunchnLearn.png";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountryLearning from '../CountryLearning/CountryLearning';


function BaseForm() {
  const [countryName, setCountryName] = useState("");

  return (
    <div className="App">
        <header className="App-header">
          <img width="300" alt="Lunch and Learn logo" src={lunchLearnImage}/>
          <p>Find Recipes by Country</p>
            <CountrySearch setCountryName={setCountryName}/>
        </header>
    </div>
  );
}

export default BaseForm;