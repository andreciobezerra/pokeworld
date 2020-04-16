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