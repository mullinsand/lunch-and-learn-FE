import React from 'react';
import './Recipes.css';
import Recipe from './Recipe';

const Recipes = ({recipes}) => {
  if(recipes.data){
    if (recipes.data.length) {
      return (
        <div>
        <h2>{recipes.data[0].attributes.country}</h2>
        <div className='recipes-container' key={Date.now()}>
        {recipes.data.map((recipe) => (
            <Recipe
                image={recipe.attributes.image}
                title = {recipe.attributes.title}
                url = {recipe.attributes.url}
              />
              )
              )}
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