/**
 * @brief Page for each pokémons
 * @author Andrécio Costa
 * @date 15/04/2020
 */

import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../../lib/authFunctions'
import { upper } from '../../lib/auxiliarFunctions'
import api from '../../lib/api'
import './pokefile.css'

const Pokefile = (props) => {
  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState('')
  const [img, setImg] = useState()

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const response = await api.get(props.match.params.name)
        const img = response.data.sprites['front_default']
        setPokemon(response.data)
        setImg(img)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    loadPokemons()
  }, [props.match.params.name])


  if (!isAuthenticated()) { return window.location.href = '/signup' }

  return (
    <div className='pokefile-container'>
      {(loading) ? <h2>Loading...</h2> :
        <section className='pokefile'>
          <div className='pokefile-img'>
            <img src={img} alt={upper(pokemon.name)} />
          </div>
          <div>
            <p>Name: {upper(pokemon.name)}</p>
            <p>Height: {pokemon.height} cm</p>
            <p>Weight: {pokemon.weight / 1000} kg</p>
            <p>Abilities: {pokemon.abilities.map(elem => elem.ability.name).join(', ')}</p>
            <p>Types: {pokemon.types.map(elem => elem.type.name).join(', ')}</p>
          </div>
        </section>
      }
    </div>
  )
}

export default Pokefile