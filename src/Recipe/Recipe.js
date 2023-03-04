import React from 'react';
import './Recipe.css';

const Recipe = ({image, title, url, favorite, countryName, addFavorite}) => {
  console.log(favorite)
  function handleFavorite(event, countryName, title, url) {
    event.preventDefault();
    addFavorite(countryName, title, url)
  }
  return (
    <div className='recipe'>
      <img src={image} alt={title} width="80" height="80"/>
      <h4>
        <a className="App-link" href={url}>{title}</a>
      </h4>
      { favorite === false && (
        <form onSubmit={(e) => handleFavorite(e, countryName, title, url)}>
          <input type='submit' value='Favorite'/>
        </form>
      )}
    </div>
  )
}

export default Recipe