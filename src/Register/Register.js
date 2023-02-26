import './Register.css';
import React, { useState } from 'react';


function Register() {
  const [userEmail, setUserEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  function handleInputChange(e) {
    const {id, value} = e.target;
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
  
  function handleSubmit() {
    if (typeof(userEmail) === 'string' && typeof(userEmail) === 'string' && typeof(userEmail) === 'string') {

    } else {
      setErrorMessage('Please fill out all fields')
    }
  }

  return (
      <div>
        <h1>
          Register as a New User!
        </h1>
        <p>{errorMessage}</p>
        
        <form onSubmit={handleSubmit}>
          <p>Email:
            <input id='email' type='text' placeholder='Your Email' onChange = {(e) => handleInputChange(e)} value={userEmail}></input>
          </p>
          <p>Password:
            <input id='password' type='text' placeholder='Your password' onChange = {(e) => handleInputChange(e)} value={password}></input>
          </p>
          <p>Confirm Password:
            <input id='confirm-password' type='text' placeholder='Password Confirmation' onChange = {(e) => handleInputChange(e)} value={confirmPassword}></input>
          </p>
          <input type='submit' value='Register'/>
        </form>
      </div>
  );
}

export default Register;