import React, { useState } from 'react';
import Recipes from './Recipes';

const CountrySearch = (props) => {
  const [countryName, setCountryName] = useState("");
  const [recipes, setRecipes] = useState([])

  const handleCountryName = (event) => {
   setCountryName(event.currentTarget.value)
  }

  const handleSubmit = (uriParams, event) => {
    event.preventDefault();

    console.log(event)
    const url = `http://localhost:5000/api/v1/${uriParams}`
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data=> (setRecipes(data)))
    }
  
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(`recipes?country=${countryName}`, event)}>
        <input name='find_recipes' type='text' placeholder='Enter a Country' value={countryName} onChange={(event) => {handleCountryName(event)}}></input>
        <input type='submit' value='Find Recipes'/><br/>
      </form>
      <form onSubmit={(event) => handleSubmit('recipes', event)}>
        <input type='submit' value='Choose Country For me!'/>
      </form>
      <div>
        <Recipes recipes={recipes} />
      </div>
    </div>
  )
}

export default CountrySearch;