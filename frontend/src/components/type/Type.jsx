/**
 * @brief Card for each type
 * @author Andrécio Costa
 * @date 15/04/2020
 */

/* eslint-disable react/prop-types */
import React from 'react'
import './type.css'

const Type = (props) => {
  return (
    <section className='type-card'>
      {props.type.name}
    </section>
  )
}

export default Type 