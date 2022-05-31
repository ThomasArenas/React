import PokemonCard from './PokemonCard';
import {getPokemons } from './PokemonsJSON';
import React, { useState, useEffect } from 'react';

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  return (
    <>
      <div className='cards'>
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} {...pokemon} id={pokemon.id} />;
        })}
      </div>
    </>
  );
};

export default AllPokemon;