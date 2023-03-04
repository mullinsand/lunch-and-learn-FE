import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from "../Navigation/Navbar.js";
import BaseForm from '../BaseForm/BaseForm';
import Register from '../Register/Register';
import Favorites from '../Favorites/Favorites';
import Login from '../Login/Login';
import CountryLearning from '../CountryLearning/CountryLearning';
import { Routes, Route } from 'react-router-dom';
import { useNavigate} from "react-router-dom";



function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [countryName, setCountryName] = useState("");
  const [userFavorites, setUserFavorites] = useState([])
  const navigate = useNavigate();

  function handleLogin(userInfo) {
    setCurrentUser(userInfo);
    setLoggedIn(true);
    console.log(loggedIn)
    getUserFavorites(userInfo);
  }

  function handleLogout() {
    setCurrentUser("");
    navigate("/")
  }

  function getUserFavorites(currentUser) {
    const requestOptions = {
      headers: {'Content-Type': 'application/json',
                'accept': 'application/json'}
    }
    if(currentUser && currentUser.api_key) {
      fetch(`http://localhost:5000//api/v1/favorites?api_key=${currentUser.api_key}`, requestOptions)
      .then(response => {
        return response.json()
      })
      .then(data=> setUserFavorites(data))
    } else {
      setUserFavorites([])
    }
  }

  function addFavorite(countryName, title, url) {
      const params = {
        api_key: currentUser.api_key,
        country: countryName,
        recipe_link: url,
        recipe_title: title
      }
  
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                  'accept': 'application/json'},
        body: JSON.stringify( params )
      }
      fetch(`http://localhost:5000//api/v1/favorites`, requestOptions)
      .then(response => {
        if(response.ok) {
          getUserFavorites(currentUser)
        }
      });
    }
  
  function deleteFavorite(favoriteId) {
    const params = {
      api_key: currentUser.api_key,
      favorite_id: favoriteId
    }

    const requestOptions = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json',
                'accept': 'application/json'},
      body: JSON.stringify( params )
    }
    fetch(`http://localhost:5000//api/v1/favorites`, requestOptions)
    .then(response => {
      if(response.ok) {
        getUserFavorites(currentUser)
      }
    });
  }

  return (
      <main>
        <Navbar currentUser={currentUser} handleLogout={handleLogout} />
        <Routes>
          <Route path="country/:countryName" element={<CountryLearning />} />
          <Route path="/register" element={<Register handleLogin={handleLogin}/>} />
          <Route path="/favorites" element={<Favorites userFavorites={userFavorites} deleteFavorite={deleteFavorite}/>} />
          <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
          <Route path="/" element={<BaseForm currentUser={currentUser} userFavorites={userFavorites} loggedIn={loggedIn} addFavorite={addFavorite}/>} />
        </Routes>
      </main>
  );
}

export default App;
