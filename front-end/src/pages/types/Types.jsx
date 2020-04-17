import React, { useEffect, useState } from 'react'
import api from '../../lib/api'
import Type from '../../components/type/Type'
import './types.css'

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
      <h1 className='titles'>Types</h1>
      <div className='type-galery'>
        {types.map(type => <Type type={type} key={type.name} />)}
      </div>
    </section>
  )
}

export default Types