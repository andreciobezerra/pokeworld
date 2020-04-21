import React from 'react'
import { useFetchData } from '../../lib/hooks'
import api from '../../lib/api'
import Type from '../../components/type/Type'
import './types.css'

const Types = () => {
  const [types, loading] = useFetchData(api.getTypes)

  return (
    <section>
      {
        (loading) ? <h2 className='loading'>Loading...</h2> :
          <div>
            <h1 className='titles'>Types</h1>
            <div className='type-galery'>
              {types.map(type => <Type type={type} key={type.name} />)}
            </div>
          </div>
      }
    </section>
  )
}

export default Types