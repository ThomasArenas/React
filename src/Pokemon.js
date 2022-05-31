import { NavLink } from 'react-router-dom';
import { getPokemon } from './PokemonsJSON';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const Pokemon = () => {
  const location = useLocation();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon(location.pathname.slice(1)).then((data) => {
      setPokemon(data);
    });
  }, [location.pathname]);

  function DeletePokemon(id) {
    fetch(`http://localhost:3000/pokemons/${id}`, {method: 'DELETE'})
  }

  if (pokemon.length != 0) {
    return (
      <div className={'pokeCard'}>
        <div className='pokeCard__header'>
          <h2 className='pokeCard__name'>{pokemon.name.french}</h2>
          <div className='pokeCard__basics'>
            <span>N° : {pokemon.id}</span>
          </div>
        </div>
        <br/>
        <div className='pokeCard__stats'>
          <span>PV : {pokemon.base.HP}</span>
          <span>Attaque : {pokemon.base.Attack}</span>
          <span>Défense : {pokemon.base.Defense}</span>
          <span>Attaque Spéciale : {pokemon['base']['Sp. Attack']}</span>
          <span>Défense Spéciale : {pokemon['base']['Sp. Defense']}</span>
          <span>Vitesse : {pokemon.base.Speed}</span>
        </div>
        <br/>
        <div className='pokeCard__typeDiv'>
          <h1>Type(s) : </h1>
          <ul className='pokeCard__types'>
            {pokemon.type.map((type, index) => {
              return (
                <li className='pokeCard__type' key={index}>
                  {type}
                </li>
              );
            })}
          </ul>
        </div>
        <br/>
        <nav className='nav'>
          <NavLink className='nav__link' to='/'>
            <img src={`/img/delete.png`} width="50px" onClick={() => DeletePokemon(pokemon.id)}/>
          </NavLink>
          <NavLink className='nav__link' to={`update/${pokemon.id}`}>
            <img src={`/img/update.png`} width="50px"/>
          </NavLink>
        </nav>
      </div>
    );
  }
};

export default Pokemon;
