/**
 * @brief Page for fetch all abilities
 * @author Andrécio Costa
 * @date 16/04/2020
*/

import React, { useState, useEffect } from 'react'
import api from '../../lib/api'
import Ability from '../../components/ability/Ability'
import './abilites.css'


const Abilities = () => {
  const [abilities, setAbilities] = useState([])

  useEffect(() => {
    const loadAbilities = async () => {
      try {
        const response = await api.getAbilities()
        setAbilities(response)
      } catch (error) {
        console.log(error)
      }
    }

    loadAbilities()
  }, [])

  return (
    <section >
      <h1 className='titles'>Abilities</h1>
      <div className='ability-galery'>
        {abilities.map(ability => <Ability ability={ability} key={ability.name} />)}
      </div>
    </section>
  )
}

export default Abilities
