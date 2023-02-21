import React, { useState } from 'react';
import './CountryLearning.css';
import { BrowserRouter, Routes, Route, useParams, Switch } from 'react-router-dom';


const CountryLearning = (props) => {
  let countryName = useParams();
  return (
    <div>
      You did it!
    </div>
  )
}

export default CountryLearning;