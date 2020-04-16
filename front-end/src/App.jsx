/**
 * @brief Manager of routes
 * @author Andrécio Costa
 * @date 15/04/2020
*/

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Pokemons from './pages/pokemons/Pokemons'
import Types from './pages/types/Types'
import Abilities from './pages/abilities/Abilities'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/pokemons' component={Pokemons} />
        <Route exact path='/types' component={Types} />
        <Route exact path='/abilities' component={Abilities} />
      </Switch>
    </BrowserRouter>
  )
}

export default App