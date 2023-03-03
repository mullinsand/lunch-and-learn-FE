import './Register.css';
import React, { useState } from 'react';


function Register() {
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
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

  function handleSubmit(event) {
    event.preventDefault();
    if (userEmail !== '' && password !== '' && confirmPassword !== '') {

    } else {
      setErrorMessage('Please fill out all fields')
    }
  }

  return (
      <div>
        <h1>
          Register as a New User!
        </h1>
        {errorMessage && (<p>{errorMessage}</p>)}
        
        <form >
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