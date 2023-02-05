import React, { useState } from 'react';
import Recipes from './Recipes';

const CountrySearch = (props) => {
  const [countryName, setCountryName] = useState("");
  const [recipes, setRecipes] = useState([])

  const handleCountryName = (event) => {
   setCountryName(event.currentTarget.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `http://localhost:5000/api/v1/recipes?country=${countryName}`
    fetch(url)
      .then(response => response.json())
      .then(data=> (setRecipes(data)))
    }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='find_recipes'>Find Recipes</label>
        <input name='find_recipes' type='text' placeholder='Enter a Country' value={countryName} onChange={(event) => {handleCountryName(event)}}></input>
        <input type='submit' />
      </form>
      <div>
        <Recipes recipes={recipes} />
      </div>
    </div>
  )
}

export default CountrySearch;