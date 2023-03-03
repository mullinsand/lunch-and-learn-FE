import './App.css';
import React, { useState } from 'react';
import Navbar from "../Navigation/Navbar.js";
import BaseForm from '../BaseForm/BaseForm';
import Register from '../Register/Register';
import Login from '../Login/Login';
import CountryLearning from '../CountryLearning/CountryLearning';
import { Routes, Route } from 'react-router-dom';
import { useNavigate} from "react-router-dom";



function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [countryName, setCountryName] = useState("");
  const navigate = useNavigate();

  function handleLogin(userInfo) {
    setCurrentUser(userInfo);
  }
  function handleLogout() {
    setCurrentUser("");
    navigate("/")
  }

  console.log('app')
  console.log(currentUser)
  return (
      <main>
        <Navbar currentUser={currentUser} handleLogout={handleLogout} />
        <Routes>
          <Route path="country/:countryName" element={<CountryLearning />} />
          <Route path="/register" element={<Register handleLogin={handleLogin}/>} />
          <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
          <Route path="/" element={<BaseForm currentUser={currentUser}/>} />
          {/* <Route path="*" element={<BaseForm/>} /> */}
        </Routes>
      </main>
  );
}

export default App;
