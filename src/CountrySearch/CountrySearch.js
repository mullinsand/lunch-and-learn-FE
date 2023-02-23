import React, { useEffect, useState } from 'react';
import Recipes from '../Recipes/Recipes';
import Button from 'react-bootstrap/Button';

const CountrySearch = (props) => {
  const [countryName, setCountryName] = useState("");
  const [recipes, setRecipes] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const handleCountryName = (event) => {
   setCountryName(event.currentTarget.value)
  }

  useEffect(() => {
    const randomCountry = recipes.data && recipes.data.length && recipes.data[0].attributes.country ? recipes.data[0].attributes.country : "";
    setCountryName(randomCountry);}
  , [recipes])

  const handleSubmit = (uriParams, event, randomCountrySearch) => {
    event.preventDefault();
    const url = `http://localhost:5000/api/v1/${uriParams}`
    fetch(url)
      // .then(response => handleError(response))
      .then(response => {
        return response.json()
      })
      .then(data=> (setRecipes(data)))
      .catch((error) => { setErrorMessage(error) });
    }
    return (
      <div className='countrySearch'>
      <form onSubmit={(event) => handleSubmit(`recipes?country=${countryName}`, event)}>
        <input name='find_recipes' type='text' placeholder='Enter a Country' value={countryName} onChange={(event) => {handleCountryName(event)}}></input>
        <input type='submit' value='Find Recipes'/><br/>
      </form>
      <form onSubmit={(event) => handleSubmit('recipes', event, true)}>
        <input type='submit' value='Choose Country For me!'/>
      </form>
      <div>
        {!!Object.keys(recipes).length && <Recipes recipes={recipes} countryName = {countryName}/>}
        <p>{errorMessage}</p>
      </div>
    </div>
  )
}

export default CountrySearch;