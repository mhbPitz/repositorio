import React from 'react';

export default function PokemonApi({ pokemon }) {
  if (!pokemon || !pokemon.sprites) {
    return <p>Carregando Pokémon...</p>;
  }

  return (
    <div id="social">
      <h2>Meu pet</h2>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>{pokemon.types && pokemon.types[0].type.name}</p>
    </div>
  );
}