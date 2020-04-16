/**
 * @brief Page for each pokémons
 * @author Andrécio Costa
 * @date 15/04/2020
 */

/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react'
import './pokemonCard.css'
import { upper, getImg } from '../../lib/auxiliarFunctions'
import api from '../../lib/api'

const PokemonCard = (props) => {
  const [pokemon, setPokemon] = useState(props.pokemon)
  
  useEffect(() => {
    async function loadPokemons(){
      try {
        const response = await api.get(props.pokemon.name)
        setPokemon(response.data)
        
      } catch (error) {
        console.log(error)
      }
    }

    loadPokemons()
  }, [props.pokemon.name])

  return (
    <div className='pokemon-card'>
      {}
      <img src={getImg(pokemon.id)} alt={upper(pokemon.name)} title={upper(pokemon.name)} className='img-card' />
      <h2>{upper(pokemon.name)}</h2>
    </div>
  )
}

export default PokemonCard