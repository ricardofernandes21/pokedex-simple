import React, { useEffect, useState } from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const urlAllPokemons = `https://pokeapi.co/api/v2/pokemon?limit=20 0&offset=${offset}`;

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(urlAllPokemons);
      const data = await response.json();
      setPokemons(data.results);
    };
    getData();
  }, [urlAllPokemons]);

  function handleNext() {
    setOffset(offset + 20);
  }

  function handlePrev() {
    if (offset >= 20) {
      setOffset(offset - 20);
    }
  }

  function getSprites() {
    return pokemons.map((p) => {
      const url = p.url;
      const parts = url.split("/");
      const id = parts[parts.length - 2];
      const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

      return (
        <div className="card">
          <Link to={`/Pokemon/${id}`} key={id}>
            <img className="pokemon-image" src={spriteUrl} alt={p.name} />
          </Link>
          <p>{p.name}</p>
        </div>
      );
    });
  }

  return (
    <div>
      <div className="img-container">{getSprites()}</div>
      <div className="button-container">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};
