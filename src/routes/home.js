import React, { useEffect, useState } from 'react'
import '../Styles/Home.css';
import { PokemonCard } from '../components/PokemonCard';


export const Home = () => {

  const [page,setPage] = useState(1)
  const [pokemonCount, setPokemonCount] = useState(0)
  const [pokemons,setPokemons] = useState ([])


  

  function handleNext() {
    setPage(page + 1);
  }

  function handlePrev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
 

  return (
    <div>
      <div className='pokemon-card'>
        <PokemonCard/>
      </div>
        <div className="button-container">
        <button
          onClick={handlePrev}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

