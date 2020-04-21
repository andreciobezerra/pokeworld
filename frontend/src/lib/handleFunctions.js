/**
 * @brief Handle functions
 * @author Andrécio Costa
 * @date 17/04/2020
 */

import axios from 'axios'
import { login, logout } from './authFunctions'

const endpoint = (process.env.NODE_ENV === 'development') ? process.env.REACT_APP_DEVPOINT : process.env.REACT_APP_DEVPOINT

const api = axios.create({ baseURL: endpoint })

export const handleSignup = async (user) => {
    let response = await api.post('/signup', user)
    login(response.token)
    window.location.href = '/'
}

export const handleLogin = async (user) => {
    let response = await api.post('/login', user)
    login(response.token)
    window.location.href = '/' 
 }

export const handleLogout = () => {
  logout()
  window.location.href = '/'
 }