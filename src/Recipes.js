import React from 'react';
import './Recipes.css';
import Recipe from './Recipe';

const Recipes = ({recipes}) => {
  // console.log('first')
  // console.log(recipes)
  // console.log('second')
  // console.log(recipes.data)
  // console.log('third')
  // console.log(recipes.data ? 'true' : 'false')
  if(recipes.data){
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
    <p>No results</p>
  }
}
export default Recipes;