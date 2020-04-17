import { useState, useEffect } from 'react'
import api from './api'

export const useFetchOnePokemon = (name) => {
  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState('')
  const [img, setImg] = useState('')

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const response = await api.get(name)
        setPokemon(response.data)
        setImg(response.data.sprites['front_default'])
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    loadPokemons()
  }, [name])

  return [pokemon, img, loading]
}

export const useFetchData = (callback) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await callback()
        setData(response)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    loadData()
  }, [callback])

  return [ data, loading ]
}