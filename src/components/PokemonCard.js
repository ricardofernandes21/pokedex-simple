import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../components/pokemonCard.css";

export const PokemonCard = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(urlPokemon);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getData();
    }
  }, [id, urlPokemon]);

  while (loading) {
    return <h1>Loading...</h1>;
  }

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="pokemon-container">
      <div className="pokemon">
        <img src={spriteUrl} alt={""} />
        <div className="abilities">
          <h2>Abilities:</h2>
          <ul>
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
        <div className="stats">
          <h2>Stats:</h2>
          <ul>
            {pokemon.stats.map((stat, index) => (
              <li key={index}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
        <div className="types">
          <h2>Types:</h2>
          {pokemon.types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </div>
        <div className="weight">
          <h2> Weight:</h2>
          <li>{pokemon.weight}</li>
        </div>
        <div className="height">
          <h2> Height:</h2>
          <li>{pokemon.height}</li>
        </div>
      </div>
      <div>
        <button className="button" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};
