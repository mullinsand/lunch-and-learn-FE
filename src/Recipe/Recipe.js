import React from 'react';
import './Recipe.css';

const Recipe = ({image, title, url, favorite, countryName, addFavorite}) => {
  console.log(favorite)
  return (
    <div className='recipe'>
      <img src={image} alt={title} width="80" height="80"/>
      <h4>
        <a className="App-link" href={url}>{title}</a>
      </h4>
      {/* { favorite && <button onClick={() => removeFavorite(countryName, title, url)} >UnFavorite</button> } */}
      { favorite === false && (<button onClick={() => addFavorite(countryName, title, url)} >Favorite</button>) }
    </div>
  )
}

export default Recipe