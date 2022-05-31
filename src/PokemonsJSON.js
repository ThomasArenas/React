const URL = "http://localhost:3000/pokemons";

export const getPokemons = (page) => {
  return fetch(`${URL}`).then((response) =>
    response.json()
  );
};

export const getPokemon = (id) => {
  return fetch(`${URL}/${id}`).then((response) => 
    response.json()
  );
};