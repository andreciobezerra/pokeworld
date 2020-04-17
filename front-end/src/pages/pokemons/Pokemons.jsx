/**
 * @brief Page for fetch all pokémons
 * @author Andrécio Costa
 * @date 15/04/2020
*/

import React, { useState } from 'react'
import { chunk } from '../../lib/auxiliarFunctions'
import { useFetchData } from '../../lib/hooks'
import api from '../../lib/api'
import PokemonsPage from '../../components/pokemonsPage/PokemonsPage'
import { Button } from '@material-ui/core'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import FastRewindIcon from '@material-ui/icons/FastRewind'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import FastForwardIcon from '@material-ui/icons/FastForward';
import './pokemons.css'

const Pokemons = () => {
  const [pokemons, loading] = useFetchData(api.getPokemons)
  const [page, setPage] = useState(0)

  // The next operation go to slice the pokemons arrays in groups of 10 
  let groups = chunk(pokemons, 10)

  return (
    <section>
      {(loading) ? <h2 className='loading'>Loading...</h2> :
        <div>
          <h1 className='titles'>Pokemons</h1>
          <PokemonsPage pokemons={groups[page]} />
          <div className='buttonSection'>
            {(page < groups.length - 1 && page > 0) ?
              <div className='buttonGroup4'>
                <Button variant='contained' color='primary' title='first page' onClick={() => setPage(0)}><FastRewindIcon /></Button>
                <Button variant='contained' color='primary' title='previous page' onClick={() => setPage(page - 1)}><ArrowLeftIcon /></Button>
                <Button variant='contained' color='primary' title='next page' onClick={() => setPage(page + 1)}><ArrowRightIcon /></Button>
                <Button variant='contained' color='primary' title='last page' onClick={() => setPage(groups.length - 1)}><FastForwardIcon /></Button>
              </div>
              :
              (page === 0) ?
                <div className='buttonGroup2'>
                  <Button variant='contained' color='primary' title='next page' onClick={() => setPage(page + 1)}><ArrowRightIcon /></Button>
                  <Button variant='contained' color='primary' title='last page' onClick={() => setPage(groups.length - 1)}><FastForwardIcon /></Button>
                </div>
                :
                <div className='buttonGroup2'>
                  <Button variant='contained' color='primary' title='first page' onClick={() => setPage(0)}><FastRewindIcon /></Button>
                  <Button variant='contained' color='primary' title='previous page' onClick={() => setPage(page - 1)}><ArrowLeftIcon /></Button>
                </div>
            }
          </div>
        </div>

      }

    </section>
  )
}

export default Pokemons
