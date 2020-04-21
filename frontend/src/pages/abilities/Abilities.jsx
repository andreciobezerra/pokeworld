/**
 * @brief Page for fetch all abilities
 * @author Andrécio Costa
 * @date 16/04/2020
*/

import React from 'react'
import { useFetchData } from '../../lib/hooks'
import api from '../../lib/api'
import Ability from '../../components/ability/Ability'
import './abilites.css'


const Abilities = () => {
  const [abilities, loading] = useFetchData(api.getAbilities)

  return (
    <section >
      {
        (loading) ? <h2 className='loading'>Loading...</h2> :
          <div>
            <h1 className='titles'>Abilities</h1>
            <div className='ability-galery'>
              {abilities.map(ability => <Ability ability={ability} key={ability.name} />)}
            </div>
          </div>
      }
    </section>
  )
}

export default Abilities
