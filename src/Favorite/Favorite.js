import React from 'react';
import './Favorite.css';
import { Link } from 'react-router-dom';

const Favorite = ({favorite, deleteFavorite}) => {
  console.log('favorite')
  console.log(favorite)
  const title = favorite.attributes.recipe_title
  const countryName = favorite.attributes.country
  const url = favorite.attributes.recipe_link

  function handleDelete(event, favoriteId) {
    event.preventDefault();
    deleteFavorite(favoriteId)
  }
  return (
    <div className='favorite'>
      {/* <img src={favorite.image} alt={favorite.title} width="80" height="80"/> */}
        <p>{title}</p>
        <p><a className="App-link" href={url}>See Recipe</a></p>
        <Link to={`/country/${countryName}`}>
          {`Learn about ${countryName}`}
        </Link>
        <form onSubmit={(e) => handleDelete(e, favorite.id)}>
          <input type='submit' value='Delete'/>
        </form>
    </div>
  )
}

export default Favorite