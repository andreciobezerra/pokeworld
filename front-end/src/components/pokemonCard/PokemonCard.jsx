/**
 * @brief Page for each pokémons
 * @author Andrécio Costa
 * @date 15/04/2020
 */

/* eslint-disable react/prop-types */

import React from 'react'
import { Link } from 'react-router-dom'
import { upper } from '../../lib/auxiliarFunctions'
import { useFetchOnePokemon } from '../../lib/hooks'
import './pokemonCard.css'

const PokemonCard = (props) => {
  const [pokemon, img, loading] = useFetchOnePokemon(props.pokemon.name)

  return (
    <Link to={`pokemon/${pokemon.name}`} className='pokemon-link'>
      {
        (loading) ? <h2>Loading...</h2> :
          <div className='pokemon-card'>
            <img src={(img) ? img : '../images/no-img.png'} alt={upper(pokemon.name)} title={upper(pokemon.name)} className='img-card' />
            <div className='pokemon-info'>
              <h2>{pokemon.name}</h2>
              <p>Click for more details!</p>
            </div>
          </div>
      }
    </Link>
  )
}

export default PokemonCard