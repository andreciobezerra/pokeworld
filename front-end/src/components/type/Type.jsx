/**
 * @brief Card for each type
 * @author Andrécio Costa
 * @date 15/04/2020
 */

/* eslint-disable react/prop-types */
import React from 'react'

const Type = (props) => {
return(
  <div>
    <h2>{props.type.name}</h2>
    <span>{props.type.url}</span>
  </div>
)
}

export default Type 