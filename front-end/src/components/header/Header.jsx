/**
 * @brief Main header
 * @author Andrécio Costa
 * @date 15/04/2020
*/

import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header className='header-container'>
      <img src="./images/poke-logo.gif" alt="Home" className='header-logo' />
      <div className='links-container'>
        <Link to='/' className='header-links'> Home </Link>
        <Link to='/pokemons' className='header-links'> Pokémons </Link>
        <Link to='/types' className='header-links'> Types </Link>
        <Link to='/abilities' className='header-links'> Abilities </Link>
      </div>
    </header>
  )
}

export default Header