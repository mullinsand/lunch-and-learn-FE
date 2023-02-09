import React from 'react';
import './Recipe.css';

const Recipe = ({image, title, url}) => {
  return (
    <div className='recipe'>
      <img src={image} alt={title} width="80" height="80"/>
      <h4>
        <a className="App-link" href={url}>{title}</a>
      </h4>
      {/* <button onClick={() => addFavorite(title, url)} ></button> */}
    </div>
  )
}

export default Recipe