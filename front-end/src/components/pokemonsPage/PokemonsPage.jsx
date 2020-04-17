/**
 * @brief Page for list pokémons
 * @author Andrécio Costa
 * @date 15/04/2020
 */

/* eslint-disable react/prop-types */

import React from 'react'
import PokemonCard from '../pokemonCard/PokemonCard'
import './pokemonsPage.css'

const PokemonsPage = (props) => {

  return (
    <section className='pokemon-galery'>
      {props.pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.name}/>)}
    </section>
  )
}

export default PokemonsPage