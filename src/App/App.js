import './App.css';
import React, { useState, useEffect } from 'react';
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
  const [userFavorites, setUserFavorites] = useState([])
  const navigate = useNavigate();

  function handleLogin(userInfo) {
    console.log(currentUser)
    setCurrentUser(userInfo);
    console.log("after")

    console.log(currentUser)
    getUserFavorites(userInfo);
  }
  function handleLogout() {
    setCurrentUser("");
    navigate("/")
  }
  const requestOptions = {
    headers: {'Content-Type': 'application/json',
              'accept': 'application/json'}
  }
  function getUserFavorites(currentUser) {
    if(currentUser && currentUser.api_key) {
      fetch(`http://localhost:5000//api/v1/favorites?api_key=${currentUser.api_key}`, requestOptions)
      .then(response => {
        return response.json()
      })
      .then(data=> setUserFavorites(data))
      console.log(userFavorites)
    } else {
      setUserFavorites([])
    }
    console.log(currentUser.api_key)
  }

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
