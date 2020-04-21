/**
 * @brief Page for each pokémons
 * @author Andrécio Costa
 * @date 15/04/2020
 */

import React from 'react'
import { isAuthenticated } from '../../lib/authFunctions'
import { upper } from '../../lib/auxiliarFunctions'
import { useFetchOnePokemon } from '../../lib/hooks'
import './pokefile.css'

const Pokefile = (props) => {
  const [pokemon, img, loading] = useFetchOnePokemon(props.match.params.name)

  if (!isAuthenticated()) { return window.location.href = '/signup' }

  return (
    <div className='pokefile-container'>
      {(loading) ? <h2 className='loading'>Loading...</h2> :
        <section className='pokefile'>
          <div className='pokefile-img'>
            <img src={(img) ? img : '../images/no-img.png'} alt={upper(pokemon.name)} />
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