/**
 * @brief Main header
 * @author Andrécio Costa
 * @date 15/04/2020
*/

import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../lib/authFunctions'
import './header.css'

const Header = () => {
  return (
    <header className='header-container'>
      <img src="./images/poke-logo.gif" alt="logo" className='header-logo' />
      <div className='links-container'>
        <Link to='/' className='header-links'> Home </Link>
        <Link to='/pokemons' className='header-links'> Pokémons </Link>
        <Link to='/types' className='header-links'> Types </Link>
        <Link to='/abilities' className='header-links'> Abilities </Link>
      </div>
      <div className='header-user'>
          {
            (!isAuthenticated()) ?
              <div className='user-links' >
                <Link to='/signup' className='header-links'>Sign Up</Link>
                <Link to='/login' className='header-links'>Login</Link>
              </div>
              :
              <div>
                <Link to='/logout' className='header-links'>Logout</Link>
              </div>
          }
      </div>
    </header>
  )
}

export default Header