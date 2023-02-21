import './App.css';
import React, { useState } from 'react';
import Navbar from "../Navigation/Navbar.js";
import BaseForm from '../BaseForm/BaseForm';
import CountryLearning from '../CountryLearning/CountryLearning';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';


function App() {
  const [countryName, setCountryName] = useState("");

  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<BaseForm/>} />
          <Route path="/country/:countryName" element={<CountryLearning setCountryName={countryName}/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
