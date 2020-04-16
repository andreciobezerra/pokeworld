/**
 * @brief Tool for communications with api
 * @author Andrécio Costa
 * @date 15/04/2020
*/

import axios from 'axios'
import {alphaSort} from './auxiliarFunctions'

const base = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' })

const api = {
  getPokemons: async () => {
    const all = await base.get('pokemon/')
    const amount = all.data.count
    const response = await base.get(`pokemon/?offset=0&limit=${amount}`)
    const data = response.data.results
    
    //Will return the array in alphabetical order
    return alphaSort(data)
  },

  get: async (name) => {
    const response = await base.get(`pokemon/${name}`)
    return response
  },

  getTypes: async () =>{
    const response = await base.get('type/')
    const data = response.data.results
    
    return alphaSort(data)
  }

}

export default api