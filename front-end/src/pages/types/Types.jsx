import React, { useEffect, useState } from 'react'
import api from '../../lib/api'
import Type from '../../components/type/Type'

const Types = () => {
  const [types, setTypes] = useState([])

  useEffect(() => {
    const loadTypes = async () => {
      try {
        const data = await api.getTypes()
        setTypes(data)
      } catch (error) {
        console.error(error)
      }
    }

    loadTypes()
  }, [])

  return (
    <section>
      {types.map(type => <Type type={type} key={type.name}/>)}
    </section>
  )
}

export default Types