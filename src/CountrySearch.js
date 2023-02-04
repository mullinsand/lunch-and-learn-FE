import React, { useEffect, useState } from 'react';

const CountrySearch = (props) => {
  const [countryName, setCountryName] = useState("");

  const handleCountryName = (event) => {
   setCountryName(event.currentTarget.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `http://localhost:5000/api/v1/recipes?country=${countryName}`
    console.log(countryName)
    fetch(url)
      .then(response => response.json())
      .then(data=> console.log(data))
    }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='find_recipes'>Find Recipes</label>
      <input name='find_recipes' type='text' placeholder='Enter a Country' value={countryName} onChange={(event) => {handleCountryName(event)}}></input>
      <input type='submit' />
    </form>
  )
}

export default CountrySearch;