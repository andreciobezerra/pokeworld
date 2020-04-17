/**
 * @brief Page for fetch all abilities
 * @author Andrécio Costa
 * @date 16/04/2020
*/

import React from 'react'
import './ability.css'

const Ability = (props) => {
  return (
    <section className='ability-card'>
      {props.ability.name}
    </section>
  )
}

export default Ability