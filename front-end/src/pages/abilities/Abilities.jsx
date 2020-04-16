/**
 * @brief Page for fetch all abilities
 * @author Andrécio Costa
 * @date 16/04/2020
*/

import React, { useState, useEffect } from 'react'
import api from '../../lib/api'
import Ability from '../../components/ability/Ability'


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
    <section>
      {abilities.map(ability =><Ability ability={ability} key={ability.name}/>)}
    </section>
  )
}

export default Abilities
