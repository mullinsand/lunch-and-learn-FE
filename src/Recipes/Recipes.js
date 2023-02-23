import React from 'react';
import './Recipes.css';
import Recipe from '../Recipe/Recipe';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CountryLearning from '../CountryLearning/CountryLearning';


const Recipes = (props) => {
  const recipes = props.recipes
  const countryName = props.countryName
  function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  if(recipes.data){
    if (recipes.data.length) {
      return (
        <div>
        <br/>
          <h2>Recipes from {capitalize(countryName)}</h2>
          <Link to={`/country/${countryName}`}>
            <Button variant='dark'>Learn about {countryName}</Button>
          </Link>
          <div className='recipes-container' key={Date.now()}>
            {
            recipes.data && recipes.data.length && recipes.data.map((recipe) => (
                <Recipe
                    image={recipe.attributes.image}
                    title = {recipe.attributes.title}
                    url = {recipe.attributes.url}
                  />
                  ))         
            }
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>No results</p>
        </div>
      )
    }

  } else if (recipes.error) {
    return (
      <div>
        <p>{recipes.error}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Something went wrong</p>
      </div>
    )
  }
}
export default Recipes;