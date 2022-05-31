import React from 'react';
import { NavLink } from 'react-router-dom';

const PokemonCard = (props) => {
  const imageSrc = "0".repeat(3 - props.id.toString().length) + props.id.toString()

  return (
    <NavLink className='card' to={{ pathname: `/${props.id}` }}>
      <img src={`/img/${imageSrc}.png`}/>
      <h3 className='card__title'>{props.name.french}</h3>
    </NavLink>
  );
};

export default PokemonCard;