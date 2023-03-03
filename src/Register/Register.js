import './Register.css';
import React, { useState } from 'react';


function Register() {
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loggedUserInfo, setLoggedUserInfo] = useState({})

  const userInfo = {
    "name": userName,
    "email": userEmail,
    "password": password,
    "password_confirmation": confirmPassword
  }
  const url = `http://localhost:5000//api/v1/users`
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json',
              'accept': 'application/json'},
    body: JSON.stringify(userInfo)
  }

  function handleInputChange(e) {
    const {id, value} = e.target;
    if(id === 'user-name') {
      setUserName(value)
    }
    if(id === 'email') {
      setUserEmail(value)
    }
    if(id === 'password') {
      setPassword(value)
    }
    if(id === 'confirm-password') {
      setConfirmPassword(value)
    }
  }

  function determineUserInfo(data) {
    if(data.data) {
      setLoggedUserInfo(data.data.attributes)
      setErrorMessage('')
    } else {
      setErrorMessage(data.errors)
      setLoggedUserInfo({})
    }
  }
  
  console.log(loggedUserInfo)
  function handleSubmit(event) {
    event.preventDefault();
    if (userName !== '' && userEmail !== '' && password !== '' && confirmPassword !== '') {
      fetch(url, requestOptions)
      .then(response => {
        return response.json()
      })
      .then(data=> (determineUserInfo(data)))
      .catch((error) => { setErrorMessage(error) });
    } else {
      setErrorMessage('Please fill out all fields')
      setLoggedUserInfo({})
    }
  }

  return (
      <div>
        <h1>
          Register as a New User!
        </h1>
        {errorMessage && (<p>{errorMessage}</p>)}
        <p>{loggedUserInfo && loggedUserInfo.api_key}</p>
        <form >
          <p>User Name:
            <input id='user-name' type='text' placeholder='Your User Name' onChange = {(e) => handleInputChange(e)} value={userName}></input>
          </p>
          <p>Email:
            <input id='email' type='text' placeholder='Your Email' onChange = {(e) => handleInputChange(e)} value={userEmail}></input>
          </p>
          <p>Password:
            <input id='password' type='text' placeholder='Your password' onChange = {(e) => handleInputChange(e)} value={password}></input>
          </p>
          <p>Confirm Password:
            <input id='confirm-password' type='text' placeholder='Password Confirmation' onChange = {(e) => handleInputChange(e)} value={confirmPassword}></input>
          </p>
          <input type='submit' value='Register' onClick={handleSubmit} />
        </form>
      </div>
  );
}

export default Register;