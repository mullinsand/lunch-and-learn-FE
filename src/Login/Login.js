import './Login.css';
import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";


function Login({currentUser}) {
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  
  const userInfo = {
    "email": userEmail,
    "password": password
  }

  const url = `http://localhost:5000//api/v1/user`
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json',
              'accept': 'application/json'},
    body: JSON.stringify(userInfo)
  }

  function handleInputChange(e) {
    const {id, value} = e.target;
    if(id === 'email') {
      setUserEmail(value)
    }
    if(id === 'password') {
      setPassword(value)
    }
  }
  const navigate = useNavigate();

  function determineUserInfo(data) {
    if(data.data) {
      handleLogin(data.data.attributes)
      navigate("/")
    } else {
      setErrorMessage(data.errors)
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (userEmail !== '' && password !== '') {
      fetch(url, requestOptions)
      .then(response => {
        return response.json()
      })
      .then(data=> (determineUserInfo(data)));
    } else {
      setErrorMessage('Please fill out all fields')
    }
  }

  return (
    <div>
      <h1>
        Login
      </h1>
      {errorMessage && (<p>{errorMessage}</p>)}
      <form >
        <p>Email:
          <input id='email' type='text' placeholder='Your Email' onChange = {(e) => handleInputChange(e)} value={userEmail}></input>
        </p>
        <p>Password:
          <input id='password' type='text' placeholder='Your password' onChange = {(e) => handleInputChange(e)} value={password}></input>
        </p>
        <input type='submit' value='Login' onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default Login;