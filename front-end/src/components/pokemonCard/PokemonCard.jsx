/**
 * @brief Page for each pokémons
 * @author Andrécio Costa
 * @date 15/04/2020
 */

/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './pokemonCard.css'
import { upper } from '../../lib/auxiliarFunctions'
import api from '../../lib/api'

const PokemonCard = (props) => {
  const [pokemon, setPokemon] = useState(props.pokemon)
  const [img, setImg] = useState()

  useEffect(() => {
    async function loadPokemons() {
      try {
        const response = await api.get(pokemon.name)
        const img = response.data.sprites['front_default']
        setImg(img)
        setPokemon(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    loadPokemons()
  }, [pokemon.name])

  return (
    <Link to ={`pokemon/${pokemon.name}`}  className='pokemon-link'>
      <div className='pokemon-card'>
        <img src={img} alt={upper(pokemon.name)} title={upper(pokemon.name)} className='img-card' />
        <div className='pokemon-info'>
          <h2>{pokemon.name}</h2>
          <p>Click for more details!</p>
        </div>
      </div>
    </Link>
  )
}

export default PokemonCard