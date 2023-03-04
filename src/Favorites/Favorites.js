import './Favorites.css';
import React, { useState } from 'react';
import Favorite from '../Favorite/Favorite';



function Favorites({deleteFavorite, userFavorites}) {
  const favorites = userFavorites.data
  return (
    <div >
      <h1>Favorites</h1>
      <div className='favorites-container'>
        { favorites && favorites.map((favorite) => (
          <Favorite favorite={favorite} deleteFavorite={deleteFavorite}/>
        )
        )}
      </div>
    </div>
  );
}

export default Favorites;