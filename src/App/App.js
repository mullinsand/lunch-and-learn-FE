import './App.css';
import React, { useState } from 'react';
import Navbar from "../Navigation/Navbar.js";
import BaseForm from '../BaseForm/BaseForm';
import Register from '../Register/Register';
import CountryLearning from '../CountryLearning/CountryLearning';
import { Routes, Route } from 'react-router-dom';


function App() {

  const [countryName, setCountryName] = useState("");
  return (
      <main>
        <Navbar />
        <Routes>
          <Route path="country/:countryName" element={<CountryLearning />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<BaseForm />} />
          {/* <Route path="*" element={<BaseForm/>} /> */}
        </Routes>
      </main>
  );
}

export default App;
