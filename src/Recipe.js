import React from 'react';
import './Recipe.css';

const Recipe = ({image, title, url}) => {
  return (
    <div className='recipe'>
      <img src={image} alt={title} width="80" height="80"/>
      <h3>{title}</h3>
      <a href={url}>Recipe Page</a>
    </div>
  )
}

export default Recipe